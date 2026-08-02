---
title: "GradeS: Geometry-Aware Reliability-Guided Diffusion Supervision for Sparse-View 3D Gaussian Splatting"
categories: [Generative AI, 3D Gaussian Splatting, Novel View Synthesis]
thumbnail: /images/grades_pipeline.png
summary: '<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>M.S. Thesis Research (KAIST CGV Lab), Reliability-guided video diffusion supervision for sparse-view 3D Gaussian Splatting.</strong><br>
GradeS reconstructs stable 3D scenes from only a few input views by combining depth-consistency regularization with reliability-guided pseudo-view supervision. Instead of trusting diffusion-generated views uniformly, the method weights them by hallucination detection, frame-level reliability, and pixel-level uncertainty, improving over FSGS and GuidedVD (CVPR 2025) on Mip-NeRF 360 and Tanks & Temples.
</span><br>
<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>석사논문 연구 (KAIST CGV Lab), Sparse-View 3D Gaussian Splatting을 위한 신뢰도 기반 비디오 디퓨전 슈퍼비전 연구.</strong><br>
GradeS는 소수의 입력 이미지만으로 안정적인 3D 장면을 복원하기 위해, 깊이 일관성 정규화와 신뢰도 기반 pseudo-view 슈퍼비전을 결합한 방법을 제안합니다. 비디오 디퓨전 모델이 생성한 뷰를 그대로 사용하는 대신 hallucination 검출, 프레임 단위 신뢰도, 픽셀 단위 불확실성으로 가중치를 부여하여, Mip-NeRF 360과 Tanks & Temples 벤치마크에서 FSGS 및 GuidedVD(CVPR 2025) 대비 향상된 성능을 달성했습니다.
</span>'
badge: "Research"
accent: "research"
date: 2026-06-01
---

