---
title: "Longitudinal T1 Brain MRI Generation with Cortical Surface Priors"
titleKo: "의료영상 합성 연구 및 연구성과 플랫폼 개발"
categories: [Generative AI, Medical Imaging]
thumbnail: /images/iitp_synth.png
summary: |
  <span style="display:block; text-align:justify; word-break:keep-all;">
  This IITP-funded project uses conditional diffusion to generate future 3D brain MRI scans from current scans and cortical surface meshes. Work included data preprocessing, model conditioning, training, and evaluation. Responsibilities also included designing, building, and maintaining SSTDV, a website for sharing software, datasets, and demonstration cases from participating institutions, using Astro, TypeScript, and Tailwind CSS. Findings from 60 survey responses on medical synthetic data were compiled into a technical report covering user needs and recommendations for further development.
  </span>
  <br>
  <span style="display:block; text-align:justify; word-break:keep-all;">
  IITP '목적 맞춤형 합성데이터 생성 및 평가기술 개발' 연구과제에서 현재 뇌 MRI와 Cortical Surface Mesh를 조건으로 미래 시점의 3D MRI를 생성하는 Conditional Diffusion 연구를 수행했습니다. 데이터 전처리부터 Conditioning 구성, 모델 학습과 평가까지 담당했습니다. 또한 기관별 공개 SW, 데이터셋, 실증 사례를 모은 SSTDV 플랫폼을 Astro, TypeScript, Tailwind CSS로 기획, 개발, 운영했습니다. 의료 합성 데이터 활용에 관한 설문 응답 60건을 분석하고, 활용 수요와 후속 개발 방향을 정리한 Technical Report를 작성했습니다.
  </span>
featured: true
badge: "Research"
accent: "research"
date: 2026-03-01
periodEn: "2025.06 – 2026.11"
periodKo: "2025.06 – 2026.11"
---

