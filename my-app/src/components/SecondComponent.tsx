

export default function SecondComponent() {
  return ( 
    <div>
    <div className="flex  w-10/12 mx-auto gap-8 mt-16 ">

      
        <h1 className="text-3xl p-4 font-semibold align-top flex-1">
Today, immunotherapies <br /> require trade offs between <br /> speed, cost, and quality</h1>
    
       {/* <div className="p-4 flex-1 ">
<svg className="mt-12 relative" width="300" height="500" xmlns="http://www.w3.org/2000/svg">
 <path 
    d="M10,10 L90,10 A60,60 0 0 1 150,70 L150,500" 
    stroke="black" 
    stroke-width="1" 
    fill="none"
  />
     
    
</svg>
<svg>
  <circle cx="50" cy="50" r="4" fill="black"/>
</svg>
   </div>  */}
   <div className="p-4 flex-1 relative">
  <svg className="mt-12 relative p-4" width="300"  height="500" xmlns="http://www.w3.org/2000/svg">
    {/* Main path with rounded corner */}
    <path 
      d="M10,10 L90,10 A60,60 0 0 1 150,70 L150,500" 
      stroke="black" 
      stroke-width="1" 
      fill="none"
    />
    
    {/* Circle positioned above the line (at the start point) */}
    <circle cx="10" cy="10" r="4" fill="black"/>
  </svg>
</div>
    
      <div className="p-4 py-52 flex-1  ">
        <p className="p-4 text-xl">It's difficult to predict clinical efficacy today. Development is done at low throughput at great expense, while patients wait. Most developers focus on protein binding, not immune response.</p>
      </div>






    </div>
    <div className=" my-24 w-10/12 mx-auto ">
    <div className="px-6">
     <div className="px-56 py-2">
       <div className="mx-8 my-14 ">
        <h2 className="flex items-center justify-center p-4 py-2 pb-4">HIGH THROUGHPUT LAB</h2>
  <h1 className="text-5xl flex items-center justify-center mt-4   ">
    Screening and <br /> testing millions of <br /> candidates directly <br />in cells
  </h1>
       </div>
     </div>
    </div>
  
</div>
</div>
  )
}
