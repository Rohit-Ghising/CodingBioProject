
import imgl from "../assets/66310ef69542db959b7a01e3_buildwith-left.svg"
import img1 from "../assets/frame.webp"
import img2 from "../assets/doctor.webp"
import img3 from "../assets/hand.webp"


  
  
  function PositionComponent() {
    return ( 
      <div className="w-full">
        
      <div className="w-10/12 mx-auto gap-8 mt-16 p-2">
      <img src={imgl} alt="" />
     <div className="px-64">
      <h1 className="text-2xl font-sans flex items-center justify-center mb-6 mr-2 ">Build with Coding Bio</h1>
      <p className="flex items-center justify-center font-semibold text-xl pb-24 ">Join Coding Bio and help deliver the next generation of <br />personalized therapies to patients. We are looking for <br />computational and scientific professionals at every career stage <br /> who can help us build best-in-class modular protein therapies.</p>

         <div className="flex items-center justify-center">
          <button className="p-4 pr-8 bg-yellow-200" 
        style={{
    clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)'
  }}>
        <div className="font-bold" >Open Positions</div>
       </button>
         </div>
     </div>

     
      </div>

      <div className="w-10/12 mx-auto gap-8 mt-16 p-2">
      <div className=" flex px-36">

        <div className="flex-1 p-4"><img src={img1} alt="" /></div>
        <div className="flex-1 p-4 mt-16 pt-0"><img src={img2} alt="" /></div>
        <div className="flex-1 p-4"><img src={img3} alt="" /></div>
      </div>
      </div>
      </div>
    )
  }
  
  export default PositionComponent
  