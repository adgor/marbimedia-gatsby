import React from "react";
import Btn from "../Btn";
import PropTypes from "prop-types"

export const CtaItem = ({
  bgStyle,
  ctaTitleFirst,
  ctaTitleSecond,
  ctaDesc,
  titleStyle,
  descStyle,
  btnLink,
}) => {
  return (
    <section className={bgStyle}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex items-center justify-between">
          <div className="space-y-5 ">
            <h2
              className={`${titleStyle} text-2xl`}
            >
              {ctaTitleFirst}
              <br />
                {ctaTitleSecond} 
            </h2>
            <p className={`${descStyle}`}>
              {ctaDesc}
            </p>
          </div>
          <Btn
            link={btnLink}
            btnColorStyle="bg-brand-culturedDark text-brand-charcoal"
            text="see our services"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 duration-700 ease-in-out transform text-brand-jonquil group-hover:translate-y-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Btn>
        </div>
      </div>
    </section>
  );
};

CtaItem.propTypes = {
  bgStyle: PropTypes.string,
  ctaTitleFirst: PropTypes.string,
  ctaTitleSecond: PropTypes.string,
  ctaDesc: PropTypes.string,
  titleStyle: PropTypes.string,
  descStyle: PropTypes.string,
  btnLink: PropTypes.string,

}

CtaItem.defaultProps = {
  bgStyle: ``,
  ctaTitleFirst: ``,
  ctaTitleSecond: ``,
  ctaDesc: ``,
  titleStyle: ``,
  descStyle: ``,
  btnLink: ``,
}
