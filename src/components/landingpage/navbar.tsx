import type { NextPage } from "next";
// import { Link } from "tabler-icons-react";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div className="absolute h-[0.76%] w-[76.11%] top-[0.5%] right-[11.67%] bottom-[98.74%] left-[12.22%] mix-blend-normal text-center text-5xl text-white font-inter">
      <img
        className="absolute h-full w-[4.56%] top-[0%] right-[95.44%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/company-logo.svg"
      />
      <b className="absolute top-[13px] left-[57px] text-9xl leading-[100%]">
        Digital Card
      </b>
      <b className="absolute w-[4.94%] top-[26%] left-[58.03%] leading-[100%] inline-block">
        Blog
      </b>
      <b className="absolute w-[7.73%] top-[26%] left-[47.08%] leading-[100%] inline-block">
        Pricing
      </b>
      <b className="absolute w-[22.82%] top-[26%] left-[22.08%] leading-[100%] inline-block">{`Products & Solutions`}</b>
      <div className="absolute h-[84%] w-[8.12%] top-[8%] right-[18.98%] bottom-[8%] left-[72.9%] text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-mintcream" />
        <Link href='/api/auth/signin'><b className="absolute top-[9px] left-[9px] leading-[100%]">Log in</b></Link>
      </div>
      <div className="absolute h-[84%] w-[16.61%] top-[8%] right-[0%] bottom-[8%] left-[83.39%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-limegreen" />
        <b className="absolute top-[21.43%] left-[5.49%] leading-[100%]">
          Create a Card
        </b>
      </div>
    </div>
  );
};

export default Navbar;