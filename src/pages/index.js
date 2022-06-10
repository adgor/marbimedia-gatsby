import React from "react"
import { Hero } from "../components/hero/Hero";
import { CtaLight } from "../components/cta/CtaLight";
import { ServicesList } from "../components/services/ServicesList";
import { TrustedLogos } from "../components/cta/TrustedLogos";
import { CtaDark } from "../components/cta/CtaDark";
import { ContactSection }  from "../components/contact/ContactSection";

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
    <  ContactSection  />
  </Layout>
)

export default IndexPage
