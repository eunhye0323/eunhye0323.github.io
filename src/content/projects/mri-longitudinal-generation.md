---
title: "Longitudinal T1 Brain MRI Generation with Cortical Surface Priors"
categories: [Generative AI, Medical Imaging]
thumbnail: /images/iitp_synth.png
summary: |
  <span style="display:block; text-align:justify; word-break:keep-all;">
  <strong>Longitudinal T1 MRI Generation and Research Outcome Platform Development</strong><br>
  Developed and evaluated a conditional diffusion pipeline for generating future 3D T1 brain MRI from current MRI and cortical surface information. Also planned, developed, and operated SSTDV, a platform integrating research outputs from participating institutions, and analyzed medical synthetic data needs through a survey of 60 participants.
  </span>
  <br>
  <span style="display:block; text-align:justify; word-break:keep-all;">
  <strong>종단 T1 뇌 MRI 생성 및 연구성과 통합 플랫폼 개발</strong><br>
  현재 MRI와 피질 표면 구조 정보를 조건으로 미래 시점의 3차원 T1 뇌 MRI를 생성하는 Conditional Diffusion 파이프라인을 구현하고 평가했습니다. 기관별 연구성과를 통합한 SSTDV 플랫폼의 기획, 개발, 운영을 담당하고, 참여자 60명의 설문 응답을 분석해 의료 합성 데이터 활용 수요에 관한 기술문서를 작성했습니다.
  </span>
featured: true
badge: "Research"
accent: "research"
date: 2026-03-01
periodEn: "2025.06 – 2026.11"
periodKo: "2025.06 – 2026.11"
---

**Project Participation:** 2025.06 – 2026.11  
**전체 과제 참여 기간:** 2025.06 – 2026.11

**MRI Generation Research:** 2025.10 – 2026.04  
**MRI 합성 연구 기간:** 2025.10 – 2026.04

