---
layout: post
title: "Longitudinal T1 Brain MRI Generation from Structural Surface Priors"
author: eunhye
categories: [Generative AI, Medical Image]
thumbnail: assets/images/iitp_synth.png
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

Can we tell what a brain will look like at t₂ from its structure at t₁? This ongoing work takes on that question with structural priors derived from cortical surfaces, using longitudinal scans from the ADNI (Alzheimer’s Disease Neuroimaging Initiative) dataset. The t₂ T1 MRI is generated from structural information extracted at t₁, so inference never needs a full image input.

---

## 프로젝트 개요

t₁ 시점의 구조만 보고 t₂ 시점의 뇌를 그려낼 수 있을까 하는 질문에서 출발했습니다. ADNI(Alzheimer’s Disease Neuroimaging Initiative) 종단 데이터를 사용해, t₁ 시점 피질 표면에서 추출한 구조 정보만으로 t₂ 시점의 T1 MRI를 생성합니다. 추론 단계에서는 전체 MRI 이미지 없이 구조 프라이어만 있으면 됩니다.

---

## Dataset

Experiments use longitudinal brain MRI from the ADNI dataset: 100 subjects with 2 time points each, giving 200 paired scans. Each sample carries cortical surface information from the pial and white matter surfaces, and the structural priors are built from those two surfaces.

---

## 데이터셋

ADNI 종단 뇌 MRI 데이터를 사용합니다. 피험자 100명의 2개 시점, 총 200쌍의 MRI입니다. 각 샘플에는 pial surface와 white matter surface에서 추출한 피질 표면 정보가 들어 있고, 이 두 표면으로부터 구조적 프라이어(structural prior)를 만듭니다.

---

## Method

Two ways of feeding cortical surface structure into the generator are being explored.

### (A) Mask-based Structural Conditioning

A mask covering the region inside the pial surface and outside the white matter surface serves as a pixel-level structural prior. It enters the Volumetric Conditioning Module (VCM) as an additional conditioning channel, so the original model needs only minimal modification.

---

### (B) Surface Graph-based Conditioning

Cortical surfaces are represented as graphs, and an encoder extracts a shape latent representation from the surface graph. FiLM conditioning or feature concatenation injects that latent into the VCM, carrying structural shape information into image generation.

---

## 연구 방법

피질 표면 구조를 생성 모델에 전달하는 방식으로 두 가지를 시도하고 있습니다.

### (A) 마스크 기반 구조 조건

pial 내부이면서 white surface 외부인 영역을 마스크로 정의해 pixel-level 구조 프라이어로 씁니다. 이 마스크는 Volumetric Conditioning Module(VCM)에 추가 채널로 들어가므로 기존 모델 구조를 크게 수정할 필요가 없습니다.

---

### (B) 표면 그래프 기반 구조 조건

피질 표면을 그래프 구조로 표현하고, 그래프 인코더로 shape latent representation을 추출합니다. 이 latent를 FiLM conditioning이나 feature concatenation으로 VCM에 주입해 구조적 형태 정보를 MRI 생성 과정에 반영합니다.

---

## Training and Inference

Training relies on the ground truth T1 MRI images. At inference the model sees only the mask-based structural priors and the surface graph embeddings, and predicts the future brain MRI from those alone.

---

## 학습 및 추론 과정

학습에는 실제 T1 MRI 이미지를 사용하지만, 추론에서는 마스크 기반 구조 프라이어와 표면 그래프 임베딩만으로 미래 시점의 뇌 MRI를 예측합니다.

---

## Research Contribution

The work opens a direction for structure-conditioned medical image generation:

- longitudinal MRI prediction using structural priors
- surface-based conditioning for diffusion models
- graph-based shape embedding for medical imaging

Together they suggest a framework for modeling disease progression in longitudinal neuroimaging studies.
