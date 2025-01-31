// src/components/DiskSVG.tsx
import React from 'react';
import DiskPathsGroup from '../disk/DiskPathGroup';

const DiskSVG: React.FC = () => {
  return (
    <div>
      <svg
        width="1400"
        height="1080"
        viewBox="0 0 1147 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Group containing all paths */}
        <DiskPathsGroup />

        {/* Filter definitions */}
        <defs>
          <filter
            id="filter0_d_3472_7599"
            x="83.9913"
            y="49.8558"
            width="978.882"
            height="979.019"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="39.0047" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3472_7599" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3472_7599" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DiskSVG;
