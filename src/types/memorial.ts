
export type Memorial = {
  id: string;
  name: string;
  photo: string;
  coverImage: string;
  birthDate: string;
  deathDate: string;
  location: string;
  obituary: string;
  familyMembers: string[];
  memories: Memory[];
};

export type Memory = {
  id: string;
  authorName: string;
  authorPhoto: string;
  content: string;
  date: string;
  type: 'text' | 'photo' | 'video';
  mediaUrl?: string;
  likes: number;
};
