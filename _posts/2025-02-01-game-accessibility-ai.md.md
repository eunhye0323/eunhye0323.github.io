---
layout: post
title: "Conversational AI Service for Game Accessibility"
author: eunhye
categories: [HCI, Accessibility]
summary: "A conversational AI service that supports gamers with disabilities and novice players by providing accessibility-aware gameplay guidance using a RAG-based LLM chatbot."
thumbnail: assets/images/chi2025.jpg
date: 2025-02-01
---

## Project Overview

This project explores how **conversational AI can support accessible gameplay experiences** for players who face barriers when learning or playing video games.

본 프로젝트는 **게임 플레이 과정에서 발생하는 접근성 문제를 대화형 AI가 어떻게 지원할 수 있는지**를 탐구합니다.

The project introduces **GAIA (Game AI Assistant)**, a conversational AI chatbot designed to assist players by providing contextual gameplay guidance during play.

이를 위해 **GAIA (Game AI Assistant)** 라는 대화형 AI 챗봇을 개발하여 플레이어가 게임 플레이 중 필요한 정보를 제공받을 수 있도록 설계했습니다.

The system targets **novice players and players with accessibility needs**, helping them understand game mechanics, controls, and strategies through natural language interaction.

특히 본 프로젝트는 **게임 초보자와 접근성 지원이 필요한 플레이어**를 대상으로 자연어 인터랙션을 통해 게임 메커니즘, 조작 방식, 전략 등을 이해할 수 있도록 지원합니다.

The project investigates whether **LLM-based conversational systems can serve as personalized support tools for improving game accessibility.**

이를 통해 **LLM 기반 대화형 시스템이 게임 접근성을 향상시키는 개인화된 지원 도구로 활용될 수 있는지**를 탐구합니다.

This work was presented as a **CHI 2025 and HCIK 2025**.

<div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
  <img src="{{ site.baseurl }}/assets/images/chi2025.jpg"
       alt="TouchArt main image"
       style="width:48%; height:auto; border-radius:12px;">

  <img src="{{ site.baseurl }}/assets/images/hcik.jpg"
       alt="TouchArt poster"
       style="width:48%; height:auto; border-radius:12px;">
</div>

---

## Research Background

Many players encounter difficulties when learning new games, particularly when games require complex controls, system knowledge, or fast reactions.

많은 플레이어들은 새로운 게임을 학습하는 과정에서 어려움을 겪습니다. 특히 복잡한 조작 방식이나 시스템 이해가 필요한 게임에서는 이러한 문제가 더욱 두드러집니다.

For players with disabilities or limited experience, these difficulties can significantly reduce accessibility.

특히 장애가 있거나 게임 경험이 적은 사용자에게 이러한 어려움은 게임 접근성을 크게 낮출 수 있습니다.

Previous research has shown that conversational agents can support learning and guidance in digital environments.

기존 연구에서는 대화형 에이전트가 디지털 환경에서 학습과 안내를 지원할 수 있음을 보여주었습니다.

This project investigates whether **LLM-based conversational AI can provide real-time support during gameplay**.

본 프로젝트는 **LLM 기반 대화형 AI가 게임 플레이 중 실시간 지원을 제공할 수 있는지**를 탐구합니다.

---

## System Overview

GAIA is implemented as a **Discord-based chatbot** that allows players to interact with the AI assistant while playing games.

GAIA는 **Discord 기반 챗봇 시스템**으로 구현되어 플레이어가 게임을 플레이하면서 AI 어시스턴트와 상호작용할 수 있도록 설계되었습니다.

The system architecture integrates several components:

시스템 구조는 다음과 같은 구성 요소를 포함합니다.

- **Large Language Model (GPT-4 Turbo)**
- **Retrieval-Augmented Generation (RAG)**
- **Vector database (FAISS)**
- **LangChain-based retrieval pipeline**

- **대형 언어 모델 (GPT-4 Turbo)**
- **Retrieval-Augmented Generation (RAG)**
- **벡터 데이터베이스 (FAISS)**
- **LangChain 기반 검색 파이프라인**

The chatbot retrieves relevant game knowledge from a structured database and uses it to generate accurate responses.

챗봇은 구조화된 게임 지식 데이터베이스에서 관련 정보를 검색하여 정확한 응답을 생성합니다.

---

## System Architecture

The system follows a **retrieval-augmented generation pipeline**.

시스템은 **Retrieval-Augmented Generation 파이프라인** 구조를 따릅니다.

1. User question is received via Discord  
2. Question is converted into embeddings  
3. Relevant information is retrieved from the game knowledge database  
4. Retrieved information is provided to the LLM  
5. The LLM generates a contextual response  

1. Discord를 통해 사용자 질문 입력  
2. 질문을 임베딩 벡터로 변환  
3. 게임 지식 데이터베이스에서 관련 정보 검색  
4. 검색된 정보를 LLM에 제공  
5. LLM이 문맥 기반 응답 생성  

