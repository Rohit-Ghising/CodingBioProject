// import { useEffect, useRef, useState } from "react";

// const ForthComponent = () => {
//   const pathRef = useRef(null);
//   const circleRef = useRef(null);
//   const svgContainerRef = useRef(null);
//   const [pathLength, setPathLength] = useState(0);

//   useEffect(() => {
//     if (pathRef.current) {
//       setPathLength(pathRef.current.getTotalLength());
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
//         return;

//       const rect = svgContainerRef.current.getBoundingClientRect();
//       const scrollStart = rect.top + window.scrollY - window.innerHeight;
//       const scrollEnd = rect.bottom + window.scrollY;

//       const progress = (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
//       const clamped = Math.max(0, Math.min(1, progress));

//       const point = pathRef.current.getPointAtLength(pathLength * clamped);
//       circleRef.current.setAttribute("cx", point.x);
//       circleRef.current.setAttribute("cy", point.y);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathLength]);

//   return (
//     <div className="w-10/12 mx-auto my-0 pb-0">
//       <div className="flex">
//         <div className="w-[20%]"></div>
//         <div className="w-[60%] relative" ref={svgContainerRef}>
//           {/* Circle that animates on scroll */}
//           <svg
//             className="absolute z-20"
//             style={{
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               pointerEvents: "none",
//             }}
//             viewBox="0 0 622 308"
//             preserveAspectRatio="none"
//           >
//             <circle ref={circleRef} r="4" fill="black" cx="0" cy="0" />
//           </svg>

//           {/* SVG Lines */}
//           <div className="relative z-10" style={{ height: "308px" }}>
//             {/* Background Line */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               viewBox="0 0 622 308"
//               fill="none"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M311 0V2.5C311 57.7285 266.228 102.5 211 102.5H52.25C23.6693 102.5 0.5 125.669 0.5 154.25C0.5 182.831 23.6693 206 52.25 206H211C266.228 206 311 250.772 311 306V308"
//                 stroke="#BBBBBF"
//                 strokeWidth="1"
//               />
//             </svg>

//             {/* Animated Line */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               viewBox="0 0 622 308"
//               fill="none"
//               preserveAspectRatio="none"
//               className="absolute top-0 left-0"
//             >
//               <path
//                 ref={pathRef}
//                 d="M311 0V2.5C311 57.7285 266.228 102.5 211 102.5H52.25C23.6693 102.5 0.5 125.669 0.5 154.25C0.5 182.831 23.6693 206 52.25 206H211C266.228 206 311 250.772 311 306V308"
//                 stroke="black"
//                 strokeWidth="1"
//                 fill="none"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="w-[20%]"></div>
//       </div>
//     </div>
//   );
// };

// export default ForthComponent;

import { useEffect, useRef, useState } from "react";

const ForthComponent = () => {
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

      // Get ThirdComponent element to find bottom
      const thirdComp = document.getElementById("thirdComponent");
      if (!thirdComp) return;

      const thirdRect = thirdComp.getBoundingClientRect();
      const thirdBottomAbs = window.scrollY + thirdRect.bottom;

      // Current scroll position
      const scrollY = window.scrollY;

      if (scrollY < thirdBottomAbs) {
        // BEFORE scrolling past ThirdComponent
        // Keep circle at start of path
        const startPoint = pathRef.current.getPointAtLength(0);
        circleRef.current.setAttribute("cx", startPoint.x);
        circleRef.current.setAttribute("cy", startPoint.y);
        return; // no animation yet
      }

      // AFTER scrolling past ThirdComponent
      const svgRect = svgContainerRef.current.getBoundingClientRect();
      const scrollStart = thirdBottomAbs; // start animation after thirdComponent bottom
      const scrollEnd = svgRect.bottom + window.scrollY;

      // progress relative to scroll past ThirdComponent
      const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      const clamped = Math.max(0, Math.min(1, progress));

      const point = pathRef.current.getPointAtLength(pathLength * clamped);
      circleRef.current.setAttribute("cx", point.x);
      circleRef.current.setAttribute("cy", point.y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <div className="w-10/12 mx-auto my-0 pb-0">
      <div className="flex mb-0">
        <div className="w-[20%]"></div>
        <div className="w-[60%] relative" ref={svgContainerRef}>
          {/* Circle that animates on scroll */}
          <svg
            className="absolute z-20"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            viewBox="0 0 622 308"
            preserveAspectRatio="none"
          >
            <circle ref={circleRef} r="4" fill="black" cx="0" cy="0" />
          </svg>

          {/* SVG Lines */}
          <div className="relative z-10" style={{ height: "308px" }}>
            {/* Background Line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 622 308"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M311 0V2.5C311 57.7285 266.228 102.5 211 102.5H52.25C23.6693 102.5 0.5 125.669 0.5 154.25C0.5 182.831 23.6693 206 52.25 206H211C266.228 206 311 250.772 311 306V308"
                stroke="#BBBBBF"
                strokeWidth="1"
              />
            </svg>

            {/* Animated Line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 622 308"
              fill="none"
              preserveAspectRatio="none"
              className="absolute top-0 left-0"
            >
              <path
                ref={pathRef}
                d="M311 0V2.5C311 57.7285 266.228 102.5 211 102.5H52.25C23.6693 102.5 0.5 125.669 0.5 154.25C0.5 182.831 23.6693 206 52.25 206H211C266.228 206 311 250.772 311 306V308"
                stroke="black"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </div>
  );
};

export default ForthComponent;
