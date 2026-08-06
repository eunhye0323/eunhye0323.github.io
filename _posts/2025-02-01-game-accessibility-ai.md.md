---
layout: post
title: "Conversational AI Service for Game Accessibility"
author: eunhye
categories: [HCI, Accessibility]
summary: "A conversational AI service that supports gamers with disabilities and novice players by providing accessibility-aware gameplay guidance using a RAG-based LLM chatbot."
thumbnail: assets/images/chi2025.jpg
date: 2025-02-01
---

**Project Period:** 2024.09 – 2025.02 (6 months)<br>**참여 기간:** 2024.09 – 2025.02 (6개월)

---

## Project Overview

GAIA (Game AI Assistant) is a conversational chatbot that answers gameplay questions in natural language while the player is still in the game. It targets novice players and players with accessibility needs, the people most likely to get stuck on controls, mechanics, or strategy, and asks whether an LLM-based assistant can serve as a personalized accessibility support tool. This work was presented at **CHI 2025** and **HCIK 2025**.

GAIA(Game AI Assistant)는 게임을 하다가 막히는 순간에 자연어로 질문하면 필요한 정보를 바로 알려주는 대화형 챗봇입니다. 조작법이나 게임 시스템을 익히기 어려운 초보 플레이어, 그리고 접근성 지원이 필요한 플레이어를 대상으로, LLM 기반 어시스턴트가 개인화된 접근성 지원 도구가 될 수 있는지 확인하고자 했습니다. 이 연구는 **CHI 2025**와 **HCIK 2025**에서 발표되었습니다.

<div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
  <img src="{{ site.baseurl }}/assets/images/chi2025.jpg"
       alt="TouchArt main image"
       style="width:48%; height:auto; border-radius:12px;">

  <img src="{{ site.baseurl }}/assets/images/hcik.jpg"
       alt="TouchArt poster"
       style="width:48%; height:auto; border-radius:12px;">
</div>

---

### Research Presentation Video

<p>
<div style="position:relative;padding-bottom:56.25%;height:0;">
<iframe
src="https://www.youtube.com/embed/pxwgWZB7xy4"
style="position:absolute;top:0;left:0;width:100%;height:100%;"
frameborder="0"
allowfullscreen>
</iframe>
</div>
</p>

---

## Research Background

Games that demand complex controls, system knowledge, or fast reactions are hard to pick up, and for players with disabilities or little gaming experience those hurdles can put a game out of reach entirely. Prior work has shown that conversational agents can support learning and guidance in digital environments, which raised the question behind this project: can an LLM-based agent provide that kind of support in real time, during play?

복잡한 조작이나 시스템 이해, 빠른 반응이 필요한 게임일수록 새로 배우기가 어렵고, 장애가 있거나 게임 경험이 적은 사용자에게 이런 장벽은 접근성을 크게 떨어뜨립니다. 대화형 에이전트가 디지털 환경에서 학습과 안내를 도울 수 있다는 선행 연구를 바탕으로, LLM 기반 대화형 AI가 게임 플레이 중 실시간 지원까지 제공할 수 있는지 살펴보았습니다.

---

## System Overview

GAIA runs as a Discord chatbot, so players can talk to the assistant without leaving their game. Internally it pairs GPT-4 Turbo with a retrieval-augmented generation (RAG) setup: a LangChain retrieval pipeline searches a FAISS vector database built from structured game knowledge, and the model grounds its answers in what it retrieves.

GAIA는 Discord 챗봇으로 구현되어 있어 게임 화면을 벗어나지 않고 어시스턴트와 대화할 수 있습니다. 내부적으로는 GPT-4 Turbo에 RAG(Retrieval-Augmented Generation) 구조를 결합했으며, LangChain 검색 파이프라인이 FAISS 벡터 데이터베이스에 저장된 게임 지식에서 관련 정보를 찾아 답변의 근거로 제공합니다.

---

## System Architecture

A question sent through Discord is converted into an embedding and matched against the game knowledge database; the retrieved passages then go to the LLM together with the question, and the model writes a response grounded in that context. Tying answers to retrieved content reduces hallucinations and makes the responses more reliable.

Discord로 들어온 질문은 임베딩 벡터로 변환되어 게임 지식 데이터베이스 검색에 쓰이고, 검색된 정보는 질문과 함께 LLM에 전달되어 문맥 기반 응답으로 이어집니다. 답변이 검색된 근거에 묶여 있기 때문에 환각(hallucination)이 줄고 응답의 신뢰도가 높아집니다.

