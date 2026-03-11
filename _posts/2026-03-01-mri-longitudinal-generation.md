---
layout: post
title: "[Ongoing] Longitudinal T1 Brain MRI Generation from Structural Surface Priors"
author: eunhye
categories: [Generative AI, Medical Image]
thumbnail: assets/images/mri_gen.png
featured: true
summary: '<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>IITP (Institute of Information & Communications Technology Planning & Evaluation) - Longitudinal T1 MRI generation from cortical surface priors</strong><br>
This project develops a diffusion-based model that predicts future T1 brain MRI images using structural priors derived from cortical surfaces. Using longitudinal data from the ADNI dataset, the model generates future MRI scans by conditioning structural information such as pial and white matter surfaces through a Volumetric Conditioning Module (VCM). The approach enables future brain MRI prediction using only current brain image and structural priors.
</span><br>
<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>정보통신기획평가원(IITP) - 피질 표면 구조 정보를 활용한 종단적 T1 뇌 MRI 생성 연구</strong><br>
본 프로젝트는 ADNI 종단 데이터를 활용하여 pial 및 white matter 표면에서 얻은 구조 정보를 기반으로 미래 시점의 T1 MRI를 생성하는 연구입니다. Volumetric Conditioning Module(VCM)을 통해 구조 정보를 조건으로 결합하여 종단적 뇌 영상 예측을 수행합니다. 이를 통해 현재 뇌 영상과 구조 정보만으로 미래 뇌 영상을 생성할 수 있는 새로운 종단 의료 영상 생성 프레임워크를 제안합니다.
</span>'
badge: "Research"
accent: "research"
date: 2026-03-01
---

## Project Overview

This research investigates a **longitudinal prediction model for T1 brain MRI generation** using structural priors derived from cortical surfaces.

Using longitudinal data from the **ADNI (Alzheimer’s Disease Neuroimaging Initiative)** dataset, the model predicts future T1 MRI images at time **t₂** based solely on structural information extracted at time **t₁**.

The goal is to enable future MRI prediction using only **structural priors**, without relying on full image inputs during inference.

---

## 프로젝트 개요

본 연구는 **피질 표면 구조 정보를 기반으로 미래 시점의 T1 MRI를 생성하는 종단 예측 모델**을 탐구합니다.

**ADNI(Alzheimer’s Disease Neuroimaging Initiative)** 데이터셋을 활용하여  
t₁ 시점에서 얻은 구조 정보를 기반으로 미래 시점 **t₂의 T1 MRI 이미지를 생성**하는 모델을 개발하고 있습니다.

목표는 추론 단계에서 **전체 MRI 이미지 없이 구조 정보만으로 미래 MRI를 생성**할 수 있도록 하는 것입니다.

---

## Dataset

The experiments use longitudinal brain MRI data from the **ADNI dataset**.

- **100 subjects**
- **2 time points per subject**
- **200 paired scans**

Each sample includes cortical surface information extracted from:

- **pial surface**
- **white matter surface**

These surfaces are used to construct structural priors for the generation model.

---

## 데이터셋

본 연구에서는 **ADNI 종단 뇌 MRI 데이터**를 사용합니다.

- **100명 피험자**
- **2 시점 데이터**
- **총 200쌍 MRI**

각 데이터는 다음 표면 구조에서 얻은 정보를 포함합니다.

- **pial surface**
- **white matter surface**

이 표면 구조는 MRI 생성 모델의 **구조적 프라이어(structural prior)** 로 활용됩니다.

---

## Method

The model predicts future T1 MRI images using only structural information extracted from cortical surfaces.

Two main approaches are explored.

### (A) Mask-based Structural Conditioning

A mask is defined using the region:

- **inside the pial surface**
- **outside the white matter surface**

This mask is used as a **pixel-level structural prior**.

The mask is added as an **additional conditioning channel** to the **Volumetric Conditioning Module (VCM)** with minimal modification to the original model.

---

### (B) Surface Graph-based Conditioning

Cortical surfaces are represented as **graph structures**.

The encoder extracts a **shape latent representation** from the surface graph.

This latent vector is injected into the VCM using techniques such as:

- **FiLM conditioning**
- **feature concatenation**

This allows the model to incorporate structural shape information into the image generation process.

---

## 연구 방법

본 연구는 피질 표면에서 얻은 구조 정보를 이용해 미래 MRI를 생성하는 모델을 개발합니다.

두 가지 접근 방식을 사용합니다.

### (A) 마스크 기반 구조 조건

다음 영역을 기반으로 마스크를 정의합니다.

- **pial 내부 영역**
- **white surface 외부 영역**

이 마스크를 **pixel-level 구조 프라이어**로 사용합니다.

마스크는 **Volumetric Conditioning Module (VCM)** 에 **추가 채널**로 입력되어 기존 모델 구조를 크게 수정하지 않고 학습할 수 있도록 설계되었습니다.

---

### (B) 표면 그래프 기반 구조 조건

피질 표면을 **그래프 구조**로 표현합니다.

그래프 인코더는 표면 구조에서 **shape latent representation**을 추출합니다.

이 latent는 다음 방식으로 VCM에 주입됩니다.

- **FiLM conditioning**
- **feature concatenation**

이를 통해 구조적 형태 정보가 MRI 생성 과정에 반영됩니다.

---

## Training and Inference

During training, the model uses the **ground truth T1 MRI images**.

However, during inference the model generates future MRI images using only:

- mask-based structural priors
- surface graph embeddings

This allows the model to **predict future brain MRI scans from structural information alone**.

---

## 학습 및 추론 과정

학습 단계에서는 실제 **T1 MRI 이미지**를 사용합니다.

하지만 추론 단계에서는 다음 정보만으로 MRI를 생성합니다.

- 마스크 기반 구조 프라이어
- 표면 그래프 임베딩

이를 통해 **구조 정보만으로 미래 뇌 MRI를 생성하는 종단 예측 모델**을 구현합니다.

---

## Research Contribution

This work explores a new direction for **structure-conditioned medical image generation**.

Key contributions include:

- longitudinal MRI prediction using structural priors
- surface-based conditioning for diffusion models
- graph-based shape embedding for medical imaging

The approach provides a potential framework for modeling **disease progression in longitudinal neuroimaging studies**.