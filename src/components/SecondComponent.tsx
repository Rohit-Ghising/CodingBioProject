import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function SecondComponent() {
  const svgRef = useRef(null);
  const circleRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgRef, 'second');

  // Measure the path length once the component mounts
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="mb-0">
      <div className="flex w-10/12 mx-auto gap-8 mt-16   mb-0">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Second Component</h2>
          <p className="text-lg text-gray-700 mb-4">
            This is the second component with its own animated path. The circle
            follows a different path as you scroll.
          </p>
          <p className="text-lg text-gray-700">
            Notice how the animation is synchronized with the scroll position,
            creating a smooth and engaging user experience.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <svg
            width="160"
            height="510"
            viewBox="0 0 160 510"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            {/* Main path with rounded corner */}
            <path
              d="M10,10 L90,10 A60,60 0 0 1 150,70 L150,500"
              stroke="black"
              strokeWidth="1"
              fill="none"
              ref={pathRef}
            />

            {/* Circle positioned above the line (initially at the start point) */}
            <circle cx="10" cy="10" r="6" fill="black" ref={circleRef} style={{opacity: 0}} />
          </svg>
        </div>
      </div>
    </div>
  );
}