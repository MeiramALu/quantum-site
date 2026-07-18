// Research directions, funded projects, and headline results.
// Every claim traces to the lab's own material (INFO ABOUT LAB.md) or a
// published paper linked by DOI.

export interface Direction {
  title: string;
  blurb: string;
  detail: string;
  tags: string[];
  color: 'chartreuse' | 'lavender' | 'mint';
}

export const directions: Direction[] = [
  {
    title: 'Quantum modeling of physical processes',
    blurb:
      'Solving partial differential equations — Poisson, heat, and the Muskat–Leverett model — with quantum and hybrid algorithms, applied to oil-recovery simulation.',
    detail:
      'The lab develops quantum algorithms for the PDEs that govern fluid flow and heat transfer, targeting problems in enhanced oil recovery. Work spans the HHL algorithm for the Poisson equation, Trotter–Suzuki evolution for the heat equation, and hybrid quantum–classical solvers for the Muskat–Leverett model.',
    tags: ['PDEs', 'HHL', 'Trotter–Suzuki', 'Oil recovery'],
    color: 'chartreuse',
  },
  {
    title: 'Variational & hybrid computing',
    blurb:
      'Hybrid quantum–classical algorithms built on VQE and VQLS for applied problems, tuned to run on today’s NISQ hardware and GPU-accelerated simulators.',
    detail:
      'Variational quantum eigensolvers (VQE) and variational quantum linear solvers (VQLS) are combined with classical optimization and GPU acceleration. The group studies post-variational optimization and the barren-plateau phenomenon to keep these circuits trainable on noisy devices.',
    tags: ['VQE', 'VQLS', 'NISQ', 'Barren plateaus'],
    color: 'lavender',
  },
  {
    title: 'Quantum machine learning',
    blurb:
      'Quantum convolutional neural networks (QCNN) for image recognition and classification, with data re-uploading and genetic-algorithm optimization.',
    detail:
      'The lab builds quantum and hybrid neural networks for computer-vision tasks, including QCNN architectures with data re-uploading and genetic-algorithm-optimized circuits, and maintains a systematic review of QCNN design and circuit optimization.',
    tags: ['QCNN', 'Data re-uploading', 'Computer vision'],
    color: 'mint',
  },
];

export interface Project {
  title: string;
  scope: string;
  status: 'Active & completed' | 'Under review';
  funding: string;
}

export const projects: Project[] = [
  {
    title:
      'Intelligent computational model for automating solutions with supercomputers and quantum computing',
    scope:
      'Developing hybrid quantum PINN (physics-informed neural network) models designed to run on the KazNU supercomputers.',
    status: 'Active & completed',
    funding: 'Program-targeted funding',
  },
  {
    title:
      'High-performance hybrid algorithms for oil-displacement problems on classical (GPU) and quantum computing',
    scope:
      'Quantum and hybrid algorithms, quantum optimization, and physical-process modeling for enhanced oil recovery.',
    status: 'Active & completed',
    funding: 'Grant funding',
  },
  {
    title:
      'Hybrid quantum–classical modeling of multiphase flows with lattice Boltzmann methods (HQLBM)',
    scope:
      'Lattice Boltzmann equations, quantum and hybrid algorithms, quantum-circuit optimization, and physical-process modeling in oil recovery.',
    status: 'Under review',
    funding: 'Grant funding',
  },
  {
    title:
      'Self-optimizing hybrid quantum–classical neural networks for robust pattern recognition on NISQ devices',
    scope:
      'Quantum and hybrid algorithms, post-variational optimization, recognition of complex patterns, and study of the barren-plateau phenomenon.',
    status: 'Under review',
    funding: 'Grant funding',
  },
];

export interface Result {
  title: string;
  metric: string;
  metricLabel: string;
  detail: string;
  doi: string;
  venue: string;
}

export const results: Result[] = [
  {
    title: 'Hybrid solver for the Muskat–Leverett model',
    metric: '6.42×',
    metricLabel: 'faster than CPU',
    detail:
      'A hybrid quantum algorithm built on NVIDIA CUDA-Q accelerated computation 6.42× versus CPU and 10× versus standard quantum simulators, while retaining high accuracy on a hydrodynamics problem.',
    doi: 'https://doi.org/10.1049/qtc2.70022',
    venue: 'IET Quantum Communication, 2025',
  },
  {
    title: 'Modified HHL for the 2D Poisson equation',
    metric: '0.508',
    metricLabel: 'error level on simulators',
    detail:
      'A modified HHL algorithm significantly reduced the required qubits and gates; testing on quantum simulators showed a low error level of 0.508 for the two-dimensional Poisson equation.',
    doi: 'https://doi.org/10.3390/app132011491',
    venue: 'Applied Sciences, 2023',
  },
  {
    title: 'Quantum 1D heat equation',
    metric: '0.29%',
    metricLabel: 'min. relative error, 7 qubits',
    detail:
      'A quantum algorithm using Trotter–Suzuki decomposition was tested from simulators through to IBM’s cloud quantum computer, reaching a minimum relative error of 0.29% on 7 qubits.',
    doi: 'https://doi.org/10.3390/a17080327',
    venue: 'Algorithms, 2024',
  },
];
