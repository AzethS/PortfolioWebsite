import DiskSVG from "../../components/disk/DiskSVG";
import DiskMSVG from "../../components/disk/DiskMSVG";

export const Disk = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-500">
    <h1 className="text-4xl font-bold text-white mb-8">SVG Example</h1>
      <DiskSVG />

  </div>
);

export default Disk;
