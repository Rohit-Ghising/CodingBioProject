

export default function SecondComponent() {
  return ( 
    <>
    <div className="flex  w-10/12 mx-auto gap-8 mt-16 ">

      
        <h1 className="text-3xl p-4 font-semibold align-top flex-1">
Today, immunotherapies <br /> require trade offs between <br /> speed, cost, and quality</h1>
    
      {/* <div className="p-4 flex-1 ">
<svg className="mt-12 relative" width="200" height="20" xmlns="http://www.w3.org/2000/svg">
  <path className="abso" d="M10,10 L190,10" stroke="black" stroke-width="2"
   fill="none"/>
   
    
</svg>
<svg>
  <circle cx="50" cy="50" r="5"
  stroke="black"   />
</svg>
   </div> */}
    <div className="mt-14 flex-1" style={{ position: 'relative', width: '200px', height: '20px' }}>
      {/* SVG Line */}
      <svg
        width="200"
        height="20"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <path
          d="M10,10 L190,10"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* SVG Circle (positioned on the line) */}
      <svg
        width="200"
        height="20"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <circle
          cx="100"  // Adjust this to move the circle along the line
          cy="10"   // Must match the line's Y position (10 in this case)
          r="5"
          fill="black"
        />
      </svg>
    </div>
      <div className="p-4 py-52 flex-1  ">
        <p className="p-4 text-xl">It's difficult to predict clinical efficacy today. Development is done at low throughput at great expense, while patients wait. Most developers focus on protein binding, not immune response.</p>
      </div>






    </div>
    <div className="  w-10/12 mx-auto">
  <h2 className="flex items-center justify-center p-4">HIGH THROUGHPUT LAB</h2>
  <h1 className="text-5xl flex items-center justify-center">
    Screening and <br /> testing millions of <br /> candidates directly <br />in cells
  </h1>
</div>
</>
  )
}
