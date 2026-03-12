---
layout: page
title: Learning Pixel Trajectories with Multiscale Contrastive Random Walks
description: Self-supervised learning of optical flow, keypoint tracking, and video object segmentation via multiscale contrastive random walks on pixel-level space-time graphs.
img: assets/img/placeholder.jpg
importance: 1
category: research
related_publications: true
---

We propose a unified self-supervised learning model for **optical flow**, **keypoint tracking**, and **video object segmentation** by innovating a multiscale contrastive random walk approach that integrates hierarchy into pixel-level space-time graphs.

Our model achieves performance on par with state-of-the-art unsupervised methods for optical flow and video object segmentation, and surpasses current self-supervised models in pose tracking. We introduce a new loss function that eliminates the need for hand-crafted features and utilizes cycle-consistency as an additional learning signal.

**Key contributions:**

- A multiscale contrastive random walk formulation that naturally handles correspondence across different spatial scales
- Cycle-consistency as a self-supervised learning signal for multi-frame training
- Competitive results on DAVIS video object segmentation, JHMDB pose tracking, and Sintel/KITTI optical flow benchmarks

This work was done in collaboration with [Allan Jabri](https://ajabri.github.io/), [Alexei Efros](https://people.eecs.berkeley.edu/~efros/), and [Andrew Owens](https://andrewowens.com/) at the University of Michigan.

**Published at CVPR 2022.**
