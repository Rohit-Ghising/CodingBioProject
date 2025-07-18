import { useEffect, useRef, useState } from "react";
import imagew from "../assets/component5.png";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function EightComponent() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgContainerRef, 'eighth');

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="w-full mt-0 mb-0 pb-0 pt-0">
      <div className="w-10/12 mx-auto mt-0 mb-0 pb-0 pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={imagew}
              alt="Component 5"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Eighth Component
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This is the eighth component with some descriptive text about its
              functionality and purpose.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8" ref={svgContainerRef}>
          <svg
            width="100%"
            height="200"
            viewBox="0 0 800 200"
            className="border"
          >
            <path
              d="M 50 100 Q 200 50 400 100 T 750 100"
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