import React from "react";

const TrendingOfferCard = ({
  logo = "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
  title = "Save up to Rs 250 on bus tickets",
  valid = "Valid till 31 Dec",
  bg = "linear-gradient(71.04deg, rgb(12, 57, 139) -6.92%, rgb(62, 118, 216) 109.43%)",
}) => {
  return (
    <div>
      <div
        className="flex border w-80 h-32 p-2 trf-card rounded-xl"
        style={{
          backgroundImage: bg,
        }}
      >
        <div className="h-18 w-18 self-center rounded-full overflow-hidden ml-3 mr-4">
          <img className="h-18 w-18" src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <span className="bg-slate-400 w-fit p-1 px-3 rounded-r-full rounded-l-full font-semibold text-sm">
            BUS
          </span>
          <b>{title}</b>
          <p className="text-sm">{valid}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingOfferCard;
