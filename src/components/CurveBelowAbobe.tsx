import { useEffect, useRef, useState } from "react";
import imagew from "../assets/seven.png";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function SevenComponent() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgContainerRef, 'curve');

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="w-full mt-0 pb-0">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imagew})`,
        }}
      >
        <div
          ref={svgContainerRef}
          className="absolute inset-0 w-full h-full"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M960 100 Q1200 300 1400 540 Q1600 780 1820 980"
              stroke="black"
              strokeWidth="3"
              fill="none"
              ref={pathRef}
            />
            <circle ref={circleRef} r="6" fill="black" cx="1" cy="0" style={{opacity: 0}} />
          </svg>
        </div>
      </div>
    </div>
  );
}