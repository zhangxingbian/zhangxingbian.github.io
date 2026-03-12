// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and featured repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-photography",
          title: "photography",
          description: "Travel and landscape photography",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "news-paper-published-in-medical-physics-validation-of-a-robust-method-for-quantification-of-three-dimensional-growth-of-the-thoracic-aorta-using-deformable-image-registration",
          title: 'Paper published in Medical Physics: “Validation of a Robust Method for Quantification of...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-cvpr-2022-learning-pixel-trajectories-with-multiscale-contrastive-random-walks",
          title: 'Paper accepted at CVPR 2022: “Learning Pixel Trajectories with Multiscale Contrastive Random Walks.”...',
          description: "",
          section: "News",},{id: "news-received-best-student-paper-award-runner-up-at-spie-medical-imaging-2023-for-fastcod-fast-brain-connectivity-in-diffusion-imaging",
          title: 'Received Best Student Paper Award Runner-up at SPIE Medical Imaging 2023 for “FastCod:...',
          description: "",
          section: "News",},{id: "news-paper-accepted-as-oral-presentation-at-midl-2023-drimet-deep-registration-based-3d-incompressible-motion-estimation-in-tagged-mri-with-application-to-the-tongue",
          title: 'Paper accepted as oral presentation at MIDL 2023: “DRIMET: Deep Registration-based 3D Incompressible...',
          description: "",
          section: "News",},{id: "news-received-best-student-paper-award-1st-place-at-spie-medical-imaging-2024-for-is-registering-raw-tagged-mr-enough-for-strain-estimation-in-the-era-of-deep-learning",
          title: 'Received Best Student Paper Award (1st place) at SPIE Medical Imaging 2024 for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ipmi-2025-brightness-invariant-tracking-estimation-in-tagged-mri",
          title: 'Paper accepted at IPMI 2025: “Brightness-Invariant Tracking Estimation in Tagged MRI.”',
          description: "",
          section: "News",},{id: "news-co-authored-paper-accepted-at-neurips-2025-optical-coherence-tomography-harmonization-with-anatomy-guided-latent-metric-schrödinger-bridges",
          title: 'Co-authored paper accepted at NeurIPS 2025: “Optical Coherence Tomography Harmonization with Anatomy-Guided Latent...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-cvpr-2026-solving-a-nonlinear-blind-inverse-problem-for-tagged-mri-with-physics-and-deep-generative-priors",
          title: 'Paper accepted at CVPR 2026: “Solving a Nonlinear Blind Inverse Problem for Tagged...',
          description: "",
          section: "News",},{id: "projects-6d-pose-estimation-from-single-rgb-image",
          title: '6D Pose Estimation from Single RGB Image',
          description: "Estimating 6D object pose from a single RGB image using a backpropagatable PnP formulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6d-pose/";
            },},{id: "projects-aorta-registration-and-deformation-analysis",
          title: 'Aorta Registration and Deformation Analysis',
          description: "CT-based deformable image registration methods for measuring and characterizing thoracic aortic aneurysm growth, with clinical validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aorta/";
            },},{id: "projects-highlight-removal-in-facial-images",
          title: 'Highlight Removal in Facial Images',
          description: "A method for removing specular highlights from facial images while preserving natural skin appearance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/highlight-removal/";
            },},{id: "projects-learning-pixel-trajectories-with-multiscale-contrastive-random-walks",
          title: 'Learning Pixel Trajectories with Multiscale Contrastive Random Walks',
          description: "Self-supervised learning of optical flow, keypoint tracking, and video object segmentation via multiscale contrastive random walks on pixel-level space-time graphs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pixel-trajectories/";
            },},{id: "projects-q-value-based-rl-on-atari-games",
          title: 'Q-value Based RL on Atari Games',
          description: "Implementing and comparing deep reinforcement learning algorithms (DQN, Double DQN, Dueling DQN) on Atari game environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/q-value-rl/";
            },},{id: "projects-motion-estimation-and-inverse-problems-in-tagged-mri",
          title: 'Motion Estimation and Inverse Problems in Tagged MRI',
          description: "Physics-constrained deep learning methods for motion estimation, tracking, and blind inverse problems in tagged MRI, with applications to tongue and cardiac imaging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tagged-mri/";
            },},{id: "projects-video-synopsis-for-surveillance",
          title: 'Video Synopsis for Surveillance',
          description: "Efficient keyframe extraction and dynamic video synopsis methods for condensing long surveillance videos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/video-synopsis/";
            },},{id: "projects-weakly-supervised-vitiligo-segmentation",
          title: 'Weakly-Supervised Vitiligo Segmentation',
          description: "A weakly supervised framework for segmenting vitiligo lesions in skin images using saliency propagation on superpixel-based graphs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vitiligo/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%62%69%61%6E%34@%6A%68%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=i2oLdaYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jasonbian97", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zxbian", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
