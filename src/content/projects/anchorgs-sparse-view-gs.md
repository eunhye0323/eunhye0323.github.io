---
title: "[M.S. Thesis, Ongoing] AnchorGS: Real-View-Guided Depth Refinement for Sparse-View Gaussian Splatting with a Generative Prior"
categories: [Generative AI, Gaussian Splatting, 3D Reconstruction]
thumbnail: /images/anchorgs_teaser.jpg
summary: |
  <span style="display:block; text-align:justify; word-break:keep-all;">
  AnchorGS is an ongoing master’s thesis project on improving surface reconstruction from sparse input views using a generative prior. Based on G4Splat, it uses different depth supervision strategies for real and generated views. Depths for generated views are refined using planes fitted to 3D points from real observations. Experiments on ScanNet++ and Replica with five input images showed better reconstruction quality with rendering quality comparable to G4Splat.
  </span>
  <br>
  <span style="display:block; text-align:justify; word-break:keep-all;">
  석사 학위 연구로 Generative Prior를 활용한 Sparse-view 3D Reconstruction에서 깊이 정보의 오류를 줄이고 Surface Reconstruction 품질을 높이는 연구를 수행하고 있습니다. G4Splat을 기반으로 실제 입력 뷰와 생성 뷰의 Depth Supervision을 구분하고, 실제 관측의 3D Point로 추정한 평면을 이용해 생성 뷰의 깊이를 보정했습니다. ScanNet++와 Replica에서 입력 이미지 5장으로 평가한 결과, G4Splat과 유사한 Rendering 품질을 유지하면서 Reconstruction 품질을 개선했습니다.
  </span>
featured: true
badge: "Research"
accent: "research"
date: 2026-09-01
periodEn: "2026.09 – 2026.11 (3 months)"
periodKo: "2026.09 – 2026.11 (3개월)"
externalUrl: "https://eunhye0323.github.io/AnchorGS/"
---

![AnchorGS teaser](/images/anchorgs_teaser.jpg)

## Overview

Recent sparse-view Gaussian Splatting methods supplement limited input observations with pseudo-views synthesized by generative models, but inaccurate geometric supervision can degrade surface reconstruction. G4Splat refines depth from real and generated views with shared planar constraints; the resulting surfaces may look flat and plausible while their positions or orientations differ from the ground truth, and these errors persist across reconstruction rounds.

**AnchorGS** maintains real-view chart depths as a geometric reference across reconstruction rounds:

1. **Persistent real-view depth supervision:** a constant-weight, scale-invariant log-depth loss on the chart depth before plane refinement.
2. **Real-anchored depth targets for generated views:** planes are fitted using only 3D points from real-view chart depths, and ray–plane intersections give the depth targets.
3. **Geometry-gated use:** targets are used for depth supervision when real-view points lie close to the fitted plane, and for Gaussian initialization when they fit even more closely.

## 개요

최근 Sparse-View Gaussian Splatting 방법들은 부족한 입력 관측을 생성 모델로 합성한 pseudo-view로 보완하지만, 부정확한 기하 슈퍼비전은 표면 재구성 품질을 떨어뜨릴 수 있습니다. G4Splat은 실제 뷰와 생성된 뷰의 깊이를 공유 평면 제약으로 반복 보정하는데, 그 결과 표면이 평평하고 그럴듯해 보여도 위치나 방향이 실제와 다를 수 있으며, 이 오차가 이후 재구성 라운드까지 이어집니다.

**AnchorGS**는 실제 뷰의 chart depth를 재구성 라운드 전반에 걸친 기하학적 기준으로 유지합니다.

1. **실제 뷰 깊이 슈퍼비전 유지:** 평면 보정 이전의 chart depth에 고정 가중치의 scale-invariant log-depth loss를 적용합니다.
2. **실제 뷰 기반 생성 뷰 깊이 타깃:** 실제 뷰 chart depth에서 얻은 3D 점만으로 평면을 피팅하고, 광선과 평면의 교차점으로 깊이 타깃을 구합니다.
3. **기하 적합도에 따른 선택적 사용:** 실제 뷰 점이 평면에 충분히 가까우면 깊이 슈퍼비전에, 더 가깝게 맞으면 Gaussian 초기 위치에도 사용합니다.

## Results / 결과

5 input views, all 12 scenes (6 ScanNet++ + 6 Replica). / 입력 5장, 전체 12개 장면(ScanNet++ 6 + Replica 6).

| Method | CD ↓ (cm) | F-Score ↑ (%) | NC ↑ (%) | PSNR ↑ | SSIM ↑ | LPIPS ↓ |
|---|---|---|---|---|---|---|
| 2DGS | 11.55 | 61.91 | 62.70 | 15.76 | 0.718 | 0.305 |
| MAtCha | 11.02 | 63.13 | 78.89 | 15.54 | 0.724 | 0.285 |
| G4Splat | 6.71 | 65.66 | 81.48 | 21.61 | 0.826 | 0.244 |
| **AnchorGS** | **6.04** | **68.39** | **82.15** | **21.67** | **0.827** | **0.244** |

## Links

- **Project Page:** [https://eunhye0323.github.io/AnchorGS/](https://eunhye0323.github.io/AnchorGS/)
