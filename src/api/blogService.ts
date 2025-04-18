// api/blogService.ts
import { apiService } from './api.services'
import { BlogListResponse } from '../models/blog.model'

class BlogService {
 private api: typeof apiService
  controller: string = 'blogs'

  constructor() {
    this.api = apiService
  }
  
  async getAllBlogs(page: number,limit = 12): Promise<BlogListResponse> {
    const response = await this.api.post<BlogListResponse>(`home-blogs`, { page ,limit});
    return response;
  }
}

export const blogService = new BlogService()
