// import { useEffect, useRef, useState } from "react";
// import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";

// export default function LastLine() {
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

//       const rawProgress =
//         (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
//       const speedFactor = 2; // Adjust this number to make the scroll faster or slower
//       const progress = rawProgress * speedFactor;
//       const clamped = Math.max(0, Math.min(1, progress));

//       const point = pathRef.current.getPointAtLength(pathLength * clamped);
//       circleRef.current.setAttribute("cx", point.x);
//       circleRef.current.setAttribute("cy", point.y);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathLength]);

//   return (
//     <div className="w-full mt-0 pb-0">
//       <div
//         className="w-10/12 mx-auto gap-8 mt-16 p-2 pb-0"
//         ref={svgContainerRef}
//       >
//         <div className="p-4 pb-0">
//           <div className="flex p-2 pb-0">
//             {/* Left Text Section */}
//             <div className="w-[40%] pt-16 px-4 text-xl pb-32">
//               <p>
//                 Our ML platform analyzes protein <br />
//                 structures to find patterns impacting the <br />
//                 quality of therapies, then iterates across <br />
//                 designs to maximize performance.
//               </p>
//             </div>

//             {/* SVG Line and Circle in Center */}
//             <div className="w-[20%] p-4 pb-0 flex justify-center items-center">
//               <svg width="2" height="400" style={{ overflow: "visible" }}>
//                 <path
//                   d="M1 0 V400"
//                   stroke="black"
//                   strokeWidth="1"
//                   fill="none"
//                   ref={pathRef}
//                 />
//                 <circle ref={circleRef} r="6" fill="black" cx="1" cy="0" />
//               </svg>

//               <svg>
//                 <path
//                   d="M55.991 32.0021C55.991 32.0021 55.9915 32.0021 55.9915 32.0016L56 16.5263C56.0005 16.1506 55.7988 15.8034 55.4714 15.6153L41.9985 7.88738L37.4472 5.27007L28.5284 0.141057C28.2015 -0.047019 27.798 -0.047019 27.4711 0.141057L26.6171 0.632262C26.6124 0.634888 26.6076 0.63699 26.6034 0.639616L13.861 7.96776L0.528646 15.6153C0.201213 15.8034 0 16.1506 0 16.5263L0.00844988 32.0016L0 47.4748C0 47.8504 0.201213 48.1977 0.528646 48.3857L14.003 56.1147L27.4711 63.8595C27.798 64.0475 28.2015 64.0475 28.5284 63.8595L41.9938 56.1163L55.4708 48.3852C55.7983 48.1977 56 47.8504 55.9995 47.4743L55.991 32.0026V32.0021ZM47.5047 19.7645C47.5047 19.7645 47.5042 19.7645 47.5036 19.7645C47.5036 19.7645 47.5031 19.7645 47.5026 19.7645L46.7321 20.2058L46.4802 20.3524L34.691 27.1321C34.1027 27.4788 33.4362 27.6622 32.7628 27.6622C30.6171 27.6622 28.8711 25.9227 28.8711 23.7851V9.05681C28.8711 6.91863 30.6171 5.17919 32.7628 5.17919C33.4467 5.17919 34.0969 5.35833 34.6957 5.71242L47.5015 13.0768C48.7136 13.7792 49.4371 15.0295 49.4371 16.4212C49.4371 17.8129 48.7146 19.0716 47.5047 19.7645ZM49.435 47.5783C49.435 48.9678 48.8456 50.0427 47.7297 50.8018C47.7265 50.8039 47.7223 50.8045 47.7186 50.8029C47.7154 50.8013 47.7112 50.8018 47.7086 50.8034L34.6889 58.2892C34.1011 58.6359 33.4346 58.8192 32.7602 58.8192C30.6144 58.8192 28.8685 57.0798 28.8685 54.9421V40.1498C28.9028 38.0405 30.635 36.3357 32.7607 36.3357C33.4446 36.3357 34.0947 36.5149 34.6936 36.869L47.4994 44.2334C48.7114 44.9357 49.435 46.1861 49.435 47.5777V47.5783ZM8.47576 44.2229L8.75777 44.0647L8.83858 44.0138L21.3095 36.8422C21.8973 36.4954 22.5644 36.3121 23.2377 36.3121C25.3834 36.3121 27.1294 38.0515 27.1294 40.1892V54.9437C27.1294 56.0097 26.7127 56.9994 25.9564 57.7307C25.2171 58.4236 24.2258 58.8208 23.2372 58.8208C22.5533 58.8208 21.9031 58.6417 21.3043 58.2876L8.49899 50.9232C7.27165 50.2113 6.53862 48.9521 6.53862 47.5541C6.53862 46.1561 7.26214 44.9121 8.47576 44.2229ZM5.66987 43.2657C3.52413 43.2657 1.7787 41.5262 1.77817 39.3891C1.77817 39.3891 1.77817 39.3886 1.77764 39.3886V24.6351C1.77764 22.4969 3.5236 20.7575 5.66934 20.7575C6.35325 20.7575 7.00337 20.9366 7.60225 21.2907L20.4075 28.6551C21.6349 29.3669 22.3679 30.6173 22.3679 31.9995V32.0951C22.3351 33.4531 21.6032 34.6767 20.4102 35.3686L7.59856 42.7361C7.01076 43.0828 6.34375 43.2662 5.6704 43.2662L5.66987 43.2657ZM25.9575 26.5747C25.2398 27.2471 24.285 27.6412 23.3254 27.6637H23.2377C22.5538 27.6637 21.9037 27.4846 21.3048 27.1305L8.49952 19.7661C7.27218 19.0543 6.53915 17.8039 6.53915 16.4217C6.53915 15.0395 7.28961 13.7561 8.49847 13.0779L21.3095 5.71032C21.8979 5.36358 22.5643 5.18024 23.2382 5.18024C25.384 5.18024 27.1299 6.91968 27.1299 9.05786V23.7872C27.1299 24.8531 26.7132 25.8434 25.957 26.5747H25.9575Z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//             </div>

