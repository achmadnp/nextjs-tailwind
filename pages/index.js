import { Fragment } from "react";
import Popular from "../components/Popular/Popular";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Popular />
      <CTA />
    </Fragment>
  );
}
