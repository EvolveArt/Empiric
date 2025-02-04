import React from "react";
import SectionContainer from "../components/common/SectionContainer";
import Heading from "../components/Heading";
import Hero from "../components/Landing/Hero";
import AssetsSection from "../components/Asset/AssetsSection";
import Testimonial from "../components/Landing/Testimonial";
import { DefaultCTASection } from "../components/CTASection";
import Code from "../components/Code/Code";
import InfoSection from "../components/Info/InfoSection";
import Banner from "../components/Banner";
import LogoCloud from "../components/LogoClouds/LogoCloud";
import Stats from "../components/Stats";
import { protocols } from "../components/Protocol/ProtocolSection";
import LogoGrid from "../components/LogoClouds/LogoGrid";
import { Logo } from "../components/LogoClouds/LogoCloud";
import Advisors from "../components/Landing/Advisors";

const stats = [
  {
    label: "Updates per 24h",
    value: "50k+",
  },
  {
    label: "Data sources",
    value: "12+",
  },
  {
    label: "Data feeds",
    value: "20+",
  },
  {
    label: "Seed round",
    value: "$7M",
  },
];

const dataPublishers: Logo[] = [
  {
    name: "Jane Street",
    src: "/assets/publishers/jane-street.webp",
    href: "https://www.janestreet.com/",
  },
  {
    name: "CMT Digital",
    src: "/assets/publishers/cmtdigital.webp",
    href: "https://cmt.digital/",
  },
  {
    name: "Flow Traders",
    src: "/assets/publishers/flow-traders.webp",
    href: "https://www.flowtraders.com/",
  },
  {
    name: "Gemini",
    src: "/assets/publishers/gemini.svg",
    href: "https://www.gemini.com/",
  },
];

const ecosystemPartners: Logo[] = [
  {
    name: "Consensys",
    src: "/assets/ecosystem/consensys.webp",
    href: "https://consensys.net/",
  },
  {
    name: "Argent",
    src: "/assets/ecosystem/argent.webp",
    href: "https://www.argent.xyz/",
  },
  {
    name: "Equilibrium",
    src: "/assets/ecosystem/equilibrium.webp",
    href: "https://equilibrium.co/",
  },
  {
    name: "Braavos",
    src: "/assets/ecosystem/braavos.webp",
    href: "https://braavos.app/",
  },
];

const IndexPage = () => (
  <div className="w-screen">
    <Banner />
    <SectionContainer className="bg-slate-50" first>
      <Hero />
    </SectionContainer>
    <SectionContainer className="bg-slate-50 !pt-0 !pb-32">
      <LogoGrid
        title="Proprietary data from custom integrations with"
        logos={dataPublishers}
      />
    </SectionContainer>
    <SectionContainer className="!pt-0">
      <AssetsSection />
      <LogoCloud title="Trusted by" logos={protocols} />
    </SectionContainer>
    <SectionContainer className="bg-slate-50">
      <Heading
        title="A few simple lines to integrate"
        subtitle="Try it yourself"
        text="Ready to get going? Head to our documentation using the link below and start using high-quality data in your smart contracts!
        Or, copy the code below to install the Empiric Network SDK and start interacting with our feeds locally."
        href="https://docs.empiric.network/quickstart"
        hrefText="Start using robust data on-chain"
      />
      <Code />
    </SectionContainer>
    <SectionContainer>
      <Testimonial />
      <Stats stats={stats} />
      <Advisors />
    </SectionContainer>
    <SectionContainer className="overflow-hidden bg-slate-50">
      <Heading
        title="Reimagine Oracles"
        subtitle="Why Empiric?"
        text="Built zk-first from the ground up, we power the DeFi ecosystem, from exchanges to stablecoins to money markets."
        href="/features"
        hrefText="Learn more about how Empiric works"
      />
      <InfoSection />
    </SectionContainer>
    <SectionContainer>
      <LogoCloud title="Ecosystem Partners" logos={ecosystemPartners} />
      <DefaultCTASection />
    </SectionContainer>
  </div>
);

export default IndexPage;
