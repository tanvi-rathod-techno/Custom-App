// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import BlogPage from './pages/Blog/BlogPage';  // Import the BlogPage instead of BlogPost/BlogForm directly
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import React from 'react';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/blog/*" element={<BlogPage />} />  {/* Call BlogPage */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
