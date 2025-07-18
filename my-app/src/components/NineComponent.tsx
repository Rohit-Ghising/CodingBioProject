// // const NineComponent = () => {
// //   return (
// //     <div className="w-10/12 mx-auto mt-16 p-2">
// //       <div className="flex justify-center">
// //         <div className="w-full max-w-2xl relative">
// //           {/* Curved line container (full width) */}
// //           <div className="relative z-10" style={{ height: "308px" }}>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="100%"
// //               height="100%"
// //               viewBox="0 0 623 308"
// //               fill="none"
// //               preserveAspectRatio="none"
// //             >
// //               <path
// //                 d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
// //                 stroke="#BBBBBF"
// //                 strokeWidth="1"
// //               />
// //               <path
// //                 d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
// //                 stroke="black"
// //                 strokeWidth="1"
// //                 strokeDasharray="798.804"
// //                 strokeDashoffset="798.804"
// //               />
// //             </svg>
// //           </div>

// //           {/* Image 1 - Positioned above Image 2 but both below the line */}
// //           <div
// //             className="absolute z-20"
// //             style={{
// //               top: "20%", // Above Image 2
// //               left: "80%", // Same horizontal position as Image 2
// //               width: "80px",
// //               height: "80px",
// //             }}
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="100%"
// //               height="100%"
// //               viewBox="0 0 96 96"
// //               fill="none"
// //             >
// //               <rect
// //                 x="0.5"
// //                 y="0.5"
// //                 width="95"
// //                 height="95"
// //                 rx="47.5"
// //                 fill="white"
// //                 stroke="#BBBBBF"
// //               />
// //               <path
// //                 d="M73.5117 54.614V68.5C73.5117 73.1944 69.7061 77 65.0117 77V77C60.3173 77 56.5117 73.1944 56.5117 68.5V48"
// //                 stroke="black"
// //                 strokeWidth="2"
// //               />
// //               <path
// //                 d="M22.5117 47.386L22.5117 33.5C22.5117 28.8056 26.3173 25 31.0117 25V25C35.7061 25 39.5117 28.8056 39.5117 33.5L39.5117 54"
// //                 stroke="black"
// //                 strokeWidth="2"
// //               />
// //               <rect
// //                 x="68.6094"
// //                 y="31.7812"
// //                 width="9.90304"
// //                 height="35.871"
// //                 fill="#F9F7F4"
// //                 fillOpacity="0.9"
// //               />
// //               <rect
// //                 x="51.7383"
// //                 y="18"
// //                 width="9.90304"
// //                 height="35.871"
// //                 fill="#F8F36E"
// //               />
// //               <rect
// //                 x="34.8691"
// //                 y="42"
// //                 width="9.90304"
// //                 height="35.871"
// //                 fill="#F9F7F4"
// //                 fillOpacity="0.9"
// //               />
// //               <rect
// //                 x="18"
// //                 y="31.7812"
// //                 width="9.90304"
// //                 height="35.871"
// //                 fill="#F7F382"
// //               />
// //             </svg>
// //           </div>

// //           {/* Image 2 - Original position unchanged */}
// //           <div
// //             className="absolute z-20"
// //             style={{
// //               top: "60%",
// //               left: "70%",
// //               width: "80px",
// //               height: "80px",
// //             }}
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="100%"
// //               height="100%"
// //               viewBox="0 0 96 96"
// //               fill="none"
// //             >
// //               <rect
// //                 x="0.5"
// //                 y="0.5"
// //                 width="95"
// //                 height="95"
// //                 rx="47.5"
// //                 fill="white"
// //                 stroke="#BBBBBF"
// //               />
// //               {[20, 40.5, 61].map((x, i) => (
// //                 <g key={`row-${i}`}>
// //                   <rect
// //                     x={x}
// //                     y="21"
// //                     width="13.75"
// //                     height="13.75"
// //                     fill={i === 2 ? "#F6F16D" : "#F9F7F4"}
// //                     fillOpacity="0.9"
// //                   />
// //                   <rect
// //                     x={x}
// //                     y="41.25"
// //                     width="13.75"
// //                     height="13.75"
// //                     fill={i === 2 ? "#F6F16D" : "#F9F7F4"}
// //                     fillOpacity="0.9"
// //                   />
// //                   <rect
// //                     x={x}
// //                     y="61.5"
// //                     width="13.75"
// //                     height="13.75"
// //                     fill="#F9F7F4"
// //                     fillOpacity="0.9"
// //                   />
// //                 </g>
// //               ))}
// //               <circle
// //                 cx="66.5"
// //                 cy="47.5"
// //                 r="21.5"
// //                 stroke="black"
// //                 strokeWidth="2"
// //               />
// //             </svg>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NineComponent;
// import { useEffect, useRef } from "react";

