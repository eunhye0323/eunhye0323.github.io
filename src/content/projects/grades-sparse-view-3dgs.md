---
title: "[Ongoing] GradeS: Geometry-Aware Reliability-Guided Diffusion Supervision for Sparse-View 3D Gaussian Splatting"
categories: [Generative AI, 3D Gaussian Splatting, Novel View Synthesis]
thumbnail: /images/grades_pipeline.png
summary: '<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>M.S. Thesis Research, Reliability-guided video diffusion supervision for sparse-view 3D Gaussian Splatting.</strong><br>
GradeS reconstructs stable 3D scenes from only a few input views by combining depth-consistency regularization with reliability-guided pseudo-view supervision. Instead of trusting diffusion-generated views uniformly, the method weights them by hallucination detection, frame-level reliability, and pixel-level uncertainty, improving over FSGS and GuidedVD (CVPR 2025) on Mip-NeRF 360 and Tanks & Temples.
</span><br>
<span style="display:block; text-align:justify; word-break:keep-all;">
<strong>석사학위 연구, Sparse-View 3D Gaussian Splatting을 위한 신뢰도 기반 비디오 디퓨전 슈퍼비전 연구.</strong><br>
GradeS는 소수의 입력 이미지만으로 안정적인 3D 장면을 복원하기 위해, 깊이 일관성 정규화와 신뢰도 기반 pseudo-view 슈퍼비전을 결합한 방법을 제안합니다. 비디오 디퓨전 모델이 생성한 뷰를 그대로 사용하는 대신 hallucination 검출, 프레임 단위 신뢰도, 픽셀 단위 불확실성으로 가중치를 부여하여, Mip-NeRF 360과 Tanks & Temples 벤치마크에서 FSGS 및 GuidedVD(CVPR 2025) 대비 향상된 성능을 달성했습니다.
</span>'
badge: "Research"
accent: "research"
date: 2026-06-01
periodEn: "2026.03 – 2026.08 (6 months)"
periodKo: "2026.03 – 2026.08 (6개월)"
---

**Project Period:** 2026.03 – 2026.08 (6 months)<br>**참여 기간:** 2026.03 – 2026.08 (6개월)

---

