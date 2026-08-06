---
title: "[Ongoing] GradeS: Geometry-Aware Reliability-Guided Diffusion Supervision for Sparse-View 3D Gaussian Splatting"
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

Novel View Synthesis (NVS), which synthesizes images from unseen viewpoints using only a few input images, is a fundamental technology for virtual and augmented reality, digital twins, robotics, and autonomous driving simulation. However, under sparse-view conditions, 3D Gaussian Splatting (3DGS) struggles to reconstruct stable scene geometry. This challenge becomes even more severe in unbounded outdoor scenes, where limited view overlap and large unobserved regions lead to unreliable depth estimation and floating artifacts.

Recent approaches have attempted to address these challenges either by stabilizing scene geometry or by using diffusion-generated pseudo-views as additional supervision. However, geometry stabilization alone cannot provide supervision in unobserved regions, while diffusion-generated pseudo-views may contain hallucinations or temporal inconsistencies. Using all generated pseudo-views as equally reliable supervision can therefore accumulate errors and degrade the optimization of 3DGS.

GradeS proposes a Reliability-Guided Diffusion Supervision framework to address these limitations. First, Depth-Consistency Regularization stabilizes the geometry of observed regions by enforcing consistency with a pretrained Baseline 3DGS model. The reliability of each diffusion-generated Pseudo-view is then estimated, and only reliable regions are selectively weighted during 3DGS optimization. By combining stable geometry with reliability-aware pseudo-view supervision, GradeS effectively complements unobserved regions while improving Novel View Synthesis performance under sparse-view conditions.

---

## 프로젝트 개요

소수의 입력 이미지만으로 새로운 시점의 영상을 생성하는 Novel View Synthesis (NVS) 는 VR/AR, 디지털 트윈, 로보틱스, 자율주행 시뮬레이션 등 다양한 분야의 핵심 기술입니다. 그러나 입력 뷰가 제한적인 Sparse-view 환경에서는 3D Gaussian Splatting (3DGS) 이 안정적인 장면 기하(Scene Geometry)를 복원하기 어렵습니다. 특히 Unbounded Outdoor Scene 에서는 뷰 간 중첩(View Overlap)이 부족하고 미관측 영역(Unobserved Region)이 넓어 깊이 추정이 불안정해지며, 그 결과 Floating Artifact 와 같은 기하 왜곡이 발생합니다.

최근에는 이러한 문제를 해결하기 위해 Scene Geometry를 안정화하거나, 디퓨전 모델이 생성한 Pseudo-view 를 추가적인 Supervision으로 활용하는 연구들이 제안되었습니다. 그러나 Geometry Stabilization만으로는 미관측 영역의 정보를 보완하기 어렵고, 생성된 Pseudo-view에는 Hallucination 이나 시간적 비일관성(Temporal Inconsistency)이 포함될 수 있습니다. 이러한 생성 결과를 동일한 신뢰도로 Supervision에 활용하면 오류가 누적되어 3DGS 최적화 성능이 저하될 수 있습니다.

**GradeS**는 이러한 한계를 해결하기 위해 Reliability-Guided Diffusion Supervision 프레임워크를 제안합니다. 먼저, 사전 학습된 Baseline 3DGS 모델을 기준으로 Depth-Consistency Regularization 을 적용하여 관측 영역의 Geometry를 안정화합니다. 이후 디퓨전 모델이 생성한 Pseudo-view의 Reliability 를 추정하고, 신뢰할 수 있는 영역만 선택적으로 가중하여 3DGS 학습에 활용합니다. 이를 통해 안정적인 Geometry를 유지하면서도 미관측 영역을 효과적으로 보완하여 Sparse-view 환경에서의 Novel View Synthesis 성능을 향상시킵니다.

---

## Method

<img src="/images/grades_pipeline.png" alt="GradeS pipeline" style="width:100%; border-radius:12px;">

**GradeS** consists of four stages that progressively stabilize scene geometry and incorporate reliability-aware diffusion supervision.

1. **Initial Geometry Estimation**: dense-stereo geometry from the sparse input views produces the initial 3D representation (point clouds, depth, and confidence), which serves as the scene geometry and reliability prior.
2. **Geometry-Aware Scene Grounding**: the 3DGS renderer is stabilized before video diffusion is applied, producing RGB, depth, and confidence maps as geometry-aware conditioning signals so that unstable geometry and floaters do not propagate into generated pseudo-views.
3. **Scene-Grounded Latent Guidance**: during video diffusion generation, stage-wise latent blending preserves reliable known regions while the diffusion model synthesizes unseen or weakly observed ones, completing missing content without modifying observed regions.
4. **Reliability-Guided Optimization**: generated pseudo-views are not treated as ground truth. Instead, they are selected and weighted by hallucination detection, frame-level reliability, pixel-level uncertainty, and geometry regularization to control the influence of unreliable content.

---

## 연구 방법

**GradeS**는 Scene Geometry를 안정화하고 Reliability-Guided Diffusion Supervision을 적용하기 위해 다음 네 단계로 구성됩니다.

