import { FaLinkedin, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import imgl from "../assets/663103d70927eed64a559c3b_footer-bg-left.png";
import imgr from "../assets/663103d70e00109361cdab6f_footer-bg-right.png";

export default function Footer() {
  return (
    <div
      className="w-full min-h-screen  "
      style={{
        backgroundImage: `url(${imgl}), url(${imgr})`,
        backgroundSize: "contain",
        backgroundPosition: "left top, right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-10/12 mx-auto gap-8 mt-16 pb-8 px-12 pt-36 ">
        <div className="px-80 w-fit ">
          <div className="text-xl m-8 pt-0 ">
            <h1 className="m-4 ">
              Things move quickly at Coding Bio – subscribe to <br /> follow
              along
            </h1>
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Email"
                className="text-xl p-3 w-[60%] m-3 mr-0 flex-grow border"
              />
              <button
                className="p-3 pr-8 bg-yellow-200 font-semibold"
                style={{
                  clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex text-xs mt-36">
            <p className="flex-1 mx-4">
              © 2024 Coding Bio. All rights <br /> reserved.
            </p>
            <p className="flex-1 mx-4">
              {" "}
              OX3 0BP OXFORD <br className="border" />
              United Kingdom
            </p>
            <p className="flex-1 flex gap-x-4 items-center justify-center text-2xl ">
              <FaSquareInstagram />
              <FaXTwitter />
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
