// src/components/Rack.tsx
import React, { useState } from 'react';

interface RackProps {
  onClick: () => void;
  d: string;  // Path data
  fill: string;  // Fill color for the rack
  transform?: string;  // Optional transform property
}

const Rack: React.FC<RackProps> = ({ onClick, d, fill, transform }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <path
      onClick={onClick}
      d={d}
      fill={isHovered ? '#dbd8d8' : fill}  // Change color on hover
      transform={transform}
      style={{ cursor: 'pointer' }}  // Add cursor pointer for better UX
      onMouseEnter={() => setIsHovered(true)}  // Trigger hover effect
      onMouseLeave={() => setIsHovered(false)}  // Reset hover effect
    />
  );
};

export default Rack;
