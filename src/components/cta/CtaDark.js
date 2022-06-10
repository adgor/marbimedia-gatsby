import React from "react";
import { CtaItem } from "./CtaItem";

export const CtaDark = () => {
  return (
    <CtaItem
      btnLink="#contact"
      btnStyle="bg-brand-charcoal text-brand-cultured"
      btnText="contact us"
      bgStyle="bg-brand-gunmetal"
      titleStyle="text-brand-cultured sm:text-5xl font-bold"
      descStyle="text-brand-text text-lg max-w-xl"
      ctaTitleFirst="Let’s bring your business"
      ctaTitleSecond="noticable online"
      ctaDesc="We create advanced websites. Effective, attractive & simply unique." 
    />
  );
};

