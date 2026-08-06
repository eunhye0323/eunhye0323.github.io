---
title: "A Generative AI–Based Baekja Painting Style Generation and Multi-User Collaborative Chaekgado Exhibition System"
categories: [Generative AI, XR, Media Wall, Cultural Heritage]
thumbnail: /images/arproj_re.jpg
summary: '<span style="display:block; text-align:justify; word-break:keep-all;"><strong>Generative AI–based collaborative XR exhibition system for Baekja and Chaekgado.</strong><br>This project developed a multi-user XR framework that converts users’ spoken memories into personalized Baekja surface textures using a pipeline combining Speech-to-Text (STT), Large Language Models (LLM), and generative visual synthesis. The generated textures are applied to virtual porcelain objects and accumulated within a shared Chaekgado-inspired exhibition space, forming a collective “library of memories” where participants collaboratively create and explore cultural artifacts.</span><br><span style="display:block; text-align:justify; word-break:keep-all;"><strong>백자와 책가도를 위한 생성형 AI 기반 협업형 XR 전시 시스템</strong><br>본 프로젝트는 Speech-to-Text(STT), 대형언어모델(LLM), 생성형 시각 합성 파이프라인을 활용하여 사용자의 음성 기억을 개인화된 백자 표면 텍스처로 변환하는 다중 사용자 XR 프레임워크를 개발하였습니다. 생성된 텍스처는 가상 백자 오브젝트에 적용되고, 책가도에서 영감을 받은 가상 전시 공간에 축적되어 참여자들이 함께 기억을 공유하고 문화적 아카이브를 공동 창작하는 협업형 전시 환경을 형성합니다.</span>'
badge: "Research"
accent: "research"
date: 2025-12-01
periodEn: "Sep 2025 – Dec 2025 (4 months)"
periodKo: "2025.09 – 2025.12 (4개월)"
---

**Project Period:** September 2025 – December 2025 (4 months)<br>**참여 기간:** 2025.09 – 2025.12 (4개월)

---

## Project Overview

Baekja (Korean white porcelain) and Chaekgado (paintings of books and scholarly objects on shelves) meet generative AI in this collaborative XR exhibition system. Instead of viewing artifacts passively, visitors speak about a personal memory; the system turns that narrative into an AI-generated texture and paints it onto a virtual porcelain vessel. Each finished piece is shelved in a shared Chaekgado-inspired bookcase, so the multi-user exhibition gradually accumulates into a collective “library of memories.”

---

## 프로젝트 개요

한국 전통의 백자와 책가도를 생성형 AI와 몰입형 인터랙션으로 재해석한 협업형 XR 전시 시스템입니다. 관람자는 전시를 눈으로만 감상하는 대신 자신의 기억을 음성으로 들려주고, 시스템은 그 이야기를 AI 텍스처로 변환해 가상 백자 표면에 입힙니다. 완성된 백자는 책가도에서 영감을 받은 가상 책장에 하나씩 쌓이고, 다중 사용자 XR 공간은 점차 공동의 “기억의 도서관”이 되어 갑니다.

---

## Cultural Context

The pairing of the two artifacts is deliberate. Chaekgado is a traditional Korean painting genre that arranges books and scholarly objects across shelves or folding screens, a form of self-representation. Baekja historically served as both a practical vessel and a medium whose open, receptive white surface absorbed symbolic and emotional meaning. Connecting a shelf that represents its owner with a surface that receives meaning gave the project its frame for memory-driven cultural heritage interaction.

---

## 문화적 배경

두 소재를 함께 놓은 데에는 이유가 있습니다. 책가도는 책과 문방구, 일상 사물을 책장 형식으로 배열해 그린 한국 전통 회화 장르로, 그린 이를 드러내는 자기표현의 그림이었습니다. 백자는 실용적인 그릇이면서도 절제된 흰색과 수용적인 표면 위에 감정과 기억 같은 의미를 담아 온 매체입니다. 주인을 표현하는 책장과 의미를 받아들이는 표면, 이 둘의 연결이 기억 기반 문화유산 인터랙션의 출발점입니다.

---

## User Journey

A session unfolds in seven steps:

1. Enter a Chaekgado-inspired virtual space and browse the surrounding Baekja objects.
2. Pick one vessel and place it anywhere on the virtual bookshelf.
3. Describe a memorable life experience aloud.
4. The narration is transcribed via Speech-to-Text (STT).
5. The transcript is reformulated into prompts for generative visual synthesis.
6. A painterly texture is generated and applied to the chosen vessel.
7. Explore the shared exhibition, encountering other participants’ vessels alongside your own.

Step by step, an autobiographical memory becomes part of a collective cultural archive.

---

## 사용자 경험 흐름

관람은 다음 순서로 진행됩니다.

1. 책가도풍 가상 전시 공간에 입장해 주변의 백자 오브젝트를 둘러봅니다.
2. 백자 하나를 골라 가상 책장의 원하는 자리에 놓습니다.
3. 가장 인상 깊었던 삶의 기억을 음성으로 이야기합니다.
4. 음성은 Speech-to-Text(STT)로 텍스트로 변환됩니다.
5. 변환된 기억이 생성형 시각 합성을 위한 프롬프트로 재구성됩니다.
6. 생성된 회화적 텍스처가 선택한 백자 표면에 적용됩니다.
7. 자신의 백자뿐 아니라 다른 참가자들이 만든 백자도 함께 탐색합니다.