//             {/* Right Image Section */}
//             <div className="w-[40%] p-4 pb-0">
//               <img
//                 src={imagew}
//                 alt="Throughput Illustration"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";

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

      const rawProgress =
        (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
      const speedFactor = 2;
      const progress = rawProgress * speedFactor;
      const clamped = Math.max(0, Math.min(1, progress));

      const point = pathRef.current.getPointAtLength(pathLength * clamped);
      circleRef.current.setAttribute("cx", point.x);
      circleRef.current.setAttribute("cy", point.y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <div className="w-full mt-0 pt-0">
      <div
        className="w-10/12 mx-auto gap-8 mt-16 p-2 pt-0"
        ref={svgContainerRef}
      >
        <div className="p-4 pb-0  pt-0">
          <div className="flex p-2 pt-0">
            {/* Left Text Section */}
            <div className="w-[40%] pt-16 px-4 text-xl pb-32 mt-0">
              <p>
                Our ML platform analyzes protein <br />
                structures to find patterns impacting the <br />
                quality of therapies, then iterates across <br />
                designs to maximize performance.
              </p>
            </div>

            {/* Vertical Line with Circle */}
            <div className="w-[20%] p-4 pt-0 flex flex-col items-center">
              {/* Vertical Line Container */}
              <div className="relative h-[400px] w-full flex justify-center">
                <svg width="2" height="100%" style={{ overflow: "visible" }}>
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

              {/* Second SVG positioned below the line */}
              <div className="mt-4">
                <svg width="56" height="64" viewBox="0 0 56 64">
                  <path
                    d="M55.991 32.0021C55.991 32.0021 55.9915 32.0021 55.9915 32.0016L56 16.5263C56.0005 16.1506 55.7988 15.8034 55.4714 15.6153L41.9985 7.88738L37.4472 5.27007L28.5284 0.141057C28.2015 -0.047019 27.798 -0.047019 27.4711 0.141057L26.6171 0.632262C26.6124 0.634888 26.6076 0.63699 26.6034 0.639616L13.861 7.96776L0.528646 15.6153C0.201213 15.8034 0 16.1506 0 16.5263L0.00844988 32.0016L0 47.4748C0 47.8504 0.201213 48.1977 0.528646 48.3857L14.003 56.1147L27.4711 63.8595C27.798 64.0475 28.2015 64.0475 28.5284 63.8595L41.9938 56.1163L55.4708 48.3852C55.7983 48.1977 56 47.8504 55.9995 47.4743L55.991 32.0026V32.0021ZM47.5047 19.7645C47.5047 19.7645 47.5042 19.7645 47.5036 19.7645C47.5036 19.7645 47.5031 19.7645 47.5026 19.7645L46.7321 20.2058L46.4802 20.3524L34.691 27.1321C34.1027 27.4788 33.4362 27.6622 32.7628 27.6622C30.6171 27.6622 28.8711 25.9227 28.8711 23.7851V9.05681C28.8711 6.91863 30.6171 5.17919 32.7628 5.17919C33.4467 5.17919 34.0969 5.35833 34.6957 5.71242L47.5015 13.0768C48.7136 13.7792 49.4371 15.0295 49.4371 16.4212C49.4371 17.8129 48.7146 19.0716 47.5047 19.7645ZM49.435 47.5783C49.435 48.9678 48.8456 50.0427 47.7297 50.8018C47.7265 50.8039 47.7223 50.8045 47.7186 50.8029C47.7154 50.8013 47.7112 50.8018 47.7086 50.8034L34.6889 58.2892C34.1011 58.6359 33.4346 58.8192 32.7602 58.8192C30.6144 58.8192 28.8685 57.0798 28.8685 54.9421V40.1498C28.9028 38.0405 30.635 36.3357 32.7607 36.3357C33.4446 36.3357 34.0947 36.5149 34.6936 36.869L47.4994 44.2334C48.7114 44.9357 49.435 46.1861 49.435 47.5777V47.5783ZM8.47576 44.2229L8.75777 44.0647L8.83858 44.0138L21.3095 36.8422C21.8973 36.4954 22.5644 36.3121 23.2377 36.3121C25.3834 36.3121 27.1294 38.0515 27.1294 40.1892V54.9437C27.1294 56.0097 26.7127 56.9994 25.9564 57.7307C25.2171 58.4236 24.2258 58.8208 23.2372 58.8208C22.5533 58.8208 21.9031 58.6417 21.3043 58.2876L8.49899 50.9232C7.27165 50.2113 6.53862 48.9521 6.53862 47.5541C6.53862 46.1561 7.26214 44.9121 8.47576 44.2229ZM5.66987 43.2657C3.52413 43.2657 1.7787 41.5262 1.77817 39.3891C1.77817 39.3891 1.77817 39.3886 1.77764 39.3886V24.6351C1.77764 22.4969 3.5236 20.7575 5.66934 20.7575C6.35325 20.7575 7.00337 20.9366 7.60225 21.2907L20.4075 28.6551C21.6349 29.3669 22.3679 30.6173 22.3679 31.9995V32.0951C22.3351 33.4531 21.6032 34.6767 20.4102 35.3686L7.59856 42.7361C7.01076 43.0828 6.34375 43.2662 5.6704 43.2662L5.66987 43.2657ZM25.9575 26.5747C25.2398 27.2471 24.285 27.6412 23.3254 27.6637H23.2377C22.5538 27.6637 21.9037 27.4846 21.3048 27.1305L8.49952 19.7661C7.27218 19.0543 6.53915 17.8039 6.53915 16.4217C6.53915 15.0395 7.28961 13.7561 8.49847 13.0779L21.3095 5.71032C21.8979 5.36358 22.5643 5.18024 23.2382 5.18024C25.384 5.18024 27.1299 6.91968 27.1299 9.05786V23.7872C27.1299 24.8531 26.7132 25.8434 25.957 26.5747H25.9575Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-[40%] p-4 pb-0">
              <img
                src={imagew}
                alt="Throughput Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
