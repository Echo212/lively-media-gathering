
// Define types for our media library content

export interface Interview {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  date: string;
  duration: string;
  transcript?: string;
  poetId?: string;
  featured?: boolean;
}

export interface Poet {
  id: string;
  name: string;
  city: string;
  bio: string;
  imageUrl: string;
  poems: Poem[];
  featured?: boolean;
}

export interface Poem {
  id: string;
  title: string;
  text: string;
  year?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  imageUrl?: string;
  link?: string;
  featured?: boolean;
}

export interface CityCollection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  poets: string[]; // Poet IDs
  interviews: string[]; // Interview IDs
  events: string[]; // Event IDs
}
