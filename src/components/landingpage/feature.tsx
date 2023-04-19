import type { NextPage } from "next";

const Feature: NextPage = () => {
  return (
    <div className="absolute top-[599px] left-[121px] w-[1208px] h-[396px] text-center text-5xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-limegreen w-[1208px] h-[220px]" />
      <div className="absolute top-[45px] left-[81px] w-[1045px] h-[307px]">
        <div className="absolute top-[0px] left-[0px] w-[235.68px] h-[306px]">
          <div className="absolute top-[115px] left-[0px] leading-[100%] font-semibold text-lg inline-block w-[235.68px] h-[50px]">
            Easily Create digital business card 
          </div>
          <img
            className="absolute -top-[20px] left-[60px] rounded-11xl w-[115px] h-[115px] object-cover mix-blend-normal"
            alt=""
            src="/idcard-1@2x.png"
          />
        </div>
        <div className="absolute top-[6px] left-[278px] w-[233.94px] h-[301px]">
          <div className="absolute top-[110px] left-[0px] leading-[100%] font-semibold text-lg inline-block w-[233.94px] h-[50px]">
            Share your cards with anyone
          </div>
          <img
            className="absolute -top-[20px] left-[50px] rounded-11xl w-[115px] h-[115px] object-cover"
            alt=""
            src="/lightbolt-1@2x.png"
          />
        </div>
        <div className="absolute top-[5px] left-[554px] w-56 h-[301px]">
          <div className="absolute top-[110px] left-[0px] leading-[100%] font-semibold text-lg inline-block w-56 h-[50px]">
            Manage your contacts easily
          </div>
          <img
            className="absolute -top-[20px] left-[0px] rounded-11xl w-56 h-[123px] object-cover"
            alt=""
            src="/groupchat-1@2x.png"
          />
        </div>
        <div className="absolute top-[5px] left-[820px] w-[225px] h-[302px]">
          <div className="absolute top-[110px] left-[0px] leading-[100%] font-semibold text-lg inline-block w-[225px] h-[50px]">
            Turn paper cards into digital cards
          </div>
          <img
            className="absolute -top-[20px] left-[60px] rounded-11xl w-[115px] h-[115px] object-cover"
            alt=""
            src="/documentation-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
