
import React from "react";
import PropTypes from "prop-types"

export const FormItem = ({forText}) => {
  return (

      <div className="relative  sm:mt-6">
                    <input
                      placeholder={forText}
                      required
                      type="text"
                      className="peer  font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id={forText}
                      name={forText}
                    />
                    <label
                      htmlFor={forText}
                      className="transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm"
                    >
{forText} 
                    </label>
                  </div>


  );
};

FormItem.propTypes = {
  forText: PropTypes.string,
}

FormItem.defaultProps = {
  forText: ``,
}
