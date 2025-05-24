
export interface Note {
  id: string;
  title: string;
  description: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  color: 'green' | 'blue' | 'yellow';
}
