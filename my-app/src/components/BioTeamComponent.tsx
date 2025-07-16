import img1 from "../assets/coatman.webp"
import img2 from "../assets/woman.webp"
import img3 from "../assets/shirtman.webp"

  
  
  function BioTeamComponent() {
    return ( 
      <div className="w-full">
      <div className="w-10/12 mx-auto gap-8 mt-16 p-2">

      <div className="flex p-4">

        <div className="flex-1 p-4"> <img src={img1} alt="" />
        <h1 className="text-xl  mt-6 mb-4 ">Simon Bornschein</h1>
        <h2 className="font-semibold m-4 ml-0 capitalize">Co-founder, CEO</h2>
        <p >Simon has a PhD in Immuno-Oncology and is  <br /> expert in Cell Therapy and the development of new <br /> and innovative CAR therapies. Previously he worked <br />at Celyad, developing novel anti-cancer CAR <br /> therapies, and Quell Therapeutics, focusing onbr
         engineering immunosuppressive cells to prevent <br /> autoimmune diseases.</p>
        </div>
        <div className="flex-1 p-4 pt-16"><img src={img2} alt="" />
        <h1 className="text-xl  mt-6 mb-4 ">Simon Bornschein</h1>
        <h2 className="font-semibold m-4 ml-0 capitalize">Co-founder, CEO</h2>
        <p >Simon has a PhD in Immuno-Oncology and is  <br /> expert in Cell Therapy and the development of new <br /> and innovative CAR therapies. Previously he worked <br />at Celyad, developing novel anti-cancer CAR <br /> therapies, and Quell Therapeutics, focusing onbr
         </p>
        </div>
        <div className="flex-1 p-4 "><img src={img3} alt="" />

        <h1 className="text-xl  mt-6 mb-4 ">Yulia Lampi</h1>
        <h2 className="font-semibold m-4 ml-0 capitalize">Co-Founder, CSO</h2>
        <p >Simon has a PhD in Immuno-Oncology and is  <br /> expert in Cell Therapy and the development of new <br /> and innovative CAR therapies. Previously he worked <br />at Celyad, developing novel anti-cancer CAR <br /> therapies, and Quell Therapeutics, focusing onbr
         engineering immunosuppressive cells to prevent <br /> autoimmune diseases.</p>
        </div>
        
      </div>
        
      </div>
      </div>
    )
  }
  
  export default BioTeamComponent
  