import React from "react"
import { HeroService } from "../../components/hero/HeroService";
// import { CtaLight } from "../components/cta/CtaLight";
// import { ServicesList } from "../components/services/ServicesList";
// import { TrustedLogos } from "../components/cta/TrustedLogos";
// import { CtaDark } from "../components/cta/CtaDark";

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"

const Web = () => (
  <Layout>
    <SEO title="Design" />


    <HeroService />

    {/* <CtaLight /> */}
    {/* <ServicesList /> */}
    {/* <TrustedLogos />    */}
    {/* <CtaDark /> */}
    {/* <ContactSection /> */}

  </Layout>
)

export default Web
