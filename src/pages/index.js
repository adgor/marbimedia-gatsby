import React from "react"
import { Hero } from "../components/Hero";
import { CtaLight } from "../components/sections/CtaLight";
import { ServicesList } from "../components/ServicesList";
import { TrustedLogos } from "../components/TrustedLogos";
import { CtaDark } from "../components/sections/CtaDark";
// import { ContactSection}  from "../components/ContactSection";

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <CtaLight />
    <ServicesList />
    <TrustedLogos />   
    <CtaDark />
    {/* <ContactSection /> */}
  </Layout>
)

export default IndexPage
