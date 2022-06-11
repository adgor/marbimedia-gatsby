import React from "react";
import { FormItem } from "./FormItem"

export const ContactSection = () => {
  return (<div className="overflow-hidden bg-brand-gunmetal">
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col px-20 items-center border-t-[0.5px] border-brand-text py-16 lg:py-20 justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
          <p className="mb-2 text-sm font-semibold leading-5 text-brand-cultured ">
            Let’s Work Together
          </p>
            <h2 className="max-w-lg mb-6 text-brand-cultured font-sans text-3xl font-semibold sm:text-4xl sm:leading-9">
              Don’t be stranger  <br />
               to talk to us?
            </h2> 
            <p className="max-w-md  text-base text-brand-text md:text-lg">
            When you work with DigiAgency , you’re joining a large, happy family that rides the wave of innovation to success. Drop us a line, and we’ll be in touch.
            </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12 text-brand-text">
            <div className="relative">
              <div className="relative">
                <form>

                  <FormItem
                  forText="Name"
                  />
                
                  <FormItem
                  forText="Company"
                  />

                  <div className="relative sm:mt-4">
                    <select
                      required
                      type="text"
                      className=" flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id="interest"
                      name="interest"
                    > 
                      <option value disabled selected>Interest</option>
                      <optgroup label="Jamstack">
                      <option value="Websites">Websites</option>
                      <option value="Web Apps">Web Apps</option>
                      <option value="eCommerce">eCommerce</option>

                    </optgroup>
                    <optgroup label="More">
                      <option value="UX/UI Design">UX/UI Design</option>
                      <option value="Manage Project">Manage Project</option>
                      <option value="Multimedia">Multimedia</option>
                      <option value="Other">Something else</option>
                    </optgroup>
                  </select>
 
                </div>

                  <FormItem
                  forText="Email"
                  />

                  <div className="mt-8  ">

                    <button
                      type="submit"
                      className="             inline-flex items-center px-8 py-4 text-xs font-bold leading-4 uppercase transition-colors rounded-lg group 
                   bg-brand-charcoal text-brand-cultured ">
   Let's do it.
        <span className="flex items-center ml-3 ">

<svg               className=" duration-700 ease-in-out transform  group-hover:translate-x-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29481 0.0630875L0.243895 5.2847C-0.109549 5.48778 -0.0646365 5.97987 0.286855 6.12828L2.36261 6.99919L7.97281 2.05487C8.08021 1.95919 8.23253 2.10565 8.14075 2.21695L3.43661 7.94822V9.52017C3.43661 9.98102 3.99314 10.1626 4.26653 9.8287L5.50651 8.31924L7.93962 9.33857C8.21691 9.45573 8.53325 9.28194 8.58402 8.98317L9.98999 0.547365C10.0564 0.152913 9.63264 -0.132186 9.29481 0.0630875Z" fill="#F2F2F2"/>
</svg>

        </span>      
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
