import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-3xl mx-auto p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
