// Tags bilingual markdown so the EN/KO toggle can show one language at a time.
// Sections are split at h2/h3: a Korean heading is "ko"; an English heading is "en"
// when it is the child of an "en" section or its next same-level heading is Korean;
// anything else (e.g. "Links", "Results / 결과") stays visible in both languages.
const HANGUL = /[가-힣]/;
const LATIN = /[A-Za-z]/;

const text = (node) =>
  node.type === 'text' ? node.value : (node.children || []).map(text).join('');

const isEl = (node, ...tags) => node.type === 'element' && tags.includes(node.tagName);
const depth = (node) => Number(node.tagName[1]);

function headingScript(node) {
  const t = text(node);
  if (!HANGUL.test(t)) return 'latin';
  return LATIN.test(t) && t.includes('/') ? 'mixed' : 'hangul';
}

function splitParagraph(p) {
  const segments = [[]];
  for (const child of p.children) {
    if (isEl(child, 'br') || (child.type === 'raw' && /^<br\s*\/?>$/i.test(child.value.trim()))) segments.push([]);
    else segments[segments.length - 1].push(child);
  }
  const tagged = segments
    .filter((seg) => text({ children: seg }).trim())
    .map((seg) => ({ seg, lang: HANGUL.test(text({ children: seg })) ? 'ko' : 'en' }));
  if (!tagged.some((s) => s.lang === 'ko') || !tagged.some((s) => s.lang === 'en')) return [p];

  const groups = [];
  for (const { seg, lang } of tagged) {
    const last = groups[groups.length - 1];
    if (last && last.lang === lang) last.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] }, ...seg);
    else groups.push({ lang, children: [...seg] });
  }
  return groups.map(({ lang, children }) => ({
    type: 'element',
    tagName: 'p',
    properties: { className: [`lang-${lang}`] },
    children,
  }));
}

function numberSection(h) {
  const first = h.children[0];
  const m = first?.type === 'text' && first.value.match(/^\s*(\d+)\)\s*/);
  if (!m) return;
  first.value = first.value.slice(m[0].length);
  h.properties.className = [...(h.properties.className || []), 'numbered-section'];
  h.children.unshift({
    type: 'element',
    tagName: 'span',
    properties: { className: ['section-num'], ariaHidden: 'true' },
    children: [{ type: 'text', value: m[1] }],
  });
}

export default function rehypeBilingual() {
  return (tree) => {
    const kids = tree.children;
    kids.filter((n) => isEl(n, 'h2')).forEach(numberSection);
    const headings = kids.filter((n) => isEl(n, 'h2', 'h3'));

    const langOf = new Map();
    const stack = [];
    headings.forEach((h, i) => {
      while (stack.length && depth(stack[stack.length - 1]) >= depth(h)) stack.pop();
      const parentLang = stack.length ? langOf.get(stack[stack.length - 1]) : null;
      const script = headingScript(h);
      let lang = 'both';
      if (script === 'hangul') lang = 'ko';
      else if (script === 'latin') {
        if (parentLang === 'en') lang = 'en';
        else {
          const next = headings.slice(i + 1).find((n) => depth(n) <= depth(h));
          if (next && depth(next) === depth(h) && headingScript(next) === 'hangul') lang = 'en';
        }
      }
      langOf.set(h, lang);
      stack.push(h);
    });

    const out = [];
    let section = null;
    let seenHeading = false;
    for (const node of kids) {
      if (isEl(node, 'h2', 'h3')) {
        seenHeading = true;
        const lang = langOf.get(node);
        section = lang === 'both' ? null : {
          type: 'element',
          tagName: 'div',
          properties: { className: [`lang-${lang}`] },
          children: [],
        };
        if (section) out.push(section);
      }
      if (section) section.children.push(node);
      else if (!seenHeading && isEl(node, 'p')) out.push(...splitParagraph(node));
      else out.push(node);
    }
    tree.children = out;
  };
}
