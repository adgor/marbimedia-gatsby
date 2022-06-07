import React from "react";

export const ContactSection = () => {
  return (<div className="overflow-hidden bg-brand-gunmetal">
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center border-t-[0.5px] border-brand-text py-16 lg:py-20 justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The quick, brown fox <br className="hidden md:block" />
              jumps over a{' '}
              <span className="text-teal-accent-400">lazy dog</span> 
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12 text-brand-text">
            <div className="relative">
              <div className="relative">
                <form>

                  <div className="relative mb-1 sm:mb-8">
                    <input
                      placeholder="First & Last Name"
                      required
                      type="text"
                      className="peer font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id="name"
                      name="name"
                    />
                    <label
                      htmlFor="name"
                      className="transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm"
                    >
                      First & Last Name
                    </label>
                  </div>

                  <div className="relative mb-1 sm:mb-8">
                    <input
                      placeholder="Email"
                      required
                      type="text"
                      className="peer font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id="email"
                      name="email"
                    />
                    <label
                      htmlFor="email"
                      className="transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm"
                    >
                    Email
                    </label>
                  </div>

                  <div className="relative mb-1 sm:mb-8">
                    <input
                      placeholder="Phone"
                      required
                      type="text"
                      className="peer font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id="phone"
                      name="phone"
                    />
                    <label
                      htmlFor="phone"
                      className="transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm"
                    >
                    Phone
                    </label>
                  </div>

                  <div className="relative mb-1 sm:mb-8">
                    <select
                      placeholder="Budget"
                      required
                      type="text"
                      className="peer font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id="budget"
                      name="budget"
                    > 
                      <option value='' disabled selected > Budget</option>
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                  </select>
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