[SSTDV Platform](https://sstdv-project.github.io/en/) | [KAIST Technical Reports](https://cs.kaist.ac.kr/research/techReport)

## Project Overview

This work was part of an IITP-funded project on purpose-specific synthetic data generation and evaluation. Responsibilities covered longitudinal brain MRI generation, project coordination, and research outcome management. The work also included building SSTDV, a website for sharing outputs from participating institutions, and preparing a technical report based on a survey of medical synthetic data needs.

## 프로젝트 개요

IITP ‘목적 맞춤형 합성데이터 생성 및 평가 기술 개발’ 과제에서 종단 뇌 MRI 합성 연구와 과제 운영, 기관별 연구성과 관리를 담당했습니다. 현재 MRI와 피질 표면 구조를 조건으로 미래 MRI를 생성하는 모델을 구현하고 평가했으며, 연구성과를 공개하는 SSTDV 플랫폼의 기획, 개발, 운영도 맡았습니다. 의료 합성 데이터의 활용 수요를 조사하고, 분석 결과를 후속 개발 방향과 함께 기술문서로 작성했습니다.

## 1) Longitudinal Brain MRI Generation

Repeated MRI scans of the same individual provide information about anatomical changes over time, but longitudinal data are difficult to collect. This study used conditional diffusion to generate a future T1 brain MRI from a current scan and cortical surface information. The dataset consisted of 100 ADNI participants with two time points each, providing 200 scans and 100 longitudinal pairs. Work covered MRI preprocessing, preparation of structural conditions, model training, and evaluation against the corresponding follow-up scans.

### (1) Structural Conditioning

Cortical structure information derived from the pial and white matter surfaces was passed to the generation model through a Volumetric Conditioning Module (VCM). A mask-based approach was used to represent this structural information. It represents the cortical region inside the pial surface and outside the white matter surface as a 3D mask, which is supplied to the VCM as an additional conditioning channel.

### (2) Training and Evaluation

The current MRI and structural information served as conditions, with the follow-up T1 MRI used as the training target. At inference, the model generated a future scan from the current-timepoint inputs.Generated scans were evaluated for both anatomical agreement and image distribution similarity. Dice Score measured cortical region overlap with the reference follow-up scans, while FID measured differences between the feature distributions of generated and reference images. These evaluations assessed generation quality rather than clinical prediction accuracy.

## 1) 종단 뇌 MRI 합성 연구

동일한 사람의 MRI를 여러 시점에 걸쳐 확보하면 시간에 따른 뇌 구조 변화를 분석할 수 있지만, 장기간 추적한 데이터는 충분히 확보하기 어렵습니다. 본 연구에서는 이러한 문제를 해결하기 위해 현재 시점의 뇌 MRI와 피질 표면 구조 정보를 조건으로 미래 시점의 T1 MRI를 생성하는 Conditional Diffusion 방식을 연구했습니다. ADNI 피험자 100명의 두 시점 영상으로 구성된 MRI 200개, 종단 시점 쌍 100개를 사용했습니다. MRI 전처리와 구조 정보 구성, 모델 학습을 수행하고, 생성 영상과 실제 후속 시점 영상을 비교해 평가했습니다.

### (1) 구조 정보의 조건화

Pial surface와 white matter surface에서 얻은 피질 구조 정보를 Volumetric Conditioning Module(VCM)을 통해 생성 모델에 전달했습니다. 구조 정보를 표현하는 방식으로 마스크 기반 방식을 사용했습니다. 마스크 기반 방식은 pial surface 내부이면서 white matter surface 외부인 피질 영역을 3D 마스크로 표현하고, 이를 VCM의 추가 조건 채널로 입력합니다.

### (2) 학습 및 평가

현재 MRI와 구조 정보를 입력 조건으로 구성하고, 실제 후속 시점의 T1 MRI를 학습 타깃으로 사용했습니다. 추론에서는 현재 시점의 입력을 조건으로 미래 MRI를 생성했습니다. 평가에서는 해부학적 구조의 일치도와 영상 분포의 유사성을 구분했습니다. Dice Score로 생성 영상과 실제 후속 시점 영상의 피질 영역 일치도를 측정하고, FID로 두 영상 집합의 특징 분포 차이를 비교했습니다. 평가 범위는 생성 영상의 품질이며, 임상적 예측 성능을 검증한 것은 아닙니다.

## 2) SSTDV Platform Development

In 2026, changes to the project budget and agreement led to changes in participating institutions, leaving a gap in platform development and maintenance. Based on experience managing the project’s research outputs, responsibilities were extended to planning, building, and operating Synthetic Spatio-Temporal Data Vault (SSTDV). Built with Astro, TypeScript, and Tailwind CSS, SSTDV brings together software, datasets, and demonstration cases from universities, companies, and research institutes. Outputs from different institutions were organized into a common content structure, with software descriptions linked to their GitHub repositories. The work covered content organization, website development, and updates during operation. The archive included the following outputs.

[SSTDV Platform](https://sstdv-project.github.io/en/)

## 2) SSTDV 연구성과 플랫폼 개발

2026년 예산 및 협약 변경으로 참여기관이 조정되면서 성과 플랫폼의 개발과 운영에 공백이 발생했습니다. 과제 운영 과정에서 기관별 연구성과를 관리해 온 경험을 바탕으로 Synthetic Spatio-Temporal Data Vault(SSTDV)의 기획부터 개발, 운영까지 맡았습니다. Astro, TypeScript, Tailwind CSS로 대학, 기업, 연구기관의 공개 SW와 데이터셋, 실증 사례를 모은 아카이브를 구축했습니다. 기관마다 작성 형식이 다른 성과를 공통 구조로 정리하고, 공개 SW의 기능 설명과 GitHub 저장소를 연결해 연구 결과와 코드를 함께 확인할 수 있도록 구성했습니다. 


[SSTDV Platform](https://sstdv-project.github.io/en/)

## 3) User Survey and Technical Report

Surveys were planned and conducted at a KSIIM event and the KAIST biomedical imaging research forum to identify demand for medical synthetic data and the support users need. The first survey collected 26 responses and the second collected 34, for a total of 60. Participants included researchers, students, professionals in related fields, and others interested in synthetic data. The analysis examined intended uses, criteria for judging trustworthiness, and user support needs. Findings were compiled into a technical report, *Survey Report on Awareness and Application Needs for Synthetic Data Technology in Medical Imaging*, for use in the project’s final annual report. The report proposed specifying generation conditions according to the intended use and evaluating condition satisfaction, data quality, and downstream utility separately. It also recommended providing comparison materials, sample data, and executable examples to help users assess and use the technology.

[KAIST School of Computing Technical Report](https://cs.kaist.ac.kr/research/techReport)

## 3) 활용 수요 조사 및 기술문서 작성

의료 합성 데이터의 활용 수요와 사용자 지원 요구를 파악하기 위해 대한의학영상정보학회와 KAIST 바이오의료영상 미래융합기술 연구회(막수포럼)에서 설문을 기획하고 진행했습니다. 1차 조사에서 26명, 2차 조사에서 34명으로 총 60명의 응답을 수집했습니다. 관련 분야의 연구자, 학생, 종사자와 합성 데이터 기술에 관심이 있는 참여자가 조사에 응답했습니다.
합성 데이터의 활용 목적, 신뢰성을 판단하는 기준, 사용에 필요한 지원을 분석했습니다. 결과는 과제 최종 연차보고서에 활용할 '의료 영상 분야 합성 데이터 기술 인식 및 활용 수요 조사 보고서'로 작성했습니다. 보고서에는 활용 목적에 따라 생성 조건을 명세하고, 생성 조건 충족 여부와 데이터 품질, 실제 활용성을 구분해 평가하는 방향을 제안했습니다. 사용자가 기술을 검토하고 적용할 수 있도록 비교 자료, 샘플 데이터, 실행 예제를 제공하는 방안도 정리했습니다.

[KAIST 전산학부 Technical Report](https://cs.kaist.ac.kr/research/techReport)

## 4) Project Reporting and Patent Searches

Project coordination also included compiling patent filings, software registrations, technology summaries, and other institutional outputs for official reports. For three technical concepts under consideration for patent filing, prior-art searches were conducted through WIPS ON across Korea, Japan, China, the United States, and Europe. Search queries were refined to identify relevant patents, resulting in 6, 5, and 6 candidates for the respective concepts.

## 4) 과제 성과 보고 및 선행 특허 조사

기관별 특허 출원, 소프트웨어 등록, 기술요약 등 정량적 연구성과를 취합해 과제 공식 성과 보고서에 반영했습니다. 출원을 검토 중인 세 가지 기술 아이디어에 대해 WIPS ON을 활용해 한국, 일본, 중국, 미국, 유럽의 선행 특허를 조사했습니다. 검색식을 조정하며 관련 특허를 검토하고, 기술별 선행 특허 후보를 각각 6건, 5건, 6건으로 정리했습니다.