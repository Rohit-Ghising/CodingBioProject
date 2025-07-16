// import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png"

// export default function ThirdComponent() {
//   return (
//     <div className=" w-full" >
//       <div className=" w-10/12 mx-auto gap-8 mt-16 p-2">
      
//       <div className="p-4">
        
//         {/* items */}
//         <div className="flex p-2">
// <div className="w-[40%] pt-16 px-4 text-xl pb-32 ">
//    <p>Our ML platform analyzes protein <br /> structures to find patternsimpacting the  <br /> quality of therapies, then iterates across <br />designs to maximize performance.

// </p>
//    </div>
// <div className="w-[20%] p-4 h-">
//   <svg>
//     <path d=" M100,100 V500"  stroke="black"
//               strokeWidth="1"
//               fill="none"/>
//   </svg>
// </div>
// <div className="w-[40%] p-4">
//   <img src={imagew} alt="" className="" />
//   </div>
//         </div>
       
    
      
//       </div>
//       </div>
//       </div>
      
   
//   )
// }

import imagew from "../assets/662f014c68d91cb1dc3cced7_throughput-1-p-800.png";

export default function ThirdComponent() {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto gap-8 mt-16 p-2">
        <div className="p-4">
          {/* items */}
          <div className="flex p-2">
            {/* Left Text Section */}
            <div className="w-[40%] pt-16 px-4 text-xl pb-32">
              <p>
                Our ML platform analyzes protein <br />
                structures to find patterns impacting the <br />
                quality of therapies, then iterates across <br />
                designs to maximize performance.
              </p>
            </div>

            {/* SVG Line in Center */}
            <div className="w-[20%] p-4 flex justify-center items-center">
              <svg width="2" height="400">
                <path d="M1 0 V400 A60,60 0 0 1 150,70 H 40" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Right Image Section */}
            <div className="w-[40%] p-4">
              <img src={imagew} alt="Throughput Illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
