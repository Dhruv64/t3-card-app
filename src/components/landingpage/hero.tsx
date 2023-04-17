import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[599px] text-center text-5xl text-white font-inter">
      <div className="absolute top-[118px] left-[0px] bg-darkslateblue w-[1440px] h-[466px]" />
      <img
        className="absolute top-[0px] left-[150px] w-[1146px] h-[599px]"
        alt=""
        src="/lines.svg"
      />
      {/* <img
        className="absolute h-[8.85%] w-[12.48%] top-[82.22%] right-[34.39%] bottom-[8.93%] left-[53.13%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/googleplay.svg"
      />
      <img
        className="absolute h-[8.85%] w-[12.5%] top-[82.22%] right-[53.61%] bottom-[8.93%] left-[33.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/appstore.svg"
      /> */}
      <div className="absolute top-[369.44px] left-[348px] leading-[150%] font-semibold flex items-center justify-center w-[742px] h-[136.54px]">
        Create and customize stylish digital business cards and share them with
        anyone, near or far.
      </div>
      <div className="absolute bottom-[269.75px] left-[calc(50%_-_216px)] leading-[132%] flex items-center w-[439px] h-[164.17px] text-77xl">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 font-black">Digital</p>
          <p className="m-0 text-45xl font-medium">Business Card</p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
