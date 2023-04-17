import type { NextPage } from "next";
import Footer from "./landingpage/footer";
import Detail7 from "./landingpage/detail7";
import Detail6 from "./landingpage/detail6";
import Detail5 from "./landingpage/detail5";
import Detail4 from "./landingpage/detail4";
import Detail3 from "./landingpage/detail3";
import Detail2 from "./landingpage/detail2";
import Detail1 from "./landingpage/detail1";
import Feature from "./landingpage/feature";
import Hero from "./landingpage/hero";
import Navbar from "./landingpage/navbar";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-darkslateblue w-full h-[6607px] overflow-hidden">
      <Footer />
      <Detail7 />
      <Detail6 />
      <Detail5 />
      <Detail4 />
      <Detail3 />
      <Detail2 />
      <Detail1 />
      <Feature />
      <Hero />
      <Navbar />
    </div>
  );
};

export default LandingPage;