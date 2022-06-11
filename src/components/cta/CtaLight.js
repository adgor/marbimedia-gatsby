import React from "react";
import { CtaItem } from "./CtaItem";

export const CtaLight = () => {
  return (
    <CtaItem
      btnLink="#services"
      btnStyle="bg-brand-culturedDark text-brand-charcoal"
      bgStyle="bg-brand-cultured"
      titleStyle="text-brand-gunmetal sm:text-3xl font-semibold leading-9"
      descStyle="text-brand-charcoal text-base max-w-md"
      ctaTitleFirst="Customers are looking for you online."
      ctaTitleSecond="We’ll help them find you."
      ctaDesc="MarbiMedia is a digital agency built around passion and results.
      We help ambitious business of small and medium sizes to generate
      more revenue and growth."
    />
  );
}; 
