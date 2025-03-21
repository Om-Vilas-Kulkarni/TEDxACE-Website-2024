import React, { useRef} from "react";
import Video from "./Video";

// Register ScrollTrigger plugin

const VideoElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

 

  return (
    <div
      ref={containerRef}
      className="h-auto overflow-hidden relative bg-black text-white  co ntainer_full"
    >
      {/* Render the Video component */}
      <Video />
    </div>
  );
};

export default VideoElement;