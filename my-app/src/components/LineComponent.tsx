// import imagel from "../assets/line.png";

// export default function LineComponent() {
//   return (
//     <div className="w-full">
//       <div className="w-10/12 mx-auto gap-8 m-0 p-2 pt-0 pb-0">
//         <div className="p-4 pt-0 pb-0">
//           {/* Flex container */}
//           <div className="flex p-2 pt-0 pb-0">
//             {/* Image Section - left */}
//             <div className="w-[40%] p-4 pt-0 pb-0">
//               <img
//                 src={imagel}
//                 alt="Throughput Illustration"
//                 className="w-full h-auto mt-4 mb-0"
//               />
//             </div>

//             {/* SVG Line - center */}
//             <div className="w-[20%] p-4 pt-0 pb-0 flex justify-center items-center">
//               <svg width="2" height="400">
//                 <path
//                   d="M1 0 V400 A60,60 0 0 1 150,70 H 40"
//                   stroke="black"
//                   strokeWidth="2"
//                   fill="none"
//                 />
//               </svg>
//             </div>

//             {/* Text Section - right */}
//             <div className="w-[40%] px-4 text-xl pt-16 pb-0 mb-0">
//               <p>
//                 Our ML platform analyzes protein <br />
//                 structures to find patterns impacting the <br />
//                 quality of therapies, then iterates across <br />
//                 designs to maximize performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import imagew from "../assets/top.png";
import imageb from "../assets/botton.png";

export default function LastLine() {
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
    <div className="w-full">
      <div
        className="w-10/12 mx-auto gap-8 mt-0 p-2 pt-0"
        ref={svgContainerRef}
      >
        <div className="p-4 pt-0 relative">
          <div className="flex p-2 pt-0">
            {/* Image Section - top and bottom images */}
            <div className="w-[40%] p-4 pt-0 flex flex-col gap-4">
              <p>others</p>
              <img
                src={imagew}
                alt="Top Illustration"
                className="w-full h-auto"
              />
              <p>codeing bio</p>
              <img
                src={imageb}
                alt="Bottom Illustration"
                className="w-full h-auto"
              />
            </div>

            {/* SVG Line in Center */}
            <div className="w-[20%] p-4 flex justify-center pt-0 items-center relative">
              <svg width="2" height="400" style={{ overflow: "visible" }}>
                <path
                  ref={pathRef}
                  d="M1 0 V400 A60,60 0 0 1 150,70 H 40"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Circle that follows scroll */}
                <circle ref={circleRef} r="6" fill="black" cx="1" cy="0" />
              </svg>
            </div>

            {/* Text Section - right */}
            <div className="w-[40%] pt-16 px-4 text-xl pb-0 mb-0">
              <p>
                Our ML platform analyzes protein <br />
                structures to find patterns impacting the <br />
                quality of therapies, then iterates across <br />
                designs to maximize performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
