---
layout: page
title: Resume
permalink: /resume/
comments: false
---

<!-- ── Language toggle ─────────────────────────────────── -->
<div class="lang-toggle-wrap">
  <button class="lang-btn" id="btn-en" onclick="setLang('en')">EN</button>
  <span class="lang-divider">|</span>
  <button class="lang-btn" id="btn-ko" onclick="setLang('ko')">한국어</button>
</div>

<style>
/* ── Toggle button ───────────────────────────────────── */
.lang-toggle-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: flex-end;
  margin-bottom: 8px;
}
.lang-btn {
  background: none;
  border: 1.5px solid #aaa;
  border-radius: 4px;
  padding: 3px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  color: #888;
  transition: all .2s;
}
.lang-btn.active {
  background: #333;
  border-color: #333;
  color: #fff;
  font-weight: 600;
}
.lang-divider { color: #ccc; }

/* ── Language visibility ─────────────────────────────── */
/* Default: show EN, hide KO */
.lang-ko { display: none; }

body.lang-ko .lang-ko { display: revert; }
body.lang-ko .lang-en { display: none; }
</style>

<div class="academic-cv">
  <!-- ── HERO ───────────────────────────────────────────── -->
  <header class="cv-hero" style="margin-top: 50px;">
    <div class="cv-photo-wrap">
      <img
        class="cv-photo"
        src="{{ '/assets/images/prof.jpg' | relative_url }}"
        alt="Eunhye Choi profile photo"
        style="margin-top: 50px;"
      >
    </div>

    <div class="cv-intro">
      <h1 class="cv-name">Eunhye Choi <span class="lang-ko" style="font-size:0.85em; font-weight:400;">/ 최은혜</span></h1>

      <!-- EN bio -->
      <p class="lang-en" style="text-align: justify; word-break: keep-all;">
        I am a M.S. student in the School of Computing at KAIST, advised by Professor Jinah Park in the Computer Graphics and Visualization Lab. I received my B.S. from Ajou University in Digital Media and Software &amp; Computer Engineering. My interests include Generative AI, Computer Graphics, and Extended Reality (XR). In particular, I focus on developing systems and technologies for digital content creation.
      </p>

      <!-- KO bio -->
      <p class="lang-ko" style="text-align: justify; word-break: keep-all;">
        저는 KAIST 전산학부 석사과정 학생으로 Computer Graphics and Visualization 연구실에서 박진아 교수님의 지도를 받고 있습니다. 아주대학교 디지털미디어학과, 소프트웨어 및 컴퓨터공학을 전공하여 학사 학위를 받았으며, Generative AI, Computer Graphics, Extended Reality(XR) 분야에 관심을 가지고 있습니다. 특히 디지털 콘텐츠 생성을 위한 시스템 및 기술 개발을 중심으로 연구하고 있습니다.
      </p>
    </div>
  </header>

  <!-- ── RESEARCH INTERESTS ─────────────────────────────── -->
  <section id="research" class="cv-section">
    <h2>
      <span class="lang-en">Research Interests</span>
      <span class="lang-ko">연구 관심사</span>
    </h2>
    <ul>
      <li>Generative AI</li>
      <li>Computer Graphics</li>
      <li>VR/AR</li>
    </ul>
  </section>

  <!-- ── EDUCATION + SKILLS ─────────────────────────────── -->
  <section class="cv-section cv-two-col">
    <div>
      <h2>
        <span class="lang-en">Education</span>
        <span class="lang-ko">학력</span>
      </h2>
      <ul>
        <li>
          <strong>
            <span class="lang-en">Korea Advanced Institute of Science and Technology (KAIST)</span>
            <span class="lang-ko">한국과학기술원 (KAIST)</span>
          </strong><br>
          <span class="lang-en">M.S. in School of Computing <span class="cv-muted">(First)</span></span>
          <span class="lang-ko">전산학부 석사과정 <span class="cv-muted">(수석)</span></span>
          <br>
          <span class="lang-en">Graduate School of Metaverse <span class="cv-muted">(Interdisciplinary)</span></span>
          <span class="lang-ko">메타버스대학원 <span class="cv-muted">(학제간)</span></span>
          <br>
          <span class="cv-muted">
            <span class="lang-en">September 2024 – Present</span>
            <span class="lang-ko">2024년 9월 – 현재</span>
          </span>
        </li>
        <li>
          <strong>
            <span class="lang-en">Ajou University</span>
            <span class="lang-ko">아주대학교</span>
          </strong><br>
          <span class="lang-en">B.S. in Digital Media <span class="cv-muted">(First, Intensive)</span></span>
          <span class="lang-ko">디지털미디어학과 학사 <span class="cv-muted">(수석, 심화)</span></span>
          <br>
          <span class="lang-en">Software and Computer Engineering <span class="cv-muted">(Double)</span></span>
          <span class="lang-ko">소프트웨어 및 컴퓨터공학 <span class="cv-muted">(복수전공)</span></span>
          <br>
          <span class="cv-muted">
            <span class="lang-en">March 2020 – August 2024</span>
            <span class="lang-ko">2020년 3월 – 2024년 8월</span>
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h2>
        <span class="lang-en">Skills</span>
        <span class="lang-ko">기술 스택</span>
      </h2>
      <ul>
        <li><strong>Languages:</strong> Python, C++, C, C#, GLSL</li>
        <li><strong>Tools:</strong> Git, PyTorch, TensorFlow, OpenGL, OpenCV, Docker, AWS</li>
        <li><strong>Engines:</strong> Unity, Unreal</li>
        <li>
          <strong>
            <span class="lang-en">Spoken Languages:</span>
            <span class="lang-ko">언어:</span>
          </strong>
          <span class="lang-en">Korean (Native), English (Fluent)</span>
          <span class="lang-ko">한국어 (모국어), 영어 (유창)</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- ── EXPERIENCE ─────────────────────────────────────── -->
  <section id="experience" class="cv-section">
    <h2>
      <span class="lang-en">Work &amp; Research Experience</span>
      <span class="lang-ko">연구 경험</span>
    </h2>
    <ul>
      <li>
        <strong>
          <span class="lang-en">Researcher</span>
          <span class="lang-ko">연구원</span>
        </strong>,
        <span class="lang-en">School of Computing, Computer Graphics and Visualization Lab, KAIST</span>
        <span class="lang-ko">KAIST 전산학부, Computer Graphics and Visualization 연구실</span>
        <span class="cv-muted">
          <span class="lang-en">March 2025 – Present</span>
          <span class="lang-ko">2025년 3월 – 현재</span>
        </span>
      </li>
      <li>
        <strong>
          <span class="lang-en">Researcher</span>
          <span class="lang-ko">연구원</span>
        </strong>,
        <span class="lang-en">Graduate School of Metaverse, Games and Life Lab, KAIST</span>
        <span class="lang-ko">KAIST 메타버스대학원, Games and Life 연구실</span>
        <span class="cv-muted">
          <span class="lang-en">September 2024 – February 2025</span>
          <span class="lang-ko">2024년 9월 – 2025년 2월</span>
        </span>
      </li>
      <li>
        <strong>
          <span class="lang-en">Researcher</span>
          <span class="lang-ko">연구원</span>
        </strong>,
        <span class="lang-en">Department of Digital Media, Interactive Entertainment Lab, Ajou University</span>
        <span class="lang-ko">아주대학교 디지털미디어학과, Interactive Entertainment 연구실</span>
        <span class="cv-muted">
          <span class="lang-en">December 2022 – August 2024</span>
          <span class="lang-ko">2022년 12월 – 2024년 8월</span>
        </span>
      </li>
    </ul>
  </section>

  <!-- ── AWARDS ─────────────────────────────────────────── -->
  <section id="awards" class="cv-section">
    <h2>
      <span class="lang-en">Awards</span>
      <span class="lang-ko">수상</span>
    </h2>
    <ul>
      <li>
        <strong>2024</strong> —
        <span class="lang-en">3rd Place, Woongjin ThinkBig Award, Virtual Convergence Service Developer Competition</span>
        <span class="lang-ko">3위, 웅진씽크빅 특별상, 가상융합 서비스 개발자 경진대회</span>
      </li>
      <li>
        <strong>2023</strong> —
        <span class="lang-en">2nd Place, NIPA President's Award, XR Device Content Makeathon</span>
        <span class="lang-ko">2위, 정보통신산업진흥원장상, XR 디바이스 콘텐츠 메이커톤</span>
      </li>
      <li>
        <strong>2023</strong> —
        <span class="lang-en">Excellent Paper Award, Korea Game Society Spring Conference</span>
        <span class="lang-ko">우수논문상, 한국게임학회 춘계학술대회</span>
      </li>
      <li>
        <strong>2022</strong> —
        <span class="lang-en">1st Place, Grand Award, Gyeonggi Culture Technology Academy</span>
        <span class="lang-ko">1위, 대상, 경기문화기술아카데미</span>
      </li>
      <li>
        <strong>2022</strong> —
        <span class="lang-en">2nd Place, Excellence Award, Gyeonggi Metaverse Academy</span>
        <span class="lang-ko">2위, 우수상, 경기 메타버스 아카데미</span>
      </li>
    </ul>
  </section>

  <!-- ── PUBLICATIONS ───────────────────────────────────── -->
  <section id="publications" class="cv-section">
    <h2>
      <span class="lang-en">Publications</span>
      <span class="lang-ko">논문</span>
    </h2>

    <div class="pub-group">
      <h3>
        <span class="lang-en">Conferences</span>
        <span class="lang-ko">학회</span>
      </h3>
      <ol class="pub-list">
        <li>
          <strong>TouchArt: Vibrotactile Interaction for Color Perception in Virtual Painting</strong><br>
          Gyuna Lim, Anney Vo, <strong>Eunhye Choi</strong>, Jinah Park<br>
          2025 IEEE World Haptics Conference, Hands-On Demonstrations
        </li>
        <li>
          <strong>Press Start to Continue: A Thematic Analysis of the Iterative Process of Hardcore Players with Disabilities Adapting to Gameplay Difficulties</strong><br>
          Eunbyul Park*, Jihun Chae*, Karam Eum, <strong>Eunhye Choi</strong>, Hyunyoung Oh, Youngyim Doh<br>
          2025 ACM CHI Conference on Human Factors in Computing Systems, Late Breaking Work
        </li>
        <li>
          <strong>RAG-Enhanced LLM Chatbot for Game Accessibility: Development and Evaluation of GAIA</strong><br>
          Hyunyoung Oh, Karam Eum*, Eunbyul Park*, Jihun Chae*, Junsuk Seo*, <strong>Eunhye Choi</strong>*, Youngyim Doh<br>
          2025 Human Computer Interface Korea
        </li>
        <li>
          <strong>Prompting-Based LLM Framework for Ethical Decision-Making in the Trolley Dilemma: Embedding Hofstede's Cultural Dimension Theory (PLETH)</strong><br>
          <strong>Eunhye Choi</strong>*, Jihun Chae*, Youngyim Doh<br>
          <span class="lang-en">2024 Fall Conference on Korean Artificial Intelligence Association</span>
          <span class="lang-ko">2024 한국인공지능학회 추계학술대회</span>
        </li>
        <li>
          <strong>BCI Neurofeedback Game based on Attention and Meditation Training</strong><br>
          <strong>Eunhye Choi</strong>, Gyuhwan Oh<br>
          <span class="lang-en">2023 Spring Conference on Korea Game Society</span>
          <span class="lang-ko">2023 한국게임학회 춘계학술대회</span>
        </li>
      </ol>
    </div>

    <div class="pub-group">
      <h3>
        <span class="lang-en">Journal</span>
        <span class="lang-ko">저널</span>
      </h3>
      <ol class="pub-list">
        <li>
          <strong>Analysis of the Aesthetic Elements of Art Game through the Player's Experience</strong><br>
          <strong>Eunhye Choi</strong>, Jiyeon Ahn<br>
          <span class="lang-en">Journal of Art Education, vol.72, February 2023, pp. 297–330.</span>
          <span class="lang-ko">미술교육논총, 72권, 2023년 2월, pp. 297–330.</span>
        </li>
      </ol>
    </div>

    <div class="pub-group">
      <h3>
        <span class="lang-en">Book Chapter</span>
        <span class="lang-ko">단행본</span>
      </h3>
      <ol class="pub-list">
        <li>
          <strong>Future Education and Art Education: Future, World, Digital, AI, Virtual Reality, Metaverse, NFT, Art, Education</strong><br>
          <strong>Eunhye Choi</strong>, Jiyeon Ahn et al.<br>
          <span class="lang-en">Education Science Publishing, January 2024, pp. 175–213.</span>
          <span class="lang-ko">교육과학사, 2024년 1월, pp. 175–213.</span>
        </li>
      </ol>
    </div>
  </section>

  <!-- ── TEACHING ────────────────────────────────────────── -->
  <section id="teaching" class="cv-section">
    <h2>
      <span class="lang-en">Teaching Experience</span>
      <span class="lang-ko">조교 경험</span>
    </h2>
    <ul>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Metaverse and Human Psychology, KAIST</span>
        <span class="lang-ko">메타버스와 인간심리, KAIST</span>
        <span class="cv-muted">
          <span class="lang-en">(Fall 2024)</span>
          <span class="lang-ko">(2024년 가을)</span>
        </span>
      </li>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Game Engine Programming, Ajou University</span>
        <span class="lang-ko">게임엔진프로그래밍, 아주대학교</span>
        <span class="cv-muted">
          <span class="lang-en">(Spring 2023)</span>
          <span class="lang-ko">(2023년 봄)</span>
        </span>
      </li>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Secondary Information, Ajou University Science Education Institute for the Gifted</span>
        <span class="lang-ko">중등정보, 아주대학교 과학영재교육원</span>
        <span class="cv-muted">(2023)</span>
      </li>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Understanding Games, Ajou University</span>
        <span class="lang-ko">게임의 이해, 아주대학교</span>
        <span class="cv-muted">
          <span class="lang-en">(Fall 2022)</span>
          <span class="lang-ko">(2022년 가을)</span>
        </span>
      </li>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Creative Media, Ajou University</span>
        <span class="lang-ko">창의미디어, 아주대학교</span>
        <span class="cv-muted">
          <span class="lang-en">(Spring 2022)</span>
          <span class="lang-ko">(2022년 봄)</span>
        </span>
      </li>
      <li>
        <strong>TA</strong>,
        <span class="lang-en">Graphic Design, Ajou University</span>
        <span class="lang-ko">그래픽디자인, 아주대학교</span>
        <span class="cv-muted">
          <span class="lang-en">(Fall 2021)</span>
          <span class="lang-ko">(2021년 가을)</span>
        </span>
      </li>
    </ul>
  </section>

  <!-- ── SCHOLARSHIPS ───────────────────────────────────── -->
  <section id="scholarships" class="cv-section">
    <h2>
      <span class="lang-en">Scholarships</span>
      <span class="lang-ko">장학금</span>
    </h2>
    <ul style="list-style: none; padding-left: 0; margin-left: 0;">
      <li style="display:flex; justify-content:space-between; align-items:flex-start; gap:20px; margin-bottom:18px;">
        <div>
          <strong>
            <span class="lang-en">National Excellent Scholarship for STEM</span>
            <span class="lang-ko">이공계 국가우수장학금</span>
          </strong><br>
          <span class="lang-en">Awarded by the Korea Student Aid Foundation (KOSAF)</span>
          <span class="lang-ko">한국장학재단 (KOSAF) 지원</span>
        </div>
        <span class="cv-muted" style="white-space:nowrap;">
          <span class="lang-en">October 2025</span>
          <span class="lang-ko">2025년 10월</span>
        </span>
      </li>
      <li style="display:flex; justify-content:space-between; align-items:flex-start; gap:20px;">
        <div>
          <strong>
            <span class="lang-en">KB Dream Wave 2030 Talent Development (A-Track)</span>
            <span class="lang-ko">KB 드림웨이브 2030 인재육성 (A-트랙)</span>
          </strong><br>
          <span class="lang-en">Awarded by KB Financial Group (Sapiens 4.0)</span>
          <span class="lang-ko">KB금융그룹 (사피엔스 4.0) 지원</span>
        </div>
        <span class="cv-muted" style="white-space:nowrap;">
          <span class="lang-en">July 2022 – December 2022</span>
          <span class="lang-ko">2022년 7월 – 2022년 12월</span>
        </span>
      </li>
    </ul>
  </section>

  <div class="cv-updated" style="text-align: right;">
    Updated : 2026.03.23
  </div>
</div>

<!-- ── Language toggle script ──────────────────────────── -->
<script>
  function setLang(lang) {
    // Toggle body class
    document.body.classList.remove('lang-en', 'lang-ko');
    document.body.classList.add('lang-' + lang);

    // Toggle button active state
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ko').classList.toggle('active', lang === 'ko');

    // Remember choice
    localStorage.setItem('cv-lang', lang);
  }

  // On page load: restore saved preference (default EN)
  (function () {
    const saved = localStorage.getItem('cv-lang') || 'en';
    setLang(saved);
  })();
</script>