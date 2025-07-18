import { useEffect, useRef, useState } from "react";
import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function ThirdComponent() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgContainerRef, 'third');

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="w-full mt-0 pb-0" id="thirdComponent">
      <div
        className="w-10/12 mx-auto gap-8 mt-16 p-2 pb-0"
        ref={svgContainerRef}
      >
        <div className="relative">
          <svg
            width="100%"
            height="400"
            viewBox="0 0 800 400"
            className="absolute top-0 left-0 z-10"
          >
            <path
              d="M50,200 Q200,50 400,200 T750,200"
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
  );
}