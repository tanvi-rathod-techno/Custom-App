// src/pages/Blog/BlogPage.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPost from '../../components/blog/BlogPost';  // Import BlogPost
import BlogForm from '../../components/blog/BlogForm';  // Import BlogForm

const BlogPage = () => {
  return (
    <div>
      <Routes>
        {/* Route to render the BlogPost component when the user navigates to /blog/:id */}
        <Route path=":id" element={<BlogPost />} />

        {/* Route to render the BlogForm component when the user navigates to /blog/create */}
        <Route path="create" element={<BlogForm />} />
      </Routes>
    </div>
  );
};

export default BlogPage;