**🔗 [Project Page](https://eunhye0323.github.io/GradeS/) · [Poster (PDF)](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)**

---

## Project Overview

Novel view synthesis from only a few input images is a core problem in virtual/augmented reality, digital twins, robotics, and autonomous driving simulation. Under sparse-view conditions, 3D Gaussian Splatting (3DGS) methods struggle to reconstruct stable scene geometry, and unbounded outdoor scenes make this especially hard: limited view overlap and large unobserved regions cause inaccurate depth estimation and floating artifacts.

Recent work tackles the problem by stabilizing geometry or by using diffusion-generated pseudo-views as extra supervision. Neither is sufficient on its own. Geometry stabilization cannot constrain unobserved regions, and pseudo-views may contain hallucinated or temporally inconsistent content, so using them uniformly as supervision accumulates errors during optimization.

**GradeS** addresses this with reliability-guided diffusion supervision, a scheme that controls the uncertainty of generated pseudo-views. In observed regions, depth-consistency regularization stabilizes the depth structure toward a pre-trained baseline 3DGS model; generated views are selected and weighted by their estimated reliability before they supervise the scene.

---

## 프로젝트 개요

소수의 입력 이미지만으로 새로운 시점의 영상을 합성하는 novel view synthesis는 VR/AR, 디지털 트윈, 로보틱스, 자율주행 시뮬레이션에서 꼭 필요한 기술입니다. 하지만 입력 뷰가 희소한(sparse) 조건에서 3D Gaussian Splatting(3DGS) 기반 방법은 장면 기하를 안정적으로 복원하기 어렵고, 특히 경계가 없는(unbounded) 야외 장면에서는 뷰 간 중첩이 부족하고 미관측 영역이 넓어 깊이 추정이 부정확해지며 floating artifact가 생깁니다.

이를 해결하기 위해 최근 연구들은 기하 구조를 안정화하거나 디퓨전 모델이 생성한 pseudo-view를 추가 슈퍼비전으로 활용해 왔습니다. 그러나 어느 쪽도 단독으로는 충분하지 않습니다. 기하 안정화만으로는 미관측 영역을 제약할 수 없고, 생성된 뷰에는 hallucination이나 시간적 비일관성이 섞여 있을 수 있어 이를 균일하게 슈퍼비전으로 쓰면 최적화 과정에서 오류가 누적됩니다.

**GradeS**는 생성된 pseudo-view의 불확실성을 제어하는 신뢰도 기반 디퓨전 슈퍼비전 기법입니다. 관측된 영역에서는 사전 학습된 baseline 3DGS 모델을 기준으로 깊이 일관성 정규화를 적용해 깊이 구조를 안정화하고, 생성된 뷰는 추정된 신뢰도에 따라 선별하고 가중하여 슈퍼비전으로 사용합니다.

---

## Method

<img src="/images/grades_pipeline.png" alt="GradeS pipeline" style="width:100%; border-radius:12px;">

The pipeline consists of four stages:

1. **Initial Geometry Estimation**: dense-stereo geometry from the sparse input views constructs the initial 3D representation (point clouds, depth information, and confidence cues), which serves as the geometric foundation and reliability prior.
2. **Geometry-Aware Scene Grounding**: the 3DGS renderer is stabilized before video diffusion is applied, producing RGB, depth, and confidence maps as geometry-aware conditioning signals so that unstable geometry and floaters do not propagate into generated pseudo-views.
3. **Scene-Grounded Latent Guidance**: during video diffusion generation, stage-wise latent blending preserves reliable known regions while the diffusion model synthesizes unseen or weakly observed ones, completing missing content without modifying observed regions.
4. **Reliability-Guided Optimization**: generated pseudo-views are not treated as ground truth; instead, they are selected and weighted by hallucination detection, frame-level reliability, pixel-level uncertainty, and geometry regularization to control the influence of unreliable content.

---

## 연구 방법

GradeS 파이프라인은 다음 네 단계로 구성됩니다.

1. **초기 기하 추정**: 희소 입력 뷰에서 dense-stereo 기하를 추정해 포인트 클라우드, 깊이, confidence 정보로 초기 3D 표현을 구축하고, 이를 기하학적 기반이자 신뢰도 프라이어로 사용합니다.
2. **기하 인지 장면 그라운딩**: 비디오 디퓨전을 적용하기 전에 3DGS 렌더러를 안정화하고, RGB·깊이·confidence 맵을 기하 인지 조건 신호로 생성하여 불안정한 기하와 floater가 생성 뷰로 전파되지 않게 합니다.
3. **장면 그라운딩 기반 잠재 공간 가이던스**: 비디오 디퓨전 생성 과정에서 단계적 latent blending으로 신뢰할 수 있는 관측 영역은 보존하고, 미관측되었거나 약하게 관측된 영역은 디퓨전 모델이 합성합니다. 관측된 영역을 변형하지 않고 누락된 콘텐츠를 완성하는 방식입니다.
4. **신뢰도 기반 최적화**: 생성된 pseudo-view를 정답으로 취급하지 않습니다. 대신 hallucination 검출, 프레임 단위 신뢰도, 픽셀 단위 불확실성, 기하 정규화에 따라 선별·가중하여 신뢰할 수 없는 콘텐츠의 영향을 제어합니다.

---

## Results

All methods are evaluated on Mip-NeRF 360 (Garden, Bicycle, Stump, Flowers) and Tanks & Temples (Truck, Barn, Train, Caterpillar, Ignatius) with 9 input views, using PSNR↑ / SSIM↑ / LPIPS↓ on held-out test views. GradeS outperforms both the **FSGS** (ECCV 2024) baseline and the diffusion-supervised **GuidedVD** (CVPR 2025) on nearly all scenes and metrics.

평가는 9개 입력 뷰 조건에서 Mip-NeRF 360(Garden, Bicycle, Stump, Flowers)과 Tanks & Temples(Truck, Barn, Train, Caterpillar, Ignatius) 벤치마크의 held-out 테스트 뷰에 대해 PSNR↑ / SSIM↑ / LPIPS↓ 지표로 진행했으며, GradeS는 거의 모든 장면과 지표에서 **FSGS**(ECCV 2024) 베이스라인과 디퓨전 슈퍼비전 기반 **GuidedVD**(CVPR 2025)보다 높은 성능을 보였습니다.

| Scene | FSGS (ECCV 2024) | GuidedVD (CVPR 2025) | **GradeS (Ours)** |
|---|---|---|---|
| Mip-NeRF 360 · Garden | 17.51 / 0.378 / 0.438 | 18.95 / 0.425 / 0.437 | **19.00 / 0.450 / 0.419** |
| Mip-NeRF 360 · Bicycle | 15.44 / 0.262 / 0.528 | 17.51 / 0.339 / 0.507 | **17.74 / 0.354 / 0.480** |
| Tanks & Temples · Truck | 14.80 / 0.502 / 0.402 | 16.44 / 0.551 / 0.399 | **16.50 / 0.559 / 0.384** |

<p style="font-size: 0.9em; color: #64748b;">PSNR↑ / SSIM↑ / LPIPS↓. Full per-scene tables and ablations are on the <a href="https://eunhye0323.github.io/GradeS/">project page</a>. · 전체 장면별 결과와 ablation은 <a href="https://eunhye0323.github.io/GradeS/">프로젝트 페이지</a>에서 확인할 수 있습니다.</p>

### Qualitative Comparison

360° orbit renderings, GuidedVD vs. GradeS (Ours) · 360° 궤도 렌더링, GuidedVD와 GradeS(Ours) 비교:

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/bicycle_gvd_vs_ours_s9.mp4"></video>

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/train_gvd_vs_ours_s9.mp4"></video>

Interactive slider comparisons, including baseline comparisons and a Kitchen-scene ablation, are available on the [project page](https://eunhye0323.github.io/GradeS/). · 베이스라인 비교와 Kitchen 장면 ablation을 포함한 인터랙티브 슬라이더 비교는 [프로젝트 페이지](https://eunhye0323.github.io/GradeS/)에서 볼 수 있습니다.

---

## My Role & Tech Stack

This is individual, ongoing M.S. thesis research at the Computer Graphics and Visualization Lab, KAIST. I designed and implemented the full pipeline myself, from geometry initialization to diffusion-guided optimization and evaluation.

본 연구는 KAIST Computer Graphics and Visualization 연구실에서 수행 중인 단독 석사논문 연구입니다. 기하 초기화부터 디퓨전 가이드 최적화와 평가까지 전체 파이프라인을 직접 설계하고 구현했습니다.

- **3D Reconstruction / Rendering:** 3D Gaussian Splatting, dense-stereo initialization (MASt3R/DUSt3R → COLMAP), depth estimation (Depth-Anything-V2)
- **Generative Model:** Video diffusion-based novel view generation (ViewCrafter) with stage-wise latent blending
- **Framework:** PyTorch, CUDA

---

## Links

- **Project Page:** [https://eunhye0323.github.io/GradeS/](https://eunhye0323.github.io/GradeS/)
- **Poster:** [final-term-poster_GradeS.pdf](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)
