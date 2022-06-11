import React from "react";
import {Link} from "gatsby";

export default function Button({ link, text, btnColorStyle, children }) {
  return (
    <Link to={link}        className={`inline-flex items-center px-8 py-4 text-xs font-bold leading-4 uppercase transition-colors rounded-lg group  ${ btnColorStyle || "bg-brand-purple text-brand-culturedDark"}`}
      >
        {text || "learn more"}

        <span className="flex items-center ml-2 ">
          {children || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 duration-700 ease-in-out transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      
    </Link>
  );
}
