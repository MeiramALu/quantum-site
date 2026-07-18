// The lab's three core members. Titles per the lab (current).
// Portrait photos are supplied by the lab — drop files into
// src/assets/team/<photo> and set `photo` to the import, or leave null
// to render the styled placeholder.

export interface Member {
  name: string;
  role: string;
  credentials: string;
  initials: string;
  focus: string[];
  // Filename the lab will drop into src/assets/team/ (placeholder until then)
  photoFile: string;
}

export const team: Member[] = [
  {
    name: 'Aksultan Mukhanbet',
    role: 'Head of the Laboratory',
    credentials: 'PhD',
    initials: 'AM',
    focus: ['Quantum machine learning', 'Hybrid quantum–classical architectures', 'Circuit optimization'],
    photoFile: 'mukhanbet.webp',
  },
  {
    name: 'Beimbet Daribayev',
    role: 'Lead Researcher',
    credentials: 'PhD, Associate Professor',
    initials: 'BD',
    focus: ['Quantum algorithms for PDEs', 'Physical-process modeling', 'Quantum computing for oil recovery'],
    photoFile: 'daribayev.jpeg',
  },
  {
    name: 'Nurtugan Azatbekuly',
    role: 'Researcher',
    credentials: 'PhD Student',
    initials: 'NA',
    focus: ['Hybrid quantum–classical models', 'Quantum computer vision', 'Quantum simulation'],
    photoFile: 'azatbekuly.jpeg',
  },
];
