walk through ICA from intuition to algorithm. 

start with the cocktail party problem, then show the geometric/statistical insight, and finally animate the FastICA iteration.

[table of content]


# The cocktail party problem.
[TODO]
[One Illustration here]


The core mathematical insight behind ICA comes from the Central Limit Theorem: any mixture of independent signals is more Gaussian than the original sources. So the strategy is to find projections of the observed data that are maximally non-Gaussian — those projections recover the original independent sources.


# Non-Gaussian

The contrast functions are the heart of FastICA — they define what "non-Gaussian" means operationally. 

The core idea: FastICA approximates negentropy, which measures how far a distribution is from Gaussian. For a random variable y, negentropy is J(y) ≈ [E{G(y)} - E{G(ν)}]² where ν is a standard Gaussian and G is a smooth nonlinear function. Different choices of G give different sensitivity to different kinds of non-Gaussianity.

[illustration: fastica_contrast_functions_explained.html]

Click through the three contrast functions and four distribution types to see how each combination behaves. Here's the big picture of what you're seeing:
The top row shows the mathematical hierarchy: G(u) is the contrast function whose expectation measures non-Gaussianity; g(u) = G'(u) is its derivative which appears in the fixed-point update; g'(u) is the second derivative which appears as the stabilization term.
The bottom left shows samples from the selected distribution. The bottom right is the key visual — each data point u gets mapped to g(u), and you can see the thin vertical lines showing how each sample "lands" on the curve. The amber-highlighted points have large |g(u)| values, meaning they contribute the most to the update direction.
Now let me show the deeper intuition — why maximizing E{G(wᵀz)} finds the independent component, and how g(u) acts as a "scoring" function in the fixed-point update:

[illustration: [text](<fastica_negentropy_landscape_v2 (1).html>)]

# FastICA

we assume the square case (n sensors for n sources), every transform matrix in the pipeline is (n × n), and every data matrix is (n × T). The multiplication always follows the pattern (n × n) · (n × T) → (n × T).

[illustration: [text](<ica_matrix_dimensions_v2 (1).html>)]

A few things worth noting for fMRI work:

In practice T >> n. You might have n = 10–20 components but T = thousands of voxels or time points.
The covariance matrix Cₓ is (n × n), so the eigendecomposition is cheap — it's on the small dimension, not on T.
Inside the fixed-point update, wᵢᵀz produces a (1 × T) vector — this is the projection of all T samples onto the current direction. The function g() is applied elementwise to this vector, so it's O(T) per iteration. The expectation E{z · g(wᵢᵀz)} is a matrix-vector product (n × T) · (T × 1) / T yielding the new (n × 1) direction.
The non-square case (m sensors, n sources, m > n) uses PCA-based dimensionality reduction first: keep the top n principal components, which gives a (n × m) whitening matrix V. Everything downstream stays (n × n).


Animated visualization showing the FastICA iteration converging in real time on 2D data.

[illustration: [text](fastica_algorithm_animated.html)]

So after finding W1, how is W2 determined? As I know, the W2 and the W1 may not be necessarily orthogonal, unlike the PCA, right? So how is the W2 found?

Great question — and you're right to flag this. The answer hinges on the distinction between the whitened space and the original space.
In the whitened space, w₁ and w₂ are orthogonal. Here's why: whitening transforms the mixing matrix into an orthogonal matrix. If z = V·A·s and E{zzᵀ} = I, then the effective mixing matrix Ã = V·A satisfies Ã·Ãᵀ = I, meaning Ã is orthogonal. So its inverse W̃ = Ã⁻¹ = Ãᵀ is also orthogonal — meaning the rows of W̃ (our unmixing directions in z-space) are orthonormal.
In the original space, however, W = W̃·V is generally not orthogonal — you're correct about that. The columns of the full unmixing matrix have no orthogonality constraint.
So the deflation procedure exploits orthogonality in the whitened space to avoid re-discovering the same source. Let me visualize exactly how this works:

[illustration: [text](fastica_deflation_explained.html)]

[TODO: think about merging fastica_algorithm_animated.html and astica_deflation_explained.html to one]

The key steps to watch:

Step "Find w₁" — click through to watch w₁ converge (red arrow turns green). Standard FastICA, no tricks.
Step "Find w₂ (naive)" — this is the problem you're asking about. If you just run the same fixed-point iteration for w₂ with a different random init, it converges to the same direction as w₁! Both directions find the same peak of non-Gaussianity. The dot product w₁·w₂ ≈ 1 (nearly parallel).
Step "Gram-Schmidt fix" — the actual solution. After every fixed-point update of w₂, we subtract its component along w₁ and renormalize. This forces w₂ to stay perpendicular to w₁ in whitened space, so it finds the second peak of non-Gaussianity.
Step "Both found" — the punchline. Left panel shows the whitened space where w₁ ⊥ w₂ (dot product ≈ 0). Right panel shows the original observation space where the full unmixing vectors W₁ and W₂ are not orthogonal (dot product ≠ 0).

So to directly answer your question: w₂ is found by the same fixed-point iteration as w₁, but with deflationary Gram-Schmidt orthogonalization at every iteration step in the whitened space. The orthogonality constraint is valid in whitened space because whitening makes the mixing matrix orthogonal. In the original space, the recovered independent components are indeed not orthogonal.

# How to handle non-sqaure matrix

The non-square case (m sensors, n sources, m > n) adds a PCA dimensionality reduction step that changes the whitening matrix dimensions — everything else stays the same

Illustration: [text](fastica_square_vs_nonsquare.html) % TODO: Modify the illustration so that they start from the same branch and diverge only they make different steps, and then converge into the same path when their operations are the same.

The key takeaway: the only difference between the two cases is in the whitening step. 


# Example: 3D fMRI analysis

from the raw 4D fMRI volume all the way through to the classic resting-state networks. 

[illustration: [text](fmri_ica_full_pipeline_v2.html)] % maybe need to redo the demo (transpose the input matrix?) because the current one seems to shows the temporal ICA, but in practice the spatial ICA is more practical in the functional MRI analysis. 

# Spatial ICA vs Temporal ICA

Key takaways: ICA always makes the rows of S independent.

illustration [text](spatial_vs_temporal_ica_corrected.html)

Both produce n maps + n time courses, but the independence constraint is applied to only one set, and the other set is just whatever falls out of the matrix factorization with no independence guarantee.

## recall cocktail party problem
In the cocktail party problem, the data matrix is X = (n sensors × T time), and the model is X = AS where S = (n × T). Each row of S is one speaker's voice signal across T time samples — a time course. ICA makes the rows of S independent, so the assumption is that the speakers' time courses are temporally independent.

it makes perfect intuitive sense: What makes the problem solvable is that the speakers' voice signals are statistically independent over time. Alice saying "hello" has nothing to do with Bob saying "goodbye" — their vocal patterns, pitch, rhythm are all independent stochastic processes. 

So the cocktail party setup is: independent time courses (voices), unconstrained mixing (spatial geometry), exactly the temporal ICA formulation. 