// const NineComponent = () => {
//   const circleRef = useRef<SVGSVGElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!circleRef.current || !pathRef.current || !containerRef.current)
//         return;

//       const containerRect = containerRef.current.getBoundingClientRect();
//       const scrollY = window.scrollY;
//       const containerTop = containerRect.top + scrollY;
//       const containerHeight = containerRect.height;
//       const viewportHeight = window.innerHeight;

//       // Calculate visible progress (0 when above, 1 when below, 0-1 when visible)
//       const scrollProgress = Math.min(
//         Math.max(
//           (scrollY + viewportHeight - containerTop) /
//             (viewportHeight + containerHeight),
//           0
//         ),
//         1
//       );

//       // Get the path length and current position
//       const pathLength = pathRef.current.getTotalLength();
//       const pathProgress = Math.min(scrollProgress * 1.5, 1); // Faster movement
//       const point = pathRef.current.getPointAtLength(pathProgress * pathLength);

//       // Position the circle (adjusting for circle size)
//       circleRef.current.style.transform = `translate(calc(${point.x}px - 50%), calc(${point.y}px - 50%))`;
//       circleRef.current.style.opacity = scrollProgress > 0 ? "1" : "0";
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initialize position

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-10/12 mx-auto mb-0 pb-0 p-2" ref={containerRef}>
//       <div className="flex justify-center">
//         <div className="w-full max-w-2xl relative">
//           {/* SVG Container with both path and circle */}
//           <div className="relative z-10" style={{ height: "308px" }}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               viewBox="0 0 623 308"
//               fill="none"
//               preserveAspectRatio="none"
//             >
//               {/* Background path (gray) */}
//               <path
//                 d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
//                 stroke="#BBBBBF"
//                 strokeWidth="1"
//               />
//               {/* Active path (black, dashed) - we'll track this one */}
//               <path
//                 ref={pathRef}
//                 d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
//                 stroke="black"
//                 strokeWidth="1"
//                 strokeDasharray="798.804"
//                 strokeDashoffset="798.804"
//               />
//             </svg>

//             {/* Moving circle - now positioned relative to the SVG */}
//             <svg
//               ref={circleRef}
//               className="absolute top-0 left-0 z-30 transition-transform duration-100 ease-out"
//               style={{
//                 width: "12px",
//                 height: "12px",
//                 opacity: 0,
//                 transformOrigin: "center center",
//               }}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 12 12"
//             >
//               <circle
//                 cx="6"
//                 cy="6"
//                 r="5"
//                 fill="black"
//                 stroke="black"
//                 strokeWidth="0.5"
//               />
//             </svg>
//           </div>

//           {/* Your other components... */}
//           <div
//             className="absolute z-20"
//             style={{
//               top: "20%",
//               left: "80%",
//               width: "80px",
//               height: "80px",
//             }}
//           >
//             {/* ... existing SVG content ... */}
//           </div>

//           <div
//             className="absolute z-20"
//             style={{
//               top: "60%",
//               left: "70%",
//               width: "80px",
//               height: "80px",
//             }}
//           >
//             {/* ... existing SVG content ... */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NineComponent;
import { useEffect, useRef } from "react";

