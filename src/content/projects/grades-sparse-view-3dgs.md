---
title: "GradeS: Geometry-Aware Reliability-Guided Diffusion Supervision for Sparse-View 3D Gaussian Splatting"
categories: [Generative AI, 3D Gaussian Splatting, Novel View Synthesis]
thumbnail: /images/grades_pipeline.png
summary: '<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>M.S. Thesis Research (KAIST CGV Lab) — Reliability-guided video diffusion supervision for sparse-view 3D Gaussian Splatting.</strong><br>
GradeS reconstructs stable 3D scenes from only a few input views by combining depth-consistency regularization with reliability-guided pseudo-view supervision. Instead of trusting diffusion-generated views uniformly, the method weights them by hallucination detection, frame-level reliability, and pixel-level uncertainty, improving over FSGS and GuidedVD (CVPR 2025) on Mip-NeRF 360 and Tanks & Temples.
</span><br>
<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>석사논문 연구 (KAIST CGV Lab) — Sparse-View 3D Gaussian Splatting을 위한 신뢰도 기반 비디오 디퓨전 슈퍼비전 연구.</strong><br>
GradeS는 소수의 입력 이미지만으로 안정적인 3D 장면을 복원하기 위해, 깊이 일관성 정규화와 신뢰도 기반 pseudo-view 슈퍼비전을 결합한 방법을 제안합니다. 비디오 디퓨전 모델이 생성한 뷰를 그대로 사용하는 대신 hallucination 검출, 프레임 단위 신뢰도, 픽셀 단위 불확실성으로 가중치를 부여하여, Mip-NeRF 360과 Tanks & Temples 벤치마크에서 FSGS 및 GuidedVD(CVPR 2025) 대비 향상된 성능을 달성했습니다.
</span>'
badge: "Research"
accent: "research"
date: 2026-06-01
---

