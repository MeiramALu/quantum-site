// International collaboration — scientific and commercial organisations the lab
// works with in quantum computing, across China, Switzerland, Hungary, Russia
// and Kazakhstan. Names only (no logos required); the lab can add official
// links later where appropriate.

export interface Partner {
  name: string;
  country: string;
  kind: 'Industry' | 'Research' | 'University';
}

export const partners: Partner[] = [
  { name: 'SpinQ Technology', country: 'China', kind: 'Industry' },
  { name: 'Terra Quantum', country: 'Switzerland', kind: 'Industry' },
  { name: 'Origin Quantum', country: 'China', kind: 'Industry' },
  { name: 'Russian Quantum Center (RQC)', country: 'Russia', kind: 'Research' },
  { name: 'Wigner Research Centre for Physics', country: 'Hungary', kind: 'Research' },
  { name: 'Tsinghua University', country: 'China', kind: 'University' },
  { name: 'Wuhan University', country: 'China', kind: 'University' },
  { name: 'Nazarbayev University', country: 'Kazakhstan', kind: 'University' },
];

// Where the team has presented and visited.
export interface Trip {
  event: string;
  place: string;
  note: string;
  imageFile: string; // in src/assets/images/
}

export const trips: Trip[] = [
  {
    event: 'ICQS 2024',
    place: 'Seoul, South Korea',
    note: 'Presented the lab’s research at the International Conference on Quantum Science.',
    imageFile: 'trip-icqs-seoul.jpg',
  },
  {
    event: 'Quantum.Tech',
    place: 'London, United Kingdom',
    note: 'Presented at one of the world’s leading applied-quantum forums.',
    imageFile: 'trip-quantumtech-london.jpg',
  },
  {
    event: 'Russian Quantum Center',
    place: 'Moscow, Russia',
    note: 'Visited RQC to exchange experience and establish scientific collaboration.',
    imageFile: 'trip-rqc.png',
  },
  {
    event: 'Wigner Research Centre for Physics',
    place: 'Budapest, Hungary',
    note: 'Visited the Wigner RCP for research exchange in quantum computing.',
    imageFile: 'trip-wigner-hungary.png',
  },
];
