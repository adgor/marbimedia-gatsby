
import React from "react";
import PropTypes from "prop-types"

export const FormItem = ({
  placeholder,
  id,
  name,
  htmlFor,
  labelText,
}) => {
  return (

      <div className="relative mb-1 sm:mt-6">
                    <input
                      placeholder={placeholder}
                      required
                      type="text"
                      className="peer font-bold placeholder-transparent flex-grow w-full border-b border-brand-text focus:outline-none bg-brand-gunmetal h-12  mb-2  focus:border-brand-culturedDark "
                      id={id}
                      name={name}
                    />
                    <label
                      htmlFor={htmlFor}
                      className="transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 absolute left-0 -top-3.5 text-sm peer-focus:-top-3.5 peer-focus:text-sm"
                    >
{labelText} 
                    </label>
                  </div>


  );
};

FormItem.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
}

FormItem.defaultProps = {
  placeholder: ``,
 id: ``,
  name: ``,
  htmlFor: ``,
  labelText: ``,
}
