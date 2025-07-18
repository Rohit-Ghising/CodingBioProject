import { useEffect, useRef, useState } from "react";
import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";
import { useScrollAnimation } from './ScrollAnimationManager';

export default function LastLine() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Use the unified scroll animation system
  useScrollAnimation(pathRef, circleRef, svgContainerRef, 'lastline');

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="w-full mt-0 pt-0">
      <div
        ref={svgContainerRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Last Line
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The final component in our sequence, representing the completion
                of the journey.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={imagew}
                alt="Last Line"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 600"
              >
                <path
                  d="M100,300 Q400,100 700,300"
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
    </div>
  );
}