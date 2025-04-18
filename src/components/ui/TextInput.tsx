// components/ui/TextInput.tsx
import React, { ChangeEvent } from 'react';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Accept both input and textarea events
  placeholder: string;
  error?: string;
  multiline?: boolean; // Add the 'multiline' prop (optional)
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  multiline = false, // Default is false
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 mt-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 mt-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
