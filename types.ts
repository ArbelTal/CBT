
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
}