이 과정을 거치며 개인의 기억은 공동의 문화적 아카이브의 일부가 됩니다.

---

## System Architecture

The pipeline runs in three stages.

### 1. Voice Acquisition
An STT model transcribes the spoken memory while preserving emotionally salient words and descriptive cues.

### 2. Semantic Transformation
A Large Language Model (LLM) reads the transcript and extracts emotional and symbolic concepts, serenity, warmth, moon, stars, fireflies, then maps them into material descriptions suited to a porcelain surface.

### 3. Visual Synthesis
The resulting prompt goes to a generative model, which produces high-resolution tileable textures with PBR maps: albedo, bump, normal, and optionally roughness. A custom shader applies the output to the 3D Baekja model so the texture follows the curved porcelain form naturally.

---

## 시스템 구조

파이프라인은 세 단계로 이루어집니다.

### 1. 음성 입력 단계
사용자가 들려준 기억을 STT 모델이 텍스트로 변환하며, 이때 감정이 담긴 단어와 묘사 표현을 최대한 보존합니다.

### 2. 의미 변환 단계
대형언어모델(LLM)이 전사된 텍스트에서 평온함, 따뜻함, 달, 별, 반딧불 같은 감정적·상징적 개념을 추출하고, 이를 백자 표면에 어울리는 시각·재질 묘사로 바꿉니다.

### 3. 시각 합성 단계
완성된 프롬프트를 생성 모델에 전달해 고해상도 반복형 텍스처와 PBR 맵(albedo, bump, normal, 선택적으로 roughness)을 만듭니다. 결과물은 커스텀 셰이더를 거쳐 3D 백자 모델에 적용되며, 곡면의 도자기 표면을 따라 자연스럽게 입혀집니다.

---

## Style Variation and Artistic References

Users can also control how strongly a reference style is applied. We experimented with textures referencing Vincent van Gogh’s *The Starry Night*, Gustav Klimt’s *The Kiss*, Claude Monet’s *Woman with a Parasol*, Shin Saimdang’s *Chochungdo*, and Jeong Seon’s *Inwangjesaekdo*. Rather than reproducing these works, the system extracts stylistic attributes, color palette, pattern structure, brushstroke-like texture, ink diffusion, spatial atmosphere, and recombines them around the user’s memory. Example outputs in the paper show this style control working across both Western and Korean references.

---

## 스타일 변형 및 예술 참조

사용자는 참조 스타일을 얼마나 강하게 적용할지도 직접 조절할 수 있습니다. 빈센트 반 고흐의 *The Starry Night*, 구스타프 클림트의 *The Kiss*, 클로드 모네의 *Woman with a Parasol*, 신사임당의 *초충도*, 정선의 *인왕제색도*를 참조한 텍스처 생성을 실험했습니다. 원작을 그대로 복제하는 대신 색채 팔레트, 패턴 구조, 붓질 질감, 먹의 번짐, 공간적 분위기 같은 스타일 속성을 추출해 사용자의 기억과 결합합니다. 논문 3페이지의 예시 이미지에서 서양화와 한국화를 아우르는 스타일 변형 결과를 확인할 수 있습니다.

---

## Research Contribution

This work sits at the intersection of generative AI, XR-based cultural heritage experience, collaborative digital storytelling, and memory-driven personalized exhibition design. Its central proposal is heritage that is co-created rather than merely viewed: visitors reinterpret traditional artifacts through their own autobiographical memories, together, in a shared immersive space.

---

## 연구 의의

이 연구는 생성형 AI, XR 기반 문화유산 경험, 협업형 디지털 스토리텔링, 기억 기반 개인화 전시 설계가 만나는 지점에 있습니다. 핵심 제안은 문화유산을 감상의 대상에 머물게 하지 않고, 관람자 각자의 자전적 기억을 통해 함께 재해석하고 공동 창작하는 경험으로 확장하는 것입니다.

<!--
---

## Role & Tech Stack

For this project, I worked on the generative AI pipeline that converts visitors' spoken memories into personalized Baekja textures, spanning speech-to-text transcription, LLM-based semantic transformation, and generative visual synthesis integrated into the multi-user XR exhibition.
이 프로젝트에서는 방문자의 음성 기억을 개인화된 백자 텍스처로 변환하는 생성형 AI 파이프라인을 다루었으며, 음성 인식(STT), LLM 기반 의미 변환, 생성형 시각 합성을 다중 사용자 XR 전시 시스템에 통합하는 작업을 진행했습니다.

- **Voice & Language Pipeline:** Speech-to-Text (STT), LLM-based semantic/prompt transformation
- **Generative Visual Synthesis:** AI-generated PBR textures (albedo, bump, normal, roughness), custom shader-based surface mapping
- **XR Exhibition System:** Multi-user XR framework, shared Chaekgado-inspired virtual exhibition space
-->
