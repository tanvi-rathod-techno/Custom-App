import React from 'react';
import Button from '../ui/Button';


type CardProps = {
  title: string;
  content: string;
  imageUrl?: string;
  onLike?: () => void;
  onComment?: () => void;
};

const Card: React.FC<CardProps> = ({ title, content, imageUrl, onLike, onComment }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{content}</p>
        <div className="mt-4 flex justify-between">
          <Button onClick={onLike} className="px-4 py-2 bg-blue-500 text-white rounded">
            Like
          </Button>
          <Button onClick={onComment} className="px-4 py-2 bg-green-500 text-white rounded">
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
