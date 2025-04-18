import { GenericResponse, PaginatedResponse } from './generic';

export interface Blog {
  id: number;
  blog_title: string;
  user_id: number;
  blog_tagline: string;
  blog_content: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    status: string;
    role_id: number;
    created_at: string | null;
    updated_at: string | null;
  };
  onDelete?: (id: number) => void;
}

// Fixed type
export type BlogListResponse = PaginatedResponse<Blog>;
