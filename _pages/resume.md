---
layout: page
title: Resume
permalink: /resume/
comments: false
---

<div id="resume-page" class="lang-scope lang-pending">
  <!-- ── Language toggle ─────────────────────────────────── -->
  <div class="lang-toggle-wrap" aria-label="Language toggle">
    <button type="button" class="lang-btn" id="btn-ko" onclick="setResumeLang('ko')">한국어</button>
    <span class="lang-divider">|</span>
    <button type="button" class="lang-btn" id="btn-en" onclick="setResumeLang('en')">English</button>
  </div>

  <style>
    /* ── Language toggle ───────────────────────────────── */
    .lang-toggle-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      justify-content: flex-end;
      margin-bottom: 12px;
    }

    .lang-btn {
      background: none;
      border: 1.5px solid #aaa;
      border-radius: 4px;
      padding: 4px 12px;
      font-size: 0.85rem;
      cursor: pointer;
      color: #888;
      transition: all 0.2s ease;
    }

    .lang-btn.active {
      background: #333;
      border-color: #333;
      color: #fff;
      font-weight: 600;
    }

    .lang-divider { color: #ccc; }

    /* ── Language visibility ───────────────────────────── */
    #resume-page .lang-en,
    #resume-page .lang-ko {
      display: none;
    }

    #resume-page.lang-en .lang-en { display: revert; }
    #resume-page.lang-ko .lang-ko { display: revert; }

    #resume-page.lang-pending .lang-en,
    #resume-page.lang-pending .lang-ko {
      display: none !important;
    }

    /* ── Layout ────────────────────────────────────────── */
    .academic-cv {
      margin-top: 8px;
    }

    .cv-section {
      border-top: 1px solid #e6e6e6;
      padding-top: 24px;
      margin-top: 30px;
    }

    .cv-section h2 {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 1.9rem;
      line-height: 1.25;
    }

    .cv-muted {
      color: #777;
    }

    .cv-hero {
      display: grid;
      grid-template-columns: 180px minmax(0, 1fr);
      gap: 28px;
      align-items: start;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    .cv-photo-wrap {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .cv-photo {
      width: 100%;
      max-width: 180px;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border-radius: 14px;
      border: 1px solid #e8e8e8;
      display: block;
    }

    .cv-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .cv-link-chip {
      display: inline-flex;
      align-items: center;
      padding: 6px 10px;
      border: 1px solid #ddd;
      border-radius: 999px;
      font-size: 0.9rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }

    .cv-link-chip:hover {
      border-color: #999;
      text-decoration: none;
    }

    .cv-intro {
      min-width: 0;
    }

    .cv-name {
      margin: 0 0 12px 0;
      font-size: 3rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .cv-one-line {
      margin: 0 0 14px 0;
      font-size: 1.08rem;
      color: #555;
      font-weight: 500;
    }

    .cv-intro p {
      margin: 0;
      line-height: 1.8;
      font-size: 1rem;
    }

    .cv-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .cv-card {
      border: 1px solid #ececec;
      border-radius: 14px;
      padding: 20px 22px;
      background: #fff;
    }

    .cv-card h2 {
      font-size: 1.7rem;
      margin-bottom: 10px;
    }

    .cv-card ul,
    .cv-section ul,
    .cv-section ol {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 1.2rem;
    }

    .cv-card li,
    .cv-section li {
      margin-bottom: 10px;
      line-height: 1.75;
    }

    .cv-compact-list li {
      margin-bottom: 8px;
    }

    .cv-entry {
      margin-bottom: 18px;
    }

    .cv-entry:last-child {
      margin-bottom: 0;
    }

    .cv-entry-title {
      font-weight: 700;
    }

    .cv-entry-meta {
      color: #666;
    }

    .cv-entry-desc {
      margin-top: 4px;
      color: #444;
    }

    .pub-list li {
      margin-bottom: 16px;
    }

    .pub-group + .pub-group {
      margin-top: 24px;
    }

    .cv-updated {
      margin-top: 28px;
      text-align: right;
      color: #777;
      font-size: 0.92rem;
    }

    @media (max-width: 900px) {
      .cv-hero {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .cv-photo-wrap {
        max-width: 180px;
      }

      .cv-two-col {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .cv-name {
        font-size: 2.3rem;
      }
    }
  </style>

  <div class="academic-cv">
    <!-- ── HERO ─────────────────────────────────────────── -->
    <header class="cv-hero">
      <div class="cv-photo-wrap">
        <img
          class="cv-photo"
          src="{{ '/assets/images/prof.jpg' | relative_url }}"
          alt="Profile photo"
        >

        <div class="cv-links">
          <a class="cv-link-chip" href="mailto:YOUR_EMAIL@EMAIL.COM">Email</a>
          <a class="cv-link-chip" href="https://github.com/YOUR_ID" target="_blank" rel="noopener">GitHub</a>
          <a class="cv-link-chip" href="https://scholar.google.com/" target="_blank" rel="noopener">Scholar</a>
          <a class="cv-link-chip" href="/assets/files/CV.pdf" target="_blank" rel="noopener">CV</a>
        </div>
      </div>

      <div class="cv-intro">
        <h1 class="cv-name">
          <span class="lang-en">Eunhye Choi</span>
          <span class="lang-ko">최은혜</span>
        </h1>

      <p class="cv-one-line">
        <span class="lang-en">M.S. student at KAIST developing generative AI models and end-to-end machine learning systems for real-world applications.</span>
        <span class="lang-ko">생성형 AI 모델과 실제 문제 해결을 위한 End-to-End 머신러닝 시스템을 개발하는 KAIST 전산학부 석사과정 최은혜입니다.</span>
      </p>

        <!-- EN bio -->
        <p class="lang-en" style="text-align: justify; word-break: keep-all;">
          I am an M.S. student at the School of Computing in KAIST, advised by Professor Jinah Park at the Computer Graphics and Visualization Lab. I received my B.S. from Ajou University, majoring in Digital Media and Software &amp; Computer Engineering. My research focuses on generative AI, particularly diffusion models and vision language models (VLMs). I am interested in improving both the quantitative and qualitative performance of these models, applying them to real-world problems and examining their potential from a user perspective.
        </p>

        <!-- KO bio -->
        <p class="lang-ko" style="text-align: justify; word-break: keep-all;">
          저는 KAIST 전산학부 석사과정에 재학 중이며, Computer Graphics and Visualization 연구실에서 박진아 교수님의 지도를 받고 있습니다. 아주대학교에서 디지털미디어와 소프트웨어 및 컴퓨터공학을 전공하였으며, 생성형 AI, 특히 Diffusion Model과 Vision Language Model(VLM)을 중심으로 연구하고 있습니다. 또한 이러한 모델의 정량적·정성적 성능을 향상시키고, 이를 실제 문제 해결에 적용하여 사용자 관점에서 그 활용 가능성을 살펴보는 데 관심을 두고 있습니다.
        </p>
      </div>
    </header>

    <!-- ── INTERESTS + SKILLS ───────────────────────────── -->
    <section class="cv-section cv-two-col">
      <div class="cv-card">
        <h2>
          <span class="lang-en">Interests</span>
          <span class="lang-ko">관심 분야</span>
        </h2>
        <ul class="cv-compact-list">
          <li>
            <span class="lang-en">Generative AI (Diffusion Models & VLMs)</span>
            <span class="lang-ko">생성형 AI (Diffusion Models & VLMs)</span>
          </li>
          <li>
            <span class="lang-en">End-to-End Machine Learning Systems</span>
            <span class="lang-ko">End-to-End 머신러닝 시스템</span>
          </li>
          <li>
            <span class="lang-en">Model Optimization and Real-World Deployment</span>
            <span class="lang-ko">모델 최적화 및 실제 환경 적용</span>
          </li>
        </ul>
      </div>

      <div class="cv-card">
        <h2>
          <span class="lang-en">Skills</span>
          <span class="lang-ko">기술 스택</span>
        </h2>
        <ul class="cv-compact-list">
          <li>
            <strong>
              <span class="lang-en">Machine Learning / Deep Learning:</span>
              <span class="lang-ko">머신러닝 / 딥러닝:</span>
            </strong>
            PyTorch, TensorFlow, OpenCV
          </li>
          <li>
            <strong>
              <span class="lang-en">Programming:</span>
              <span class="lang-ko">프로그래밍:</span>
            </strong>
            Python, C++, C, C#, GLSL
          </li>
          <li>
            <strong>
              <span class="lang-en">Systems / Development:</span>
              <span class="lang-ko">시스템 / 개발:</span>
            </strong>
            Git, Docker, AWS
          </li>
          <li>
            <strong>
              <span class="lang-en">Graphics / Engine Tools:</span>
              <span class="lang-ko">그래픽스 / 엔진 도구:</span>
            </strong>
            OpenGL, Unity, Unreal
          </li>
          <li>
            <strong>
              <span class="lang-en">Languages:</span>
              <span class="lang-ko">사용 언어:</span>
            </strong>
            <span class="lang-en">Korean (Native), English (Fluent)</span>
            <span class="lang-ko">한국어 (모국어), 영어 (비즈니스 가능)</span>
          </li>
        </ul>
      </div>
    </section>


    <!-- ── EDUCATION ────────────────────────────────────── -->
    <section class="cv-section">
      <h2>
        <span class="lang-en">Education</span>
        <span class="lang-ko">학력</span>
      </h2>
      <div class="cv-entry">
        <div class="cv-entry-title">
          <span class="lang-en">Korea Advanced Institute of Science and Technology (KAIST)</span>
          <span class="lang-ko">한국과학기술원 (KAIST)</span>
        </div>
        <div class="cv-entry-desc">
          <span class="lang-en">M.S. in School of Computing <span class="cv-muted">(First)</span></span>
          <span class="lang-ko">전산학부 석사과정 <span class="cv-muted">(제1전공)</span></span>
          <br>
          <span class="lang-en">Graduate School of Metaverse <span class="cv-muted">(Interdisciplinary)</span></span>
          <span class="lang-ko">메타버스대학원 <span class="cv-muted">(학제전공)</span></span>
        </div>
        <div class="cv-entry-meta">
          <span class="lang-en">September 2024 – Present</span>
          <span class="lang-ko">2024년 9월 – 현재</span>
        </div>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-title">
          <span class="lang-en">Ajou University</span>
          <span class="lang-ko">아주대학교</span>
        </div>
        <div class="cv-entry-desc">
          <span class="lang-en">B.S. in Digital Media <span class="cv-muted">(First, Intensive)</span></span>
          <span class="lang-ko">디지털미디어학과 학사 <span class="cv-muted">(제1전공, 심화전공)</span></span>
          <br>
          <span class="lang-en">B.S. in Software and Computer Engineering <span class="cv-muted">(Double Major)</span></span>
          <span class="lang-ko">소프트웨어 및 컴퓨터공학과 학사 <span class="cv-muted">(복수전공)</span></span>
        </div>
        <div class="cv-entry-meta">
          <span class="lang-en">March 2020 – August 2024</span>
          <span class="lang-ko">2020년 3월 – 2024년 8월</span>
        </div>
      </div>
    </section>

    <!-- ── EXPERIENCE ───────────────────────────────────── -->
    <section id="experience" class="cv-section">
      <h2>
        <span class="lang-en">Experience</span>
        <span class="lang-ko">경험</span>
      </h2>
      <div class="cv-entry">
        <div class="cv-entry-title">
          <span class="lang-en">Researcher, Computer Graphics and Visualization Lab, KAIST</span>
          <span class="lang-ko">연구원, KAIST Computer Graphics and Visualization 연구실</span>
        </div>
        <div class="cv-entry-meta">
          <span class="lang-en">March 2025 – Present</span>
          <span class="lang-ko">2025년 3월 – 현재</span>
        </div>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-title">
          <span class="lang-en">Researcher, Games and Life Lab, Graduate School of Metaverse, KAIST</span>
          <span class="lang-ko">연구원, KAIST 메타버스대학원 Games and Life 연구실</span>
        </div>
        <div class="cv-entry-meta">
          <span class="lang-en">September 2024 – February 2025</span>
          <span class="lang-ko">2024년 9월 – 2025년 2월</span>
        </div>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-title">
          <span class="lang-en">Researcher, Interactive Entertainment Lab, Ajou University</span>
          <span class="lang-ko">연구원, 아주대학교 Interactive Entertainment 연구실</span>
        </div>
        <div class="cv-entry-meta">
          <span class="lang-en">December 2022 – August 2024</span>
          <span class="lang-ko">2022년 12월 – 2024년 8월</span>
        </div>
      </div>
    </section>

    <!-- ── PUBLICATIONS ─────────────────────────────────── -->
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

    <!-- ── AWARDS ───────────────────────────────────────── -->
    <section id="awards" class="cv-section">
      <h2>
        <span class="lang-en">Awards</span>
        <span class="lang-ko">수상</span>
      </h2>
      <ul>
        <li>
          <strong>2024</strong> —
          <span class="lang-en">Virtual Convergence Service Developer Competition, Woongjin ThinkBig Award, 3rd Place</span>
          <span class="lang-ko">가상융합 서비스 개발자 경진대회, 웅진씽크빅 특별상, 3위</span>
        </li>
        <li>
          <strong>2023</strong> —
          <span class="lang-en">XR Device Content Makeathon, NIPA President's Award, 2nd Place</span>
          <span class="lang-ko">XR 디바이스 콘텐츠 메이커톤, 정보통신산업진흥원장상, 2위</span>
        </li>
        <li>
          <strong>2023</strong> —
          <span class="lang-en">Korea Game Society Spring Conference, Excellent Paper Award</span>
          <span class="lang-ko">한국게임학회 춘계학술대회, 우수논문상</span>
        </li>
        <li>
          <strong>2022</strong> —
          <span class="lang-en">Gyeonggi Culture Technology Academy, Grand Award, 1st Place</span>
          <span class="lang-ko">경기문화기술아카데미, 대상, 1위</span>
        </li>
        <li>
          <strong>2022</strong> —
          <span class="lang-en">Gyeonggi Metaverse Academy, Excellence Award, 2nd Place</span>
          <span class="lang-ko">경기 메타버스 아카데미, 우수상, 2위</span>
        </li>
      </ul>
    </section>

    <!-- ── TEACHING ─────────────────────────────────────── -->
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
      </ul>
    </section>

    <!-- ── SCHOLARSHIPS ─────────────────────────────────── -->
    <section id="scholarships" class="cv-section">
      <h2>
        <span class="lang-en">Scholarships</span>
        <span class="lang-ko">장학금</span>
      </h2>
      <ul style="list-style: none; padding-left: 0; margin-left: 0;">
        <li class="cv-entry">
          <div class="cv-entry-title">
            <span class="lang-en">National Excellent Scholarship for STEM</span>
            <span class="lang-ko">이공계 국가우수장학금</span>
          </div>
          <div class="cv-entry-desc">
            <span class="lang-en">Awarded by the Korea Student Aid Foundation (KOSAF)</span>
            <span class="lang-ko">한국장학재단 (KOSAF) 지원</span>
          </div>
          <div class="cv-entry-meta">
            <span class="lang-en">October 2025</span>
            <span class="lang-ko">2025년 10월</span>
          </div>
        </li>

        <li class="cv-entry">
          <div class="cv-entry-title">
            <span class="lang-en">KB Dream Wave 2030 Talent Development (A-Track)</span>
            <span class="lang-ko">KB 드림웨이브 2030 인재육성 (A-트랙)</span>
          </div>
          <div class="cv-entry-desc">
            <span class="lang-en">Awarded by KB Financial Group (Sapiens 4.0)</span>
            <span class="lang-ko">KB금융그룹 (사피엔스 4.0) 지원</span>
          </div>
          <div class="cv-entry-meta">
            <span class="lang-en">July 2022 – December 2022</span>
            <span class="lang-ko">2022년 7월 – 2022년 12월</span>
          </div>
        </li>
      </ul>
    </section>

    <div class="cv-updated">
      <span class="lang-en">Updated: 2026.03.23</span>
      <span class="lang-ko">업데이트: 2026.03.23</span>
    </div>
  </div>
</div>

<script>
  function setResumeLang(lang) {
    const root = document.getElementById('resume-page');
    const btnKo = document.getElementById('btn-ko');
    const btnEn = document.getElementById('btn-en');

    if (!root || !btnKo || !btnEn) return;

    root.classList.remove('lang-ko', 'lang-en');
    root.classList.add('lang-' + lang);
    root.classList.remove('lang-pending');

    btnKo.classList.toggle('active', lang === 'ko');
    btnEn.classList.toggle('active', lang === 'en');

    btnKo.setAttribute('aria-pressed', lang === 'ko' ? 'true' : 'false');
    btnEn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');

    localStorage.setItem('resume-lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('resume-lang') || 'ko';
    setResumeLang(savedLang);
  });
</script>