This architecture helps reduce hallucinations and improves the reliability of the generated answers.

이 구조는 LLM의 **환각(hallucination)을 줄이고 응답의 신뢰도를 높이는 데 도움을 줍니다.**

---

## Game Knowledge Database

To support gameplay assistance, the system builds a structured database containing information about the target game **Street Fighter 6**.

게임 플레이 지원을 위해 본 시스템은 대상 게임인 **Street Fighter 6**에 대한 구조화된 데이터베이스를 구축했습니다.

The database includes:

데이터베이스에는 다음과 같은 정보가 포함됩니다.

- game controls  
- tutorial information  
- gameplay tips  
- HUD explanations  
- character combos  
- accessibility settings  

- 게임 조작 방법  
- 튜토리얼 정보  
- 게임 플레이 팁  
- HUD 설명  
- 캐릭터 콤보  
- 접근성 설정  

Data was collected through **manual annotation and web crawling**.

데이터는 **웹 크롤링과 수작업 정리를 통해 수집되었습니다.**

This knowledge base enables GAIA to provide **accurate gameplay guidance tailored to novice players.**

이 지식 데이터베이스는 GAIA가 **초보 플레이어에게 맞춘 정확한 게임 플레이 가이드**를 제공할 수 있도록 합니다.

---

## Interaction Features

Players can interact with GAIA using several commands.

플레이어는 여러 방식으로 GAIA와 상호작용할 수 있습니다.

### Text-based Questions

Players can ask gameplay questions during play.

플레이어는 게임 플레이 중 텍스트로 질문할 수 있습니다.

Example: /ask How do I change the control type in modern mode?


GAIA retrieves relevant knowledge and generates a step-by-step explanation.

GAIA는 관련 정보를 검색하여 단계별 설명을 제공합니다.

---

### Voice Interaction

The system supports **speech-to-text and text-to-speech interaction**.

시스템은 **음성 인식(STT)과 음성 합성(TTS)** 기능을 지원합니다.

Players can:

플레이어는 다음과 같은 방식으로 사용할 수 있습니다.

- ask questions using voice  
- receive spoken responses  

- 음성으로 질문하기  
- 음성으로 답변 듣기  

This enables **hands-free interaction during gameplay**.

이를 통해 **게임 플레이 중 손을 사용하지 않고도 상호작용**할 수 있습니다.

---

### Multimedia Assistance

The system can also provide additional resources.

시스템은 추가적인 멀티미디어 지원 기능도 제공합니다.

- YouTube tutorial search  
- image analysis  
- screenshot interpretation  

- YouTube 튜토리얼 검색  
- 이미지 분석  
- 스크린샷 해석  

These features help players quickly find relevant gameplay resources.

이 기능들은 플레이어가 필요한 정보를 빠르게 찾을 수 있도록 돕습니다.

---

## Evaluation

To evaluate the system, generated answers were compared with expected answers using two metrics:

시스템 평가를 위해 생성된 답변과 정답을 다음 두 가지 지표로 비교했습니다.

- **ROUGE-1 (token overlap)**  
- **RDASS (semantic similarity)**  

Evaluation was conducted using **19 gameplay questions collected from novice players.**

평가는 **초보 플레이어로부터 수집한 19개의 질문**을 이용해 수행되었습니다.

Results showed that GAIA performed well for questions requiring **clear actions or control instructions**.

실험 결과 GAIA는 **명확한 조작 방법이나 행동 지침이 필요한 질문**에서 높은 성능을 보였습니다.

However, incorrect answers occasionally occurred when context was ambiguous or relevant information was missing from the database.

다만 질문의 맥락이 모호하거나 데이터베이스에 관련 정보가 부족한 경우 오류가 발생하기도 했습니다.

---

## Project Contribution

This project contributes to research in:

본 프로젝트는 다음과 같은 연구 분야에 기여합니다.

- **Game accessibility support systems**  
- **Conversational AI for interactive environments**  
- **RAG-based knowledge-grounded LLM assistants**

- 게임 접근성 지원 시스템  
- 인터랙티브 환경을 위한 대화형 AI  
- RAG 기반 지식 기반 LLM 어시스턴트  

The project demonstrates the potential of conversational AI as a **real-time gameplay support tool** for improving accessibility and learning experiences in games.

본 프로젝트는 대화형 AI가 **게임 접근성과 학습 경험을 향상시키는 실시간 게임 플레이 지원 도구로 활용될 수 있는 가능성**을 보여줍니다.

---

## 프로젝트 의의

본 프로젝트는 다음과 같은 측면에서 의의를 갖습니다.

- 게임 접근성 향상을 위한 **대화형 AI 지원 시스템 제안**  
- RAG 기반 LLM을 활용한 **게임 플레이 상황 맞춤형 정보 제공**  
- 상업용 게임 환경에서 **AI 기반 접근성 지원 기술의 가능성 탐색**


