import { useEffect, useRef, useState } from "react";
import imagew from "../assets/component5.png";

export default function EightComponent() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
        return;

      const rect = svgContainerRef.current.getBoundingClientRect();
      const scrollStart = rect.top + window.scrollY - window.innerHeight;
      const scrollEnd = rect.bottom + window.scrollY;

      const progress =
        (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
      const clamped = Math.max(0, Math.min(1, progress));

      const point = pathRef.current.getPointAtLength(pathLength * clamped);
      circleRef.current.setAttribute("cx", point.x);
      circleRef.current.setAttribute("cy", point.y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <div className="w-full mt-0 mb-0 pb-0 pt-0">
      <div className="w-10/12 mx-auto mt-0 mb-0 pb-0 pt-0">
        <div className="flex gap-2" ref={svgContainerRef}>
          {/* LEFT - IMAGE */}
          <div className="w-[45%] p-4 flex justify-end items-center">
            <img
              src={imagew}
              alt="Throughput Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* MIDDLE - SVG LINE + CIRCLE */}
          <div className="w-[10%] p-4 flex justify-center items-center">
            <svg width="2" height="400" style={{ overflow: "visible" }}>
              <path
                d="M1 0 V400"
                stroke="black"
                strokeWidth="1"
                fill="none"
                ref={pathRef}
              />
              <circle ref={circleRef} r="6" fill="black" cx="1" cy="0" />
            </svg>
          </div>

          {/* RIGHT - TEXT */}
          <div className="w-[45%] p-4 flex justify-start items-center text-xl leading-7">
            <p className="text-start">
              Our ML platform analyzes protein <br />
              structures to find patterns impacting the <br />
              quality of therapies, then iterates across <br />
              designs to maximize performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
