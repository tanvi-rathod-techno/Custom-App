import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { blogService } from '../../api/blogService';
import { Blog } from '../../models/blog.model';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BLOG_LIMIT = 12;

const BlogPost: React.FC = () => {
  const [page, setPage] = useState(1);
  // const [likes, setLikes] = useState<Record<number, number>>({});
  // const [comments, setComments] = useState<Record<number, number>>({});

  const { isLoading, data, error } = useQuery({
    queryKey: ['blogs', page, BLOG_LIMIT],
    queryFn: async () => await blogService.getAllBlogs(page, BLOG_LIMIT),
    refetchOnMount: true,
  });

  const response = data?.response;
  const blogs = response?.data || [];
  const current_page = response?.current_page || 1;
  const total = response?.total || 0;
  const totalPages = Math.ceil(total / BLOG_LIMIT);

  // const handleLike = (id: number) => {
  //   setLikes(prev => ({
  //     ...prev,
  //     [id]: (prev[id] || 0) + 1,
  //   }));
  // };

  // const handleComment = (id: number) => {
  //   setComments(prev => ({
  //     ...prev,
  //     [id]: (prev[id] || 0) + 1,
  //   }));
  // };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Blog Posts</h1>

      {isLoading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p className="text-red-500">Failed to load blogs.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog: Blog) => (
              <Card
                key={blog.id}
                title={blog.blog_title}
                content={blog?.blog_content || 'No description available.'}
                imageUrl={`https://picsum.photos/400/200?random=${blog.id}` || undefined}
                // onLike={() => handleLike(blog.id)}
                // onComment={() => handleComment(blog.id)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                disabled={page === 1}
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                Previous
              </Button>
              <span className="text-sm text-gray-700">
                Page {current_page} of {totalPages}
              </span>
              <Button
                disabled={page === totalPages}
                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPost;
