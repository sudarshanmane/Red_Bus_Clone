import React from "react";
import TrendingOfferCard from "./TrendingOfferCard";

const TrendingOffers = () => {
  return (
    <div className="flex relative top-0 z-10 flex-col">
      <div className="w-11/12 border mx-auto rounded-3xl bg-white">
        <h1
          style={{ color: "rgb(216, 78, 85)" }}
          className="text-4xl font-bolder p-7"
        >
          Trending Offers
        </h1>
        <div className="pl-7 gap-3 flex overflow-y-hidden">
          <TrendingOfferCard></TrendingOfferCard>
          <TrendingOfferCard
            logo="https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png"
            hw="no"
            title="Save up to Rs 300 on AP, TS routesSave up to Rs 300 on AP, TS routes"
            valid="Valid till 31 Dec"
            bg="linear-gradient(71.04deg, rgb(72, 0, 4) -6.92%, rgb(216, 78, 85) 109.43%)"
          ></TrendingOfferCard>
          <TrendingOfferCard
            logo="https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png"
            hw="no"
            title="Save up to Rs 300 on MP, Delhi, Gujarat,"
            valid="Valid till 31 Dec"
            bg="linear-gradient(71.04deg, rgb(72, 0, 4) -6.92%, rgb(216, 78, 85) 109.43%)"
          ></TrendingOfferCard>
          <TrendingOfferCard
            logo="https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png"
            hw="no"
            title="Save up to Rs 300 on MP, Delhi, Gujarat,"
            valid="Valid till 31 Dec"
            bg="linear-gradient(71.04deg, rgb(14, 113, 67) -6.92%, rgb(115, 236, 179) 109.43%)"
          ></TrendingOfferCard>
        </div>
      </div>
      <img
        className="mx-auto mt-12 mb-36"
        src="https://st.redbus.in/Images/99/webreferal.png"
        alt=""
      />
    </div>
  );
};

export default TrendingOffers;