**Links:** [SSTDV Platform](https://sstdv-project.github.io/en/) | [KAIST Technical Reports](https://cs.kaist.ac.kr/research/techReport)

## Project Overview

This work was conducted as part of an IITP-funded project on purpose-specific synthetic data generation and evaluation. My contributions included longitudinal brain MRI generation, project coordination, institutional research outcome management, and the development and operation of the SSTDV platform.

The MRI study investigated conditional diffusion for generating future T1 brain MRI from current MRI and cortical surface information. Using longitudinal data from the Alzheimer’s Disease Neuroimaging Initiative (ADNI), I worked on representing anatomical structure as a generation condition and evaluating generated images against corresponding follow-up scans.

Alongside the modeling work, I built a platform for sharing research outputs and analyzed survey responses to identify practical requirements for medical synthetic data.

## 프로젝트 개요

IITP ‘목적 맞춤형 합성데이터 생성 및 평가 기술 개발’ 과제에서 종단 뇌 MRI 합성 연구, 과제 운영, 기관별 연구성과 관리와 SSTDV 플랫폼 개발 및 운영을 담당했습니다.

MRI 합성 연구에서는 현재 시점의 MRI와 피질 표면 구조 정보를 조건으로 미래 시점의 T1 뇌 MRI를 생성하는 Conditional Diffusion 방식을 연구했습니다. ADNI(Alzheimer’s Disease Neuroimaging Initiative) 종단 데이터를 활용해 해부학적 구조를 생성 조건으로 표현하고, 생성 결과가 실제 후속 시점 영상의 구조와 영상 특성을 얼마나 반영하는지 평가했습니다.

연구와 함께 기관별 성과를 공개하는 플랫폼을 구축하고, 의료 합성 데이터의 활용 수요와 사용자 지원 요구를 설문으로 조사해 후속 개발 방향을 정리했습니다.

## My Role

- Prepared longitudinal MRI data and cortical surface-derived conditions.
- Implemented and evaluated a conditional diffusion generation pipeline.
- Examined mask-based and surface graph-based structural conditioning.
- Evaluated cortical region agreement using Dice Score and image distribution differences using FID.
- Planned, developed, and operated SSTDV using Astro, TypeScript, and Tailwind CSS.
- Organized institutional research outputs into a shared structure and linked software descriptions to GitHub repositories.
- Planned synthetic data surveys, analyzed 60 responses, and prepared a technical report for use in the project’s final annual report.
- Conducted prior-art searches and compiled quantitative research outcomes for project reporting.

## 담당 역할

- 종단 MRI 데이터 전처리와 피질 표면 기반 조건 정보 구성
- Conditional Diffusion 생성 파이프라인 구현 및 평가
- 마스크 기반 및 표면 그래프 기반 구조 조건화 방식 검토
- Dice Score를 활용한 피질 영역 일치도와 FID를 활용한 영상 분포 차이 평가
- Astro, TypeScript, Tailwind CSS 기반 SSTDV 플랫폼 기획, 개발 및 운영
- 기관별 연구성과의 공통 구조 정리와 공개 SW의 GitHub 저장소 연결
- 합성 데이터 활용 설문 기획, 응답 60건 분석, 과제 최종 연차보고서에 활용할 기술문서 작성
- 선행 특허 조사 및 과제 정량적 연구성과 취합

## Dataset

The MRI study used longitudinal T1 brain MRI from ADNI, with two time points for each of 100 subjects: 200 scans forming 100 longitudinal pairs.

Structural information was derived from the pial and white matter surfaces. These surfaces provided anatomical information for constructing conditions that represent the cortical region and its shape.

## 데이터셋

ADNI의 종단 T1 뇌 MRI 데이터를 사용했습니다. 피험자 100명에 대해 두 시점의 영상으로 구성되며, 총 MRI 200개, 종단 시점 쌍 100개에 해당합니다.

구조 정보는 pial surface와 white matter surface에서 추출했습니다. 두 표면은 피질 영역과 형태를 표현하는 조건 정보를 구성하는 데 활용했습니다.

## Method

The pipeline conditions future MRI generation on the current MRI and cortical surface-derived information. Structural features are incorporated through a Volumetric Conditioning Module (VCM).

Two approaches to structural conditioning were examined.

### A. Mask-based Structural Conditioning

A volumetric mask represents the cortical region inside the pial surface and outside the white matter surface. The mask provides voxel-level anatomical information and is supplied as an additional conditioning channel to the VCM.

### B. Surface Graph-based Conditioning

A cortical surface can be represented as a graph to encode its shape and connectivity. This approach uses a graph encoder to extract a shape latent representation and incorporates it into the VCM through FiLM conditioning or feature concatenation.

The mask-based and graph-based approaches were examined as alternative ways to represent structural conditions.

## 연구 방법

현재 MRI와 피질 표면에서 얻은 구조 정보를 조건으로 미래 시점의 MRI를 생성하도록 파이프라인을 구성했습니다. 구조 정보는 Volumetric Conditioning Module(VCM)을 통해 생성 모델에 전달하며, 다음 두 가지 표현 방식을 검토했습니다.

### A. 마스크 기반 구조 조건

Pial surface 내부이면서 white matter surface 외부인 피질 영역을 3차원 마스크로 표현합니다. 이 마스크를 VCM의 추가 조건 채널로 입력해 voxel 단위의 해부학적 정보를 전달하는 방식입니다.

### B. 표면 그래프 기반 구조 조건

피질 표면을 그래프로 표현하고, 그래프 인코더로 표면의 형태와 연결 관계를 담은 shape latent representation을 추출하는 방식입니다. 이 표현을 FiLM conditioning 또는 feature concatenation으로 VCM에 결합하는 방안을 검토했습니다.

마스크 기반 방식과 그래프 기반 방식은 구조 정보를 표현하는 대안으로 검토했습니다.

## Training and Evaluation

During training, the current MRI and structural conditions are paired with the corresponding follow-up T1 MRI as the target. At inference, the model generates a future MRI conditioned on the available current-timepoint inputs.

Evaluation considers two aspects:

- **Dice Score:** Agreement between cortical regions in generated and reference follow-up images.
- **FID:** Differences between the feature distributions of generated and reference image sets.

These metrics assess structural agreement and distribution similarity. They do not, by themselves, establish clinical validity or the accuracy of individual disease progression predictions.

## 학습 및 평가

학습에서는 현재 시점의 MRI와 구조 정보를 입력 조건으로 사용하고, 실제 후속 시점의 T1 MRI를 생성 목표로 사용했습니다. 추론에서는 현재 시점에 확보한 입력을 조건으로 미래 MRI를 생성합니다.

생성 결과는 다음 두 관점에서 평가했습니다.

- **Dice Score:** 생성 영상과 실제 후속 시점 영상의 피질 영역 일치도
- **FID:** 생성 영상 집합과 실제 영상 집합의 특징 분포 차이

이를 통해 구조적 일치도와 영상 분포의 유사성을 함께 확인했습니다. 두 지표만으로 개별 환자의 질병 진행 예측이나 임상적 유효성이 검증되는 것은 아닙니다.

## SSTDV: Research Outcome Platform

In 2026, changes to the project budget and agreement led to adjustments in participating institutions, leaving a gap in the development and operation of the research outcome platform. Drawing on my project coordination experience, I took responsibility for planning, developing, and operating Synthetic Spatio-Temporal Data Vault (SSTDV).

Using Astro, TypeScript, and Tailwind CSS, I built an archive that brings together open-source software, datasets, and demonstration cases from universities, companies, and research institutes.

I organized institutional outputs into a shared structure and linked software descriptions to GitHub repositories so that visitors could access both research results and their implementations. The platform consolidated 14 open-source software outputs, 7 datasets, and 2 demonstration cases.

My responsibilities included defining the content structure, implementing the website, and updating research outcomes during operation.

[Visit SSTDV](https://sstdv-project.github.io/en/)

## SSTDV: 산학연 연구성과 통합 플랫폼

2026년 예산 및 협약 변경으로 참여기관이 조정되면서 연구성과 플랫폼의 개발과 운영에 공백이 발생했습니다. 이에 과제 운영 과정에서 파악한 기관별 성과와 관리 요구사항을 바탕으로 Synthetic Spatio-Temporal Data Vault(SSTDV)의 기획부터 개발, 운영까지 맡았습니다.

Astro, TypeScript, Tailwind CSS를 활용해 대학, 기업, 연구기관의 공개 SW, 데이터셋, 실증 사례를 통합한 아카이브를 구축했습니다.

기관별로 작성 형식이 다른 성과를 공통 구조로 정리하고, 공개 SW의 기능 설명과 GitHub 저장소를 연결해 연구 결과와 구현 코드를 함께 확인할 수 있도록 구성했습니다. 공개 SW 14건, 데이터셋 7건, 실증 사례 2건을 통합했습니다.

콘텐츠 구조 설계와 웹사이트 구현, 운영 중 연구성과 업데이트를 담당했습니다.

[SSTDV 플랫폼 바로가기](https://sstdv-project.github.io/en/)

## User Needs Analysis and Technical Report

To understand how synthetic data could be used in practice, I planned and conducted surveys at a KSIIM event and the KAIST biomedical imaging research forum.

The surveys collected 60 responses: 26 from the first event and 34 from the second. Respondents included researchers, students, professionals in relevant fields, and participants interested in synthetic data technology.

I analyzed demand for medical synthetic data, criteria used to judge its trustworthiness, and user support needs. The findings were compiled into a technical report, *Survey Report on Awareness and Application Needs for Synthetic Data Technology in Medical Imaging*, for use in the project’s final annual report.

The report proposed development considerations in three areas:

- Specifying generation conditions according to the intended use.
- Evaluating condition satisfaction, data quality, and downstream utility separately.
- Providing comparison materials, sample data, and executable examples to support users.

[KAIST School of Computing Technical Reports](https://cs.kaist.ac.kr/research/techReport)

## 활용 수요 조사 및 기술문서 작성

합성 데이터의 실제 활용에 필요한 요구사항을 파악하기 위해 대한의학영상정보학회와 KAIST 바이오의료영상 미래융합기술 연구회(막수포럼)에서 설문을 기획하고 진행했습니다.

1차 조사 26명, 2차 조사 34명으로 총 60명의 응답을 수집했습니다. 조사에는 의료영상과 AI 등 관련 분야의 연구자, 학생, 종사자와 합성 데이터 기술에 관심이 있는 참여자가 포함되었습니다.

응답을 분석해 의료 합성 데이터의 활용 수요, 신뢰성 판단 기준, 사용자 지원 요구를 정리했습니다. 분석 결과는 과제 최종 연차보고서에 활용할 「의료 영상 분야 합성 데이터 기술 인식 및 활용 수요 조사 보고서」로 작성했습니다.

보고서에서는 다음 내용을 후속 개발 검토 방향으로 제안했습니다.

- 활용 목적에 따른 생성 조건 구체화
- 생성 조건 충족 여부, 데이터 품질, 실제 활용성의 구분 평가
- 비교 자료, 샘플 데이터, 실행 예제를 통한 사용자 지원

[KAIST 전산학부 기술보고서 안내 및 목록](https://cs.kaist.ac.kr/research/techReport)

## Project Reporting and Prior-art Research

I also supported project reporting and prior-art research.

For three technical concepts under consideration for patent filing, I searched WIPS ON across Korea, Japan, China, the United States, and Europe. I iteratively refined search queries and organized 6, 5, and 6 relevant prior-art candidates, respectively.

In addition, I compiled institutional outputs, including patent filings, software registrations, technology summaries, and other quantitative indicators, for official project reports.

## 과제 성과 보고 및 선행 특허 조사

과제 성과 보고와 선행 특허 조사도 수행했습니다.

특허 출원을 검토 중인 세 가지 기술 아이디어에 대해 WIPS ON에서 한국, 일본, 중국, 미국, 유럽의 선행 특허를 조사했습니다. 검색식을 반복 조정해 관련 선행 특허 후보를 각각 6건, 5건, 6건으로 정리했습니다.

또한 기관별 특허 출원, 소프트웨어 등록, 기술요약 등 정량적 연구성과를 취합해 과제 공식 성과 보고서에 반영했습니다.

## Experience Gained

The MRI research provided experience in translating anatomical information into generation conditions and connecting data preprocessing, model training, and evaluation.

Developing SSTDV required understanding how different institutions describe and share their research outputs, then translating those requirements into a common content structure and a working platform.

The survey analysis helped connect technical development with user needs: what data users require, which conditions should be specified, and how generated outputs should be evaluated for their intended use.

## 연구 및 개발을 통해 얻은 경험

MRI 합성 연구에서는 의료영상과 해부학적 구조에 관한 지식을 학습하고, 이를 생성 모델의 입력 조건으로 구성했습니다. 데이터 전처리부터 모델 학습과 평가까지 수행하며 구조 정보가 생성 과정에 반영되는 방식을 익혔습니다.

SSTDV 개발에서는 기관마다 다른 연구성과의 형식과 공유 요구를 파악하고, 이를 공통 콘텐츠 구조와 실제 동작하는 플랫폼으로 구현했습니다.

설문 분석에서는 사용자가 어떤 데이터를 필요로 하는지, 생성 조건에 무엇을 명시해야 하는지, 생성 결과를 활용 목적에 맞게 어떻게 평가해야 하는지를 구체화했습니다.