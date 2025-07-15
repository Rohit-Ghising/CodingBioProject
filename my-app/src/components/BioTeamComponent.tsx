import img1 from "../assets/download (2).jpeg"

import img2 from '../assets/download (1).jpeg'
import img3 from '../assets/download (3).jpeg'
export default function BioTeamComponent() {
  return (
    <>

    <h1 className="text-4xl font-serif flex items-center justify-center">Meet the Coding Bio team</h1>
    <div className="flex flex-row container px-12 mt-12 ">

 

      <div className="px-4">
        <img src={img1} alt="" height={400} width={400}/>
      </div>
      <div className="px-4 mt-12">
        <img src={img2} alt=""  height={400} width={400}/>
        <h1>Simon Bornschein</h1>
        <h2>Co-founder, CEO</h2>
        <p>Simon has a PhD in Immuno-Oncology and is an <br /> expert in Cell Therapy and the development of new <br /> and innovative CAR therapies. Previously he worked <br /> at Celyad, developing novel anti-cancer CAR <br /> therapies, and Quell Therapeutics, focusing on<br /> engineering immunosuppressive cells to prevent<br /> autoimmune diseases.</p>
      </div>
      <div className="px-4">
        <img src={img3} alt="" height={400} width={400} />
      </div>
    </div>
    </>
  )
}