**🔗 [Project Page](https://eunhye0323.github.io/GradeS/) · [Poster (PDF)](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)**

---

## Project Overview

**Novel View Synthesis (NVS)** aims to synthesize images from unseen viewpoints given a set of input images, with broad applications in virtual and augmented reality, digital twins, robotics, and autonomous driving simulation. Recently, **3D Gaussian Splatting (3DGS)** has emerged as an effective scene representation for NVS, offering high-quality rendering with real-time performance. However, under sparse-view conditions, 3DGS struggles to recover stable scene geometry. This problem becomes particularly severe in unbounded outdoor scenes, where limited view overlap and large unobserved regions lead to unreliable geometry estimation, resulting in geometric distortions and artifacts such as floaters.

**GradeS** combines geometry stabilization with reliability-guided diffusion supervision to complement missing observations with pseudo-views while reducing the influence of unreliable generated information during 3DGS optimization. First, **Depth-Consistency Regularization is applied to the baseline 3DGS used as the scene renderer, stabilizing the geometry of observed regions.** The stabilized 3DGS is then used to render novel-view sequences, which provide **Scene-Grounding Guidance** that encourages the diffusion model to generate new views while remaining consistent with the geometry and appearance of the existing scene. During generation, **stage-wise latent blending** preserves regions that are sufficiently observed in the input views while allowing unseen or weakly observed regions to be complemented with newly generated content. Finally, **GradeS estimates the reliability of the generated pseudo-views and assigns higher weights to reliable regions during 3DGS optimization.** By preserving reliably reconstructed scene geometry while effectively complementing insufficiently observed regions, GradeS improves Novel View Synthesis performance under sparse-view conditions.




---

## 프로젝트 개요

제한된 수의 입력 이미지로부터 새로운 시점의 영상을 생성하는 **Novel View Synthesis (NVS)** 는 VR/AR, 디지털 트윈, 로보틱스, 자율주행 시뮬레이션 등 다양한 분야에 활용되는 핵심 과제입니다. 최근 **3D Gaussian Splatting (3DGS)** 은 높은 렌더링 품질과 실시간 렌더링 성능을 바탕으로 NVS를 위한 효과적인 장면 표현 방식으로 주목받고 있습니다. 그러나 입력 뷰가 제한적인 sparse-view 환경에서는 안정적인 scene geometry를 복원하기 어렵습니다. 특히 unbounded outdoor scene에서는 제한적인 view overlap과 넓은 unobserved regions으로 인해 기하 추정이 불안정해지고, geometric distortion이나 floaters와 같은 artifacts가 발생할 수 있습니다.

**GradeS**는 장면의 기하 구조를 안정화하는 과정과 생성 결과의 신뢰도를 고려한 diffusion supervision을 결합하여, 부족한 관측 정보를 pseudo-view로 보완하면서도 부정확한 생성 정보가 3DGS 학습에 미치는 영향을 줄이는 것을 목표로 합니다. 먼저, **장면을 렌더링하는 Baseline 3DGS에 Depth-Consistency Regularization을 적용하여 관측된 영역의 기하 구조를 안정화합니다.** 이렇게 안정화된 3DGS에서 새로운 시점의 영상을 렌더링하고, 이를 **Scene-Grounding Guidance**로 활용하여 diffusion model이 기존 장면의 구조와 외형을 유지한 상태에서 새로운 시점을 생성하도록 유도합니다. 생성 과정에서는 **stage-wise latent blending**을 적용해 입력 영상에서 충분히 관측된 영역은 최대한 보존하고, 관측되지 않았거나 정보가 부족한 영역을 중심으로 새로운 내용을 보완합니다. 마지막으로 **생성된 pseudo-view의 신뢰도를 추정하고, 신뢰도가 높은 영역에 더 큰 가중치를 부여하여 3DGS 학습에 반영합니다.** 이를 통해 기존에 안정적으로 복원된 장면 구조는 유지하면서도 부족한 관측 영역을 효과적으로 보완하여 sparse-view 환경에서의 Novel View Synthesis 성능을 향상시킵니다.



---

## Problem & Motivation

Existing sparse-view 3DGS approaches mainly address insufficient observations through two directions: **depth regularization** and **diffusion-based pseudo-view supervision**. Depth-Regularized 3DGS methods use depth priors to reduce geometric inconsistencies caused by sparse observations, helping stabilize scene geometry and improve structural consistency in observed regions. This can suppress geometric distortions and texture degradation. However, these approaches primarily regularize geometry inferred from existing observations and therefore have limited ability to recover missing appearance and geometry cues in largely unobserved regions.

In contrast, Diffusion-Based Pseudo-View Supervision generates additional views to provide visual cues for regions that are not sufficiently covered by the input views. However, sparse observations provide weak constraints for the generation process, which can lead to hallucinated appearance or geometry inconsistent with the input views, as well as multi-view inconsistencies among generated pseudo-views. Moreover, uniformly using unreliable generated regions as supervision can introduce erroneous information into 3DGS optimization and cause errors to accumulate. Therefore, reliable pseudo-view supervision under sparse-view conditions requires determining **where additional generation is needed** and **how strongly generated information should influence 3DGS optimization**.

---

## 문제 정의 및 연구 동기

기존 sparse-view 3DGS 연구에서는 부족한 관측 정보를 보완하기 위해 크게 **Depth Regularization**과 **Diffusion 기반 Pseudo-view Supervision**의 두 가지 접근이 활용되어 왔습니다. Depth-Regularized 3DGS는 depth prior를 활용하여 제한된 입력으로 인해 발생하는 기하적 불일치를 완화하고 scene geometry를 안정화하며, 관측 영역의 구조적 일관성을 높여 geometric distortion과 texture degradation을 억제하는 데 효과적입니다. 그러나 이러한 접근은 주로 기존 관측으로부터 추정된 geometry를 안정화하는 데 초점을 두기 때문에, 충분히 관측되지 않은 영역에서 부족한 appearance 및 geometry 정보를 직접 보완하는 데에는 한계가 있습니다.

반면, Diffusion-Based Pseudo-View Supervision은 새로운 시점의 영상을 생성하여 기존 입력 뷰에서 충분히 관측되지 않은 영역에 추가적인 시각 정보를 제공할 수 있습니다. 그러나 sparse observation만으로는 생성 과정을 충분히 제약하기 어려워 입력 영상의 appearance 또는 geometry와 일치하지 않는 hallucination이 발생하거나, 생성된 pseudo-view 간에 multi-view inconsistency가 나타날 수 있습니다. 또한 신뢰도가 낮은 생성 영역까지 동일한 supervision으로 활용할 경우 부정확한 정보가 3DGS 최적화에 반영되어 오류가 누적될 수 있습니다. 따라서 sparse-view 환경에서 pseudo-view를 안정적인 학습 신호로 활용하기 위해서는 **추가적인 생성이 어디에 필요한지 판단하고, 생성된 정보를 3DGS 최적화에 어느 정도 반영할지를 제어하는 과정**이 필요합니다.



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

**GradeS**는 scene geometry를 안정화하고 reliability-guided diffusion supervision을 적용하기 위해 다음 네 단계로 구성됩니다.

1. **Initial Geometry Estimation**: 희소한 입력 뷰로부터 dense-stereo reconstruction을 수행하여 point cloud, depth map, confidence를 포함하는 초기 3D 표현을 생성합니다. 이 결과는 이후 최적화를 위한 초기 scene geometry와 reliability prior로 활용됩니다.
2. **Geometry-Aware Scene Grounding**: video diffusion을 수행하기 전에 3DGS renderer를 안정화하고, RGB, depth, confidence map을 geometry-aware conditioning signal로 생성합니다. 이를 통해 불안정한 geometry와 floaters가 생성된 pseudo-view로 전파되는 것을 방지합니다.
3. **Scene-Grounded Latent Guidance**: video diffusion 과정에서 stage-wise latent blending을 적용하여 신뢰할 수 있는 관측 영역은 유지하고, 미관측되거나 관측이 부족한 영역만 선택적으로 생성합니다. 이를 통해 기존 scene geometry를 유지하면서 누락된 영역을 자연스럽게 보완합니다.
4. **Reliability-Guided Optimization**: 생성된 pseudo-view를 ground truth로 사용하지 않고, hallucination detection, frame-level reliability, pixel-level uncertainty, geometry regularization을 기반으로 선택적으로 가중하여 3DGS를 최적화합니다. 이를 통해 신뢰도가 낮은 생성 결과의 영향을 최소화하면서 안정적인 Novel View Synthesis를 수행합니다.
---

## Quantitative Results

GradeS is evaluated on the Mip-NeRF 360 and Tanks & Temples benchmarks under 3/4-, 6-, and 9-view settings. Performance is measured on test views using PSNR, SSIM, and LPIPS. Compared with the depth-regularization-based sparse-view 3DGS **FSGS (ECCV 2024)** and the diffusion-supervision-based **GuidedVD (CVPR 2025)**, GradeS consistently achieves performance improvements across all scenes and evaluation metrics.

---

## 정량적 결과

GradeS는 Mip-NeRF 360 과 Tanks & Temples 벤치마크에서 3/4-, 6-, 9-view 입력 조건을 사용하여 평가하였습니다. 성능은 테스트 뷰에 대한 PSNR, SSIM, LPIPS 지표로 측정하였습니다. Depth-Regularization 기반 Sparse-view 3DGS 방법인 <strong>FSGS (ECCV 2024)</strong>와 Diffusion-Supervision 기반 <strong>GuidedVD (CVPR 2025)</strong>를 비교 대상으로 하였으며, GradeS는 모든 장면과 평가 지표에서 일관된 성능 개선을 보였습니다.

| Scene | FSGS (ECCV 2024) | GuidedVD (CVPR 2025) | **GradeS (Ours)** |
|---|---|---|---|
| Mip-NeRF 360 · Garden | 17.51 / 0.378 / 0.438 | 18.95 / 0.425 / 0.437 | **19.00 / 0.450 / 0.419** |
| Mip-NeRF 360 · Bicycle | 15.44 / 0.262 / 0.528 | 17.51 / 0.339 / 0.507 | **17.74 / 0.354 / 0.480** |
| Tanks & Temples · Truck | 14.80 / 0.502 / 0.402 | 16.44 / 0.551 / 0.399 | **16.50 / 0.559 / 0.384** |

<p style="font-size: 0.9em; color: #64748b;">PSNR↑ / SSIM↑ / LPIPS↓. Additional per-scene results and ablations beyond these are available on the <a href="https://eunhye0323.github.io/GradeS/">project page</a>.<br>이 외 scene별 result와 ablation은 <a href="https://eunhye0323.github.io/GradeS/">프로젝트 페이지</a>에서 확인할 수 있습니다.</p>

---

### Qualitative Results

Qualitatively, GradeS preserves scene appearance while recovering more stable geometry and reducing floating artifacts, even under sparse-view conditions.

### 정성적 결과

정성적 비교 결과, GradeS는 sparse-view 환경에서도 장면의 외형을 유지하면서 보다 안정적인 geometry를 복원하고 floating artifacts를 감소시키는 것을 확인할 수 있습니다.

360° orbit renderings, GuidedVD vs. GradeS (Ours):<br>360° 궤도 렌더링, GuidedVD와 GradeS(Ours) 비교:

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/bicycle_gvd_vs_ours_s9.mp4"></video>

<video controls muted loop playsinline style="width:100%; border-radius:12px;" src="https://eunhye0323.github.io/GradeS/static/videos/train_gvd_vs_ours_s9.mp4"></video>

Interactive slider comparisons, including baseline comparisons and a Kitchen-scene ablation, are available on the [project page](https://eunhye0323.github.io/GradeS/).<br>베이스라인 비교와 Kitchen 장면 ablation을 포함한 인터랙티브 슬라이더 비교는 [프로젝트 페이지](https://eunhye0323.github.io/GradeS/)에서 볼 수 있습니다.

<!--
---

## Role & Tech Stack

This is individual, ongoing M.S. thesis research at the Computer Graphics and Visualization Lab, KAIST.
본 연구는 KAIST Computer Graphics and Visualization 연구실에서 수행 중인 단독 석사학위 연구입니다. 

- **3D Reconstruction / Rendering:** 3D Gaussian Splatting, dense-stereo initialization (DUSt3R), depth estimation (Depth-Anything-V2)
- **Generative Model:** Video diffusion-based novel view generation (ViewCrafter) with stage-wise latent blending
- **Framework:** PyTorch, CUDA
-->

---

## Links

- **Project Page:** [https://eunhye0323.github.io/GradeS/](https://eunhye0323.github.io/GradeS/)
- **Poster:** [final-term-poster_GradeS.pdf](https://eunhye0323.github.io/GradeS/static/pdfs/final-term-poster_GradeS.pdf)
