---
title: "BCI Neurofeedback Game based on Attention and Relaxation Training"
categories: [BCI, Game, Neurofeedback]
thumbnail: /images/dead_or_calm.png
summary: "A Unity-based BCI neurofeedback game that enables attention and relaxation training through gamified gameplay mechanics."
date: 2024-08-01

periodEn: "Jan 2024 – Aug 2024 (8 months)"
periodKo: "2024.01 – 2024.08 (8개월)"
---

**Project Period:** January 2024 – August 2024 (8 months)<br>**참여 기간:** 2024.01 – 2024.08 (8개월)

---

### Project Overview

A Unity game that turns attention and relaxation training into play. I started by analyzing eight prior BCI neurofeedback studies, then built the neurofeedback system around the kind of engaging mechanics found in commercial games. During play, EEG signals measure the player's attention and relaxation levels and feed directly into the gameplay, the training happens while playing, not as a separate exercise.

집중·이완 훈련을 게임 플레이로 풀어낸 Unity 기반 BCI 뉴로피드백 게임입니다. 8건의 BCI 뉴로피드백 선행 연구를 분석한 결과를 바탕으로, 상용 게임이 가진 재미와 몰입 요소를 뉴로피드백 시스템에 반영했습니다. 플레이 중 EEG 신호로 측정한 집중도와 이완 상태가 게임 플레이에 그대로 반영되기 때문에, 별도의 훈련 과정 없이 게임을 즐기는 것만으로 자연스럽게 훈련이 이루어집니다.

---


### Achievements

- Paper published at the **2023 Spring Conference of the Korean Society for Game Science**
- Received **Best Paper Award** at the conference
- Awarded **Encouragement Prize (3rd Place)** in the *2024 Metaverse Developer Competition* (Woongjin ThinkBig Award)

- **한국게임학회 2023 춘계 학술발표대회 논문 게재**
- **우수논문상 수상**
- **2024 메타버스 개발자 경진대회 자유과제 부문 장려상(3위)**  
  *(㈜웅진씽크빅 대표상)*


<div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
  <img src="/images/bci2.png"
       alt="BCI image"
       style="width:100%; height:100%; border-radius:12px;">
</div>
---

### Demo Video

<p>
<div style="position:relative;padding-bottom:56.25%;height:0;">
<iframe
src="https://www.youtube.com/embed/39NU5XIlnTE"
style="position:absolute;top:0;left:0;width:100%;height:100%;"
frameborder="0"
allowfullscreen>
</iframe>
</div>
</p>

<p>
<div style="position:relative;padding-bottom:56.25%;height:0;">
<iframe
src="https://www.youtube.com/embed/k_9kCO-4ocI"
style="position:absolute;top:0;left:0;width:100%;height:100%;"
frameborder="0"
allowfullscreen>
</iframe>
</div>
</p>

<p>
<div style="position:relative;padding-bottom:56.25%;height:0;">
<iframe
src="https://www.youtube.com/embed/3y9BBAxeer8"
style="position:absolute;top:0;left:0;width:100%;height:100%;"
frameborder="0"
allowfullscreen>
</iframe>
</div>
</p>

---

### System Design

The game is built in Unity (C#). Attention and relaxation levels are read from EEG in real time and mapped to game mechanics and player interactions, with gamified feedback that nudges players toward maintaining or raising the target cognitive state. Doing well at the game and doing well at the training end up being the same thing.

게임은 Unity(C#)로 구현했습니다. EEG로 측정한 집중도와 이완 상태를 실시간으로 게임 메커니즘과 플레이어 인터랙션에 연결하고, 목표 인지 상태를 유지하거나 끌어올리도록 유도하는 게임화 피드백을 설계했습니다. 결과적으로 게임을 잘 플레이하는 것이 곧 집중과 이완을 조절하는 훈련이 되는 구조입니다.

---

### Key Features

- EEG-based brain-computer interface integration
- Neurofeedback-driven gameplay mechanics
- Gamified training for attention and relaxation regulation
- Real-time visualization of the player's cognitive state during gameplay

- EEG 기반 BCI(Brain-Computer Interface) 신호 활용
- 뉴로피드백 기반 게임 플레이 메커니즘
- 집중·이완 조절을 위한 게임화 훈련 시스템
- 플레이 중 실시간 인지 상태 피드백


---

### Research Contribution

This project brings neurofeedback training and game design into a single loop. The EEG feedback that drives the training is delivered entirely through gameplay, offering an interactive form of cognitive training that doesn't force a choice between effectiveness and fun.

뉴로피드백 훈련과 게임 디자인을 하나로 합친 인터랙티브 인지 훈련 방식을 제안했습니다. 훈련을 이끄는 EEG 피드백 루프가 게임 플레이 자체에 녹아 있어, 훈련 효과와 게임의 재미 중 어느 한쪽을 포기하지 않아도 됩니다.

<!--
---

### Role & Tech Stack

My work on this project included analyzing prior BCI neurofeedback research and implementing the Unity-based neurofeedback game, including the EEG-driven gameplay mechanics described above.
이 프로젝트에서 BCI 뉴로피드백 선행 연구를 분석하고, 위에서 설명한 EEG 기반 게임 플레이 메커니즘을 포함한 Unity 뉴로피드백 게임을 구현하는 작업을 맡았습니다.

- **Game Development:** Unity, C#
- **BCI / Neurofeedback:** EEG-based attention and relaxation measurement, real-time neurofeedback integration into gameplay
-->