**🔗 [Project Page](https://eunhye0323.github.io/GradeS/) · [Poster (PDF)](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)**

---

## Project Overview

Novel view synthesis from a small number of input views is a core problem for **virtual/augmented reality, digital twins, robotics, and autonomous driving simulation**. When input views are sparse, **3D Gaussian Splatting (3DGS)** methods struggle to reconstruct stable scene geometry — especially in **unbounded outdoor scenes**, where limited view overlap and large unobserved regions cause inaccurate depth estimation and floating artifacts.

Recent works either stabilize geometry or use **diffusion-generated pseudo-views** as extra supervision. However, geometry stabilization alone cannot constrain unobserved regions, while generated pseudo-views may contain **hallucinated or temporally inconsistent content** — using them uniformly as supervision accumulates errors during optimization.

**GradeS** proposes a **reliability-guided diffusion supervision** method that controls the uncertainty of generated pseudo-views: depth-consistency regularization stabilizes the depth structure toward a pre-trained baseline 3DGS model in observed regions, while generated views are selected and weighted by their estimated reliability.

---

## 프로젝트 개요

소수의 입력 이미지로부터 새로운 시점의 영상을 합성하는 기술(novel view synthesis)은 **VR/AR, 디지털 트윈, 로보틱스, 자율주행 시뮬레이션**의 핵심 과제입니다. 입력 뷰가 희소한(sparse) 조건에서 **3D Gaussian Splatting(3DGS)** 기반 방법은 안정적인 장면 기하 복원에 어려움을 겪으며, 특히 **경계가 없는(unbounded) 야외 장면**에서는 뷰 간 중첩 부족과 넓은 미관측 영역으로 인해 부정확한 깊이 추정과 floating artifact가 발생합니다.

최근 연구들은 기하 구조를 안정화하거나 **디퓨전 모델이 생성한 pseudo-view**를 추가 슈퍼비전으로 활용했지만, 기하 안정화만으로는 미관측 영역을 충분히 제약할 수 없고, 생성된 뷰에는 **hallucination이나 시간적 비일관성**이 포함될 수 있어 이를 균일하게 사용하면 최적화 과정에서 오류가 누적됩니다.

**GradeS**는 생성된 pseudo-view의 불확실성을 제어하는 **신뢰도 기반 디퓨전 슈퍼비전** 기법을 제안합니다. 관측된 영역에서는 사전 학습된 baseline 3DGS 모델을 기준으로 한 깊이 일관성 정규화로 깊이 구조를 안정화하고, 생성된 뷰는 추정된 신뢰도에 따라 선별·가중하여 슈퍼비전으로 활용합니다.

---

## Method

<img src="/images/grades_pipeline.png" alt="GradeS pipeline" style="width:100%; border-radius:12px;">

GradeS consists of **four stages** for reliable sparse-view 3DGS with diffusion-generated supervision:

1. **Initial Geometry Estimation** — Dense-stereo geometry from sparse input views constructs the initial 3D representation: point clouds, depth information, and confidence cues that serve as the geometric foundation and reliability prior.
2. **Geometry-Aware Scene Grounding** — The 3DGS renderer is stabilized before applying video diffusion, producing RGB, depth, and confidence maps as geometry-aware conditioning signals. This prevents unstable geometry and floaters from propagating into generated pseudo-views.
3. **Scene-Grounded Latent Guidance** — During video diffusion generation, **stage-wise latent blending** preserves reliable known regions while unseen or weakly observed regions are synthesized by the diffusion model, completing missing content without modifying observed regions.
4. **Reliability-Guided Optimization** — Generated pseudo-views are not treated as ground truth; they are selected and weighted by **hallucination detection, frame-level reliability, pixel-level uncertainty, and geometry regularization**, controlling the influence of unreliable content.

---

## 연구 방법

GradeS는 디퓨전 생성 슈퍼비전을 활용한 신뢰할 수 있는 sparse-view 3DGS를 위한 **4단계 파이프라인**으로 구성됩니다.

1. **초기 기하 추정** — 희소 입력 뷰로부터 dense-stereo 기하 정보를 추정하여 포인트 클라우드, 깊이, confidence 정보로 초기 3D 표현을 구축하고, 이를 기하학적 기반이자 신뢰도 프라이어로 사용합니다.
2. **기하 인지 장면 그라운딩** — 비디오 디퓨전 적용 전에 3DGS 렌더러를 안정화하여 RGB·깊이·confidence 맵을 기하 인지 조건 신호로 생성합니다. 불안정한 기하와 floater가 생성 뷰로 전파되는 것을 방지합니다.
3. **장면 그라운딩 기반 잠재 공간 가이던스** — 비디오 디퓨전 생성 과정에서 **단계적 latent blending**을 통해 신뢰할 수 있는 관측 영역은 보존하고, 미관측되었거나 약하게 관측된 영역은 디퓨전 모델이 합성하도록 하여 관측된 영역을 변형하지 않고 누락된 콘텐츠를 완성합니다.
4. **신뢰도 기반 최적화** — 생성된 pseudo-view를 정답으로 취급하지 않고 **hallucination 검출, 프레임 단위 신뢰도, 픽셀 단위 불확실성, 기하 정규화**에 따라 선별·가중하여 신뢰할 수 없는 콘텐츠의 영향을 제어합니다.

---

## Results

Evaluated on **Mip-NeRF 360** (Garden, Bicycle, Stump, Flowers) and **Tanks & Temples** (Truck, Barn, Train, Caterpillar, Ignatius) with **9 input views**, using PSNR↑ / SSIM↑ / LPIPS↓ on held-out test views. GradeS outperforms both the **FSGS (ECCV 2024)** baseline and the diffusion-supervised **GuidedVD (CVPR 2025)** on nearly all scenes and metrics.

**9개 입력 뷰** 조건에서 **Mip-NeRF 360**(Garden, Bicycle, Stump, Flowers) 및 **Tanks & Temples**(Truck, Barn, Train, Caterpillar, Ignatius) 벤치마크의 held-out 테스트 뷰에 대해 PSNR↑ / SSIM↑ / LPIPS↓로 평가했으며, GradeS는 거의 모든 장면과 지표에서 **FSGS(ECCV 2024)** 베이스라인과 디퓨전 슈퍼비전 기반 **GuidedVD(CVPR 2025)** 를 능가했습니다.

| Scene | FSGS (ECCV 2024) | GuidedVD (CVPR 2025) | **GradeS (Ours)** |
|---|---|---|---|
| Mip-NeRF 360 · Garden | 17.51 / 0.378 / 0.438 | 18.95 / 0.425 / 0.437 | **19.00 / 0.450 / 0.419** |
| Mip-NeRF 360 · Bicycle | 15.44 / 0.262 / 0.528 | 17.51 / 0.339 / 0.507 | **17.74 / 0.354 / 0.480** |
| Tanks & Temples · Truck | 14.80 / 0.502 / 0.402 | 16.44 / 0.551 / 0.399 | **16.50 / 0.559 / 0.384** |

<p style="font-size: 0.9em; color: #64748b;">PSNR↑ / SSIM↑ / LPIPS↓. Full per-scene tables and ablations are on the <a href="https://eunhye0323.github.io/GradeS/">project page</a>. · 전체 장면별 결과와 ablation은 <a href="https://eunhye0323.github.io/GradeS/">프로젝트 페이지</a>에서 확인할 수 있습니다.</p>

### Qualitative Comparison

360° orbit renderings — GuidedVD vs. **GradeS (Ours)** · 360° 궤도 렌더링 — GuidedVD와 **GradeS(Ours)** 비교:

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/bicycle_gvd_vs_ours_s9.mp4"></video>

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/train_gvd_vs_ours_s9.mp4"></video>

Interactive slider comparisons — including baseline comparisons and a Kitchen-scene ablation — are available on the [project page](https://eunhye0323.github.io/GradeS/). · 베이스라인 비교와 Kitchen 장면 ablation을 포함한 인터랙티브 슬라이더 비교는 [프로젝트 페이지](https://eunhye0323.github.io/GradeS/)에서 볼 수 있습니다.

---

## My Role & Tech Stack

This is **individual, ongoing M.S. thesis research** at the Computer Graphics and Visualization Lab, KAIST — I designed and implemented the full pipeline, from geometry initialization to diffusion-guided optimization and evaluation.

본 연구는 KAIST Computer Graphics and Visualization 연구실에서 수행 중인 **단독 석사논문 연구**로, 기하 초기화부터 디퓨전 가이드 최적화·평가까지 전체 파이프라인을 직접 설계하고 구현했습니다.

- **3D Reconstruction / Rendering:** 3D Gaussian Splatting, dense-stereo initialization (MASt3R/DUSt3R → COLMAP), depth estimation (Depth-Anything-V2)
- **Generative Model:** Video diffusion-based novel view generation (ViewCrafter) with stage-wise latent blending
- **Framework:** PyTorch, CUDA

---

## Links

- **Project Page:** [https://eunhye0323.github.io/GradeS/](https://eunhye0323.github.io/GradeS/)
- **Poster:** [final-term-poster_GradeS.pdf](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)