const NineComponent = () => {
  const circleRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!circleRef.current || !pathRef.current || !containerRef.current)
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const containerTop = containerRect.top + scrollY;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max(
          (scrollY + viewportHeight - containerTop) /
            (viewportHeight + containerHeight),
          0
        ),
        1
      );

      const pathLength = pathRef.current.getTotalLength();
      const pathProgress = Math.min(scrollProgress * 1.5, 1);
      const point = pathRef.current.getPointAtLength(pathProgress * pathLength);

      circleRef.current.style.transform = `translate(calc(${point.x}px - 50%), calc(${point.y}px - 50%))`;
      circleRef.current.style.opacity = scrollProgress > 0 ? "1" : "0";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-10/12 mx-auto mb-0 pb-0 p-2" ref={containerRef}>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl relative">
          {/* SVG Container */}
          <div className="relative z-10" style={{ height: "308px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 623 308"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
                stroke="#BBBBBF"
                strokeWidth="1"
              />
              <path
                ref={pathRef}
                d="M312 0V2.5C312 57.7285 356.772 102.5 412 102.5H570.75C599.331 102.5 622.5 125.669 622.5 154.25V154.25C622.5 182.831 599.331 206 570.75 206H412C356.772 206 312 250.772 312 306V308"
                stroke="black"
                strokeWidth="1"
                strokeDasharray="798.804"
                strokeDashoffset="798.804"
              />
            </svg>

            {/* Moving circle */}
            <svg
              ref={circleRef}
              className="absolute top-0 left-0 z-30 transition-transform duration-100 ease-out"
              style={{
                width: "12px",
                height: "12px",
                opacity: 0,
                transformOrigin: "center center",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Image 1 */}
          <div
            className="absolute z-20"
            style={{
              top: "20%",
              left: "80%",
              width: "80px",
              height: "80px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 96 96"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="95"
                height="95"
                rx="47.5"
                fill="white"
                stroke="#BBBBBF"
              />
              <path
                d="M73.5117 54.614V68.5C73.5117 73.1944 69.7061 77 65.0117 77V77C60.3173 77 56.5117 73.1944 56.5117 68.5V48"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M22.5117 47.386L22.5117 33.5C22.5117 28.8056 26.3173 25 31.0117 25V25C35.7061 25 39.5117 28.8056 39.5117 33.5L39.5117 54"
                stroke="black"
                strokeWidth="2"
              />
              <rect
                x="68.6094"
                y="31.7812"
                width="9.90304"
                height="35.871"
                fill="#F9F7F4"
                fillOpacity="0.9"
              />
              <rect
                x="51.7383"
                y="18"
                width="9.90304"
                height="35.871"
                fill="#F8F36E"
              />
              <rect
                x="34.8691"
                y="42"
                width="9.90304"
                height="35.871"
                fill="#F9F7F4"
                fillOpacity="0.9"
              />
              <rect
                x="18"
                y="31.7812"
                width="9.90304"
                height="35.871"
                fill="#F7F382"
              />
            </svg>
          </div>

          {/* Image 2 */}
          <div
            className="absolute z-20"
            style={{
              top: "60%",
              left: "70%",
              width: "80px",
              height: "80px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 96 96"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="95"
                height="95"
                rx="47.5"
                fill="white"
                stroke="#BBBBBF"
              />
              {[20, 40.5, 61].map((x, i) => (
                <g key={`row-${i}`}>
                  <rect
                    x={x}
                    y="21"
                    width="13.75"
                    height="13.75"
                    fill={i === 2 ? "#F6F16D" : "#F9F7F4"}
                    fillOpacity="0.9"
                  />
                  <rect
                    x={x}
                    y="41.25"
                    width="13.75"
                    height="13.75"
                    fill={i === 2 ? "#F6F16D" : "#F9F7F4"}
                    fillOpacity="0.9"
                  />
                  <rect
                    x={x}
                    y="61.5"
                    width="13.75"
                    height="13.75"
                    fill="#F9F7F4"
                    fillOpacity="0.9"
                  />
                </g>
              ))}
              <circle
                cx="66.5"
                cy="47.5"
                r="21.5"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NineComponent;
