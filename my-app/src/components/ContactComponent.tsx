import imgl from "../assets/663105dc1ddf34b55239d8fe_footer-shape-top.svg";
import imgm from "../assets/66310785950fe81de78ea7c8_footer-shape-middle.svg";

function ContactComponent() {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto gap-8 mt-16  pb-3">
        <div className="w-fit">
          <img src={imgl} alt="sadfasdf" />
        </div>

        <div className="flex  mt-4">
          <div className="w-[30%]"></div>
          <div className="w-[40%]  ">
            <div className="p-6 pt-0">
              <h1 className="flex items-center justify-center text-3xl font-semibold">
                Contact Coding Bio
              </h1>
              <div className="pt-4 font-semibold  ">
                <form action="">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-4 border my-2 w-full"
                  />{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-4 border my-2 w-full "
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Email"
                    className="p-4 border my-2 w-full "
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Company"
                    className="p-4 border my-2 w-full"
                  />
                  <br />
                  <textarea
                    placeholder="Message"
                    className="p-4 border my-2 h-[300px] w-full"
                  />
                  <button
                    className="p-4 pr-8 bg-yellow-200 font-semibold"
                    style={{
                      clipPath:
                        "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex items-center justify-end size-0">
            <img src={imgm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
