import { useEffect, useRef, useState } from "react";
import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function SevenComponent() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgContainerRef, 'seventh');

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="w-full mt-0 pb-0">
      <div
        className="relative w-full h-screen flex items-center justify-center"
        ref={svgContainerRef}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <svg
              viewBox="0 0 800 600"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M100,300 Q200,100 400,300 T700,300"
                stroke="black"
                strokeWidth="2"
                fill="none"
                ref={pathRef}
              />
              <circle ref={circleRef} r="6" fill="black" cx="1" cy="0" style={{opacity: 0}} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}