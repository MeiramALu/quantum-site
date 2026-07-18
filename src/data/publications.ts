// Peer-reviewed publications and preprints by the lab, 2023–2026.
// Verbatim from the lab's publication list; DOIs added where available.

export interface Publication {
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi?: string;
}

// Newest first.
export const publications: Publication[] = [
  {
    authors: 'Mukhanbet, A., Trigo, P., & Daribayev, B.',
    year: 2026,
    title:
      'Systematic Literature Review of Quantum Convolutional Neural Networks and Circuit Optimization',
    venue: 'Preprint',
  },
  {
    authors: 'Mukhanbet, A., & Daribayev, B.',
    year: 2025,
    title:
      'A Hybrid Quantum–Classical Architecture with Data Re-Uploading and Genetic Algorithm Optimization for Enhanced Image Classification',
    venue: 'Computation, 13(8), 185',
    doi: 'https://doi.org/10.3390/computation13080185',
  },
  {
    authors: 'Daribayev, B., Mukhanbet, A., Makhmut, E., Azatbekuly, N., & Imankulov, T.',
    year: 2025,
    title: 'Quantum–Classical Hybrid Architecture for Solving the Muskat–Leverett Model',
    venue: 'IET Quantum Communication, 6(1), e70022',
    doi: 'https://doi.org/10.1049/qtc2.70022',
  },
  {
    authors: 'Mukhanbet, A., Azatbekuly, N., & Daribayev, B.',
    year: 2025,
    title: 'Development of Hybrid Quantum–Classical Models for Computer Vision',
    venue: 'Journal of Problems in Computer Science and Information Technologies, 3(1), 45–55',
  },
  {
    authors: 'Daribayev, B., Mukhanbet, A., Azatbekuly, N., & Imankulov, T.',
    year: 2024,
    title: 'A Quantum Approach for Exploring the Numerical Results of the Heat Equation',
    venue: 'Algorithms, 17(8), 327',
    doi: 'https://doi.org/10.3390/a17080327',
  },
  {
    authors: 'Mukhanbet, A., Azatbekuly, N., & Daribayev, B.',
    year: 2024,
    title: 'Optimizing Quantum Algorithms for Solving the Poisson Equation',
    venue: 'Scientific Journal of Astana IT University, 55–65',
  },
  {
    authors: 'Daribayev, B., Mukhanbet, A., & Imankulov, T.',
    year: 2023,
    title: 'Implementation of the HHL Algorithm for Solving the Poisson Equation on Quantum Simulators',
    venue: 'Applied Sciences, 13(20), 11491',
    doi: 'https://doi.org/10.3390/app132011491',
  },
];
