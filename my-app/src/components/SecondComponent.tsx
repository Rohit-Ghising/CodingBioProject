// export default function SecondComponent() {
//   return (
//     <div>
//     <div className="flex  w-10/12 mx-auto gap-8 mt-16 ">

//         <h1 className="text-3xl p-4 font-semibold align-top flex-1">
// Today, immunotherapies <br /> require trade offs between <br /> speed, cost, and quality</h1>

//        {/* <div className="p-4 flex-1 ">
// <svg className="mt-12 relative" width="300" height="500" xmlns="http://www.w3.org/2000/svg">
//  <path
//     d="M10,10 L90,10 A60,60 0 0 1 150,70 L150,500"
//     stroke="black"
//     stroke-width="1"
//     fill="none"
//   />

// </svg>
// <svg>
//   <circle cx="50" cy="50" r="4" fill="black"/>
// </svg>
//    </div>  */}
//    <div className="p-4 flex-1 relative">
//   <svg className="mt-12 relative p-4" width="300"  height="500" xmlns="http://www.w3.org/2000/svg">
//     {/* Main path with rounded corner */}
//     <path
//       d="M10,10 L90,10 A60,60 0 0 1 150,70 L150,500"
//       stroke="black"
//       stroke-width="1"
//       fill="none"
//     />

//     {/* Circle positioned above the line (at the start point) */}
//     <circle cx="10" cy="10" r="4" fill="black"/>
//   </svg>
// </div>

//       <div className="p-4 py-52 flex-1  ">
//         <p className="p-4 text-xl">It's difficult to predict clinical efficacy today. Development is done at low throughput at great expense, while patients wait. Most developers focus on protein binding, not immune response.</p>
//       </div>

//     </div>
//     <div className=" my-24 w-10/12 mx-auto ">
//     <div className="px-6">
//      <div className="px-56 py-2">
//        <div className="mx-8 my-14 ">
//         <h2 className="flex items-center justify-center p-4 py-2 pb-4">HIGH THROUGHPUT LAB</h2>
//   <h1 className="text-5xl flex items-center justify-center mt-4   ">
//     Screening and <br /> testing millions of <br /> candidates directly <br />in cells
//   </h1>
//        </div>
//      </div>
//     </div>

// </div>
// </div>
//   )
// }
import { useEffect, useRef, useState } from "react";

export default function SecondComponent() {
  const svgRef = useRef(null);
  const circleRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Measure the path length once the component mounts
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current && circleRef.current && pathRef.current) {
        const svgElement = svgRef.current;
        const circleElement = circleRef.current;
        const pathElement = pathRef.current;

        // Get the bounding box of the SVG element
        const svgRect = svgElement.getBoundingClientRect();

        // Calculate scroll progress within the SVG's visible area
        // This makes the animation start when the SVG enters the viewport
        // and finish when it leaves. You can adjust these values.
        const scrollStart = svgRect.top + window.scrollY - window.innerHeight; // When SVG top aligns with bottom of viewport
        const scrollEnd = svgRect.bottom + window.scrollY; // When SVG bottom aligns with top of viewport

        const scrollProgress =
          (window.scrollY - scrollStart) / (scrollEnd - scrollStart);

        // Clamp the progress between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Calculate the point along the path
        const point = pathElement.getPointAtLength(
          pathLength * clampedProgress
        );

        // Update circle position
        circleElement.setAttribute("cx", point.x);
        circleElement.setAttribute("cy", point.y);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]); // Re-run effect if pathLength changes

  return (
    <div className="mb-0">
      <div className="flex w-10/12 mx-auto gap-8 mt-16   mb-0">
        <h1 className="text-3xl p-4 font-semibold align-top flex-1">
          Today, immunotherapies <br /> require trade offs between <br /> speed,
          cost, and quality
        </h1>

        <div className="p-4 flex-1 relative">
          <svg
            className="mt-12 relative p-4"
            width="300"
            height="500"
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
            <circle cx="10" cy="10" r="4" fill="black" ref={circleRef} />
          </svg>
        </div>

        <div className="p-4 py-52 flex-1">
          <p className="p-4 text-xl">
            It's difficult to predict clinical efficacy today. Development is
            done at low throughput at great expense, while patients wait. Most
            developers focus on protein binding, not immune response.
          </p>
        </div>
      </div>

      <div className="my-24 w-10/12 mx-auto ">
        <div className="px-6">
          <div className="px-56 py-2">
            <div className="mx-8 my-14 ">
              <h2 className="flex items-center justify-center p-4 py-2 pb-4">
                HIGH THROUGHPUT LAB
              </h2>
              <h1 className="text-5xl flex items-center justify-center mt-4">
                Screening and <br /> testing millions of <br /> candidates
                directly <br />
                in cells
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
