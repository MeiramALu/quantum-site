// "Media about us" — third-party coverage of the lab's opening (19 June 2026).
// Each entry links out to the original article; excerpts are short, attributed
// summaries only (no republishing of full text or images). To add coverage,
// append one object below.

export interface MediaMention {
  outlet: string;
  lang: 'EN' | 'RU';
  title: string;
  date: string; // ISO; empty string if unknown
  url: string;
  excerpt: string;
}

export const media: MediaMention[] = [
  {
    outlet: 'bilim.expert · Modern Education',
    lang: 'EN',
    title:
      'Al-Farabi Kazakh National University Launches First-of-its-Kind «Quantum AI» Laboratory in Kazakhstan',
    date: '2026-06-19',
    url: 'https://www.bilim.expert/en/post/al-farabi-kazakh-national-university-launches-first-of-its-kind-quantum-ai-laboratory-in-kazakhsta',
    excerpt:
      'Reports the official opening of the “Quantum AI” laboratory at KazNU’s Faculty of Information Technology and Artificial Intelligence — the first of its kind in Kazakhstan — realized with SpinQ Technology.',
  },
  {
    outlet: 'profit.kz',
    lang: 'RU',
    title: 'В КазНУ запущена первая в стране лаборатория «Quantum AI»',
    date: '2026-06-19',
    url: 'https://profit.kz/news/74031/V-KazNU-zapuschena-pervaya-v-strane-laboratoriya-Quantum-AI/',
    excerpt:
      'Covers the launch of the country’s first “Quantum AI” laboratory at KazNU, noting the SpinQ quantum systems delivered and the lab’s role in training and applied research.',
  },
  {
    outlet: 'Telecompaper',
    lang: 'EN',
    title: 'Kazakhstan university KazNU opens Quantum AI lab',
    date: '',
    url: 'https://www.telecompaper.com/news/kazakhstan-university-kaznu-opens-quantum-ai-lab--1574718',
    excerpt:
      'International technology-news coverage of KazNU opening its Quantum AI laboratory, the first quantum-computing facility of its kind in Kazakhstan.',
  },
];