---

## Game Knowledge Database

The knowledge base covers the target game, Street Fighter 6: controls, tutorial content, gameplay tips, HUD explanations, character combos, and accessibility settings. It was built through a mix of web crawling and manual annotation, and it is what allows GAIA to give novice players accurate, game-specific guidance.

지식 데이터베이스는 대상 게임인 Street Fighter 6의 조작 방법, 튜토리얼, 플레이 팁, HUD 설명, 캐릭터 콤보, 접근성 설정 정보를 담고 있습니다. 웹 크롤링과 수작업 정리를 병행해 구축했으며, GAIA가 초보 플레이어에게 정확한 플레이 가이드를 줄 수 있는 것도 이 데이터베이스 덕분입니다.

---

## Interaction Features

### Text-based Questions

Typing a command like `/ask How do I change the control type in modern mode?` mid-game returns a step-by-step explanation built from the retrieved knowledge.

게임 도중 `/ask How do I change the control type in modern mode?`처럼 질문을 입력하면, GAIA가 관련 정보를 검색해 단계별로 설명해 줍니다.

---

### Voice Interaction

GAIA also supports speech-to-text and text-to-speech, so players can ask a question aloud and hear the answer read back, no need to stop playing to type.

음성 인식(STT)과 음성 합성(TTS)도 지원하므로 질문을 말로 하고 답변을 음성으로 들을 수 있습니다. 플레이를 멈추고 타이핑할 필요가 없어 게임 중에도 손을 자유롭게 쓸 수 있습니다.

---

### Multimedia Assistance

Beyond text answers, GAIA can search YouTube for tutorials and analyze images or screenshots, helping players reach the right resource quickly.

텍스트 답변 외에도 YouTube 튜토리얼 검색, 이미지 분석, 스크린샷 해석 기능을 갖추고 있어 필요한 자료를 빠르게 찾을 수 있습니다.

---

## Evaluation

We evaluated GAIA on 19 gameplay questions collected from novice players, comparing generated answers with expected answers using ROUGE-1 (token overlap) and RDASS (semantic similarity). It handled questions with a clear action or control instruction well, but produced occasional wrong answers when the question's context was ambiguous or the database lacked the relevant information.

초보 플레이어에게서 수집한 19개의 질문으로 평가를 진행했으며, 생성된 답변을 정답과 ROUGE-1(토큰 중복도), RDASS(의미 유사도) 두 지표로 비교했습니다. 명확한 조작법이나 행동 지침을 묻는 질문에서는 좋은 성능을 보였지만, 질문의 맥락이 모호하거나 데이터베이스에 관련 정보가 없을 때는 잘못된 답변이 나오기도 했습니다.

---

## Project Contribution

This work sits at the intersection of game accessibility support systems, conversational AI for interactive environments, and RAG-based knowledge-grounded LLM assistants, and it shows the potential of a conversational agent as a real-time gameplay support tool for accessibility and learning.

이 연구는 게임 접근성 지원 시스템, 인터랙티브 환경을 위한 대화형 AI, RAG 기반 지식 기반 LLM 어시스턴트 연구에 걸쳐 있으며, 대화형 에이전트가 게임 접근성과 학습 경험을 높이는 실시간 지원 도구로 쓰일 수 있는 가능성을 보여줍니다.

---

## 프로젝트 의의

- 게임 접근성 향상을 위한 대화형 AI 지원 시스템 제안
- RAG 기반 LLM을 활용한 게임 플레이 상황 맞춤형 정보 제공
- 상업용 게임 환경에서 AI 기반 접근성 지원 기술의 가능성 탐색

<!--
---

## Role & Tech Stack

This was a team research project; my role centered on the RAG-based chatbot system, combining GPT-4 Turbo with a LangChain retrieval pipeline and FAISS vector database within the Discord bot architecture.
본 연구는 팀 프로젝트로 진행되었으며, 저는 GPT-4 Turbo에 LangChain 검색 파이프라인과 FAISS 벡터 데이터베이스를 결합한 RAG 기반 챗봇 시스템을 Discord 봇 아키텍처로 구현하는 역할을 맡았습니다.

- **AI / LLM Pipeline:** GPT-4 Turbo, RAG (Retrieval-Augmented Generation), LangChain, FAISS vector database
- **Platform / Interaction:** Discord bot, STT (Speech-to-Text), TTS (Text-to-Speech)
- **Evaluation:** ROUGE-1, RDASS
-->