1. **Initial Geometry Estimation**: 희소한 입력 뷰로부터 Dense Stereo Reconstruction을 수행하여 Point Cloud, Depth Map, Confidence를 포함하는 초기 3D 표현을 생성합니다. 이 결과는 이후 최적화를 위한 초기 Scene Geometry와 Reliability Prior로 활용됩니다.
2. **Geometry-Aware Scene Grounding**: Video Diffusion을 수행하기 전에 3DGS Renderer를 안정화하고, RGB, Depth, Confidence Map을 Geometry-Aware Conditioning Signal로 생성합니다. 이를 통해 불안정한 Geometry와 Floating Artifact가 생성된 Pseudo-view로 전파되는 것을 방지합니다.
3. **Scene-Grounded Latent Guidance**: Video Diffusion 과정에서 Stage-wise Latent Blending을 적용하여 신뢰할 수 있는 관측 영역은 유지하고, 미관측되거나 관측이 부족한 영역만 선택적으로 생성합니다. 이를 통해 기존 Scene Geometry를 유지하면서 누락된 영역을 자연스럽게 보완합니다.
4. **Reliability-Guided Optimization**: 생성된 Pseudo-view를 Ground Truth로 사용하지 않고, Hallucination Detection, Frame-level Reliability, Pixel-level Uncertainty, Geometry Regularization을 기반으로 선택적으로 가중하여 3DGS를 최적화합니다. 이를 통해 신뢰도가 낮은 생성 결과의 영향을 최소화하면서 안정적인 Novel View Synthesis를 수행합니다.
---

## Quantitative Results

GradeS is evaluated on the Mip-NeRF 360 and Tanks & Temples benchmarks under 3/4-, 6-, and 9-view settings. Performance is measured on test views using PSNR, SSIM, and LPIPS. Compared with the depth-regularization-based sparse-view 3DGS
 **FSGS (ECCV 2024)** and the diffusion-supervision-based based **GuidedVD (CVPR 2025)**, GradeS consistently achieves performance improvements across all scenes and evaluation metrics.

GradeS는 Mip-NeRF 360 과 Tanks & Temples 벤치마크에서 3/4-, 6-, 9-view 입력 조건을 사용하여 평가하였습니다. 성능은 테스트 뷰에 대한 PSNR, SSIM, LPIPS 지표로 측정하였습니다. Depth-Regularization 기반 Sparse-view 3DGS 방법인 **FSGS (ECCV 2024)**와 Diffusion-Supervision 기반 **GuidedVD (CVPR 2025)**를 비교 대상으로 하였으며, GradeS는 모든 장면과 평가 지표에서 일관된 성능 개선을 보였습니다.

| Scene | FSGS (ECCV 2024) | GuidedVD (CVPR 2025) | **GradeS (Ours)** |
|---|---|---|---|
| Mip-NeRF 360 · Garden | 17.51 / 0.378 / 0.438 | 18.95 / 0.425 / 0.437 | **19.00 / 0.450 / 0.419** |
| Mip-NeRF 360 · Bicycle | 15.44 / 0.262 / 0.528 | 17.51 / 0.339 / 0.507 | **17.74 / 0.354 / 0.480** |
| Tanks & Temples · Truck | 14.80 / 0.502 / 0.402 | 16.44 / 0.551 / 0.399 | **16.50 / 0.559 / 0.384** |

<p style="font-size: 0.9em; color: #64748b;">PSNR↑ / SSIM↑ / LPIPS↓. Full per-scene tables and ablations are on the <a href="https://eunhye0323.github.io/GradeS/">project page</a>. 이 외 scene별 result와 ablation은 <a href="https://eunhye0323.github.io/GradeS/">프로젝트 페이지</a>에서 확인할 수 있습니다.</p>

### Qualitative Results

360° orbit renderings, GuidedVD vs. GradeS (Ours) · 360° 궤도 렌더링, GuidedVD와 GradeS(Ours) 비교:

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/bicycle_gvd_vs_ours_s9.mp4"></video>

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/train_gvd_vs_ours_s9.mp4"></video>

Interactive slider comparisons, including baseline comparisons and a Kitchen-scene ablation, are available on the [project page](https://eunhye0323.github.io/GradeS/). · 베이스라인 비교와 Kitchen 장면 ablation을 포함한 인터랙티브 슬라이더 비교는 [프로젝트 페이지](https://eunhye0323.github.io/GradeS/)에서 볼 수 있습니다.

<!--
---

## Role & Tech Stack

This is individual, ongoing M.S. thesis research at the Computer Graphics and Visualization Lab, KAIST.
본 연구는 KAIST Computer Graphics and Visualization 연구실에서 수행 중인 단독 석사논문 연구입니다. 

- **3D Reconstruction / Rendering:** 3D Gaussian Splatting, dense-stereo initialization (DUSt3R), depth estimation (Depth-Anything-V2)
- **Generative Model:** Video diffusion-based novel view generation (ViewCrafter) with stage-wise latent blending
- **Framework:** PyTorch, CUDA
-->

---

## Links

- **Project Page:** [https://eunhye0323.github.io/GradeS/](https://eunhye0323.github.io/GradeS/)
- **Poster:** [final-term-poster_GradeS.pdf](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)
