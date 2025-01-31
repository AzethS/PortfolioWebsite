// src/components/DiskPathsGroup.tsx
import React from 'react';
import Rack from '../disk/Rack';
import { rackPaths } from '../disk/RackPath';

const DiskPathsGroup: React.FC = () => {
  return (
    <g filter={'url(#filter0_d_3472_7599)'} transform={'translate(100, -120)'}>
      {/* Rack A */}
      <Rack onClick={() => alert('Rack A has been clicked!')} d={rackPaths.A} fill="white" />
      
      {/* Rack B */}
      <Rack onClick={() => alert('Rack B has been clicked!')} d={rackPaths.B} fill="white" />
      
      {/* Rack C */}
      <Rack onClick={() => alert('Rack C has been clicked!')} d={rackPaths.C} fill="white" />
      
      {/* Rack D - Empty rack with darker color */}
      <Rack onClick={() => alert('EMPTY RACK has been clicked!')} d={rackPaths.D} fill="#c0bdbd" />
      
      {/* Rack E */}
      <Rack onClick={() => alert('QC RACK has been clicked!')} d={rackPaths.E} fill="white" />
      
      {/* Inner Circle */}
      <Rack onClick={() => alert('INNER CIRCLE has been clicked!')} d={rackPaths.Inner} fill="white" transform="translate(273,238)" />
    </g>
  );
};

export default DiskPathsGroup;
