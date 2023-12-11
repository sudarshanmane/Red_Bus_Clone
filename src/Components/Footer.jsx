import React from "react";

const Footer = () => {
  let topRoutes = ["Top Bus Routes", "Top Cities", "Top Operators   "];
  return (
    <div className="bg-neutral-100">
      <div className="w-10/12 mx-auto mt-16">
        {topRoutes.map((element) => {
          return (
            <div className="h-24 flex items-center border-b-2 border-sky-200">
              <span className="font-bold text-xl"> Top Bus Routes</span>
            </div>
          );
        })}
      </div>
      <div className="w-10/12 mx-auto mt-16 grid grid-cols-5 gap-5 mb-6">
        <div>
          <img
            src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
            alt=""
          />
          <p>
            redBus redBus is the world's largest online bus ticket booking
            service trusted by over 25 million happy customers globally. redBus
            offers bus ticket booking through its website, iOS and Android
            mobile apps for all major routes.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <b className="">About redBus</b>
          <span> About us</span> <span>Investor Relations</span>{" "}
          <span> Contact us</span> <span>Mobile version</span>{" "}
          <span>redBus on mobile</span> <span>Sitemap Offers</span>{" "}
          <span>Careers Values</span>
        </div>
        <div className="flex flex-col gap-3">
          <b>Info</b> <span>T&C</span> <span>Privacy policy</span>{" "}
          <span>FAQ Blog Bus</span>
          <span>operator registration</span>
          <span>operator registration</span>
          <span>partner User agreement</span>
        </div>
        <div className="flex flex-col gap-3">
          <b>Global Sites</b> <span>India Singapore </span>
          <span>Malaysia Indonesia</span>
          <span>Peru Colombia </span>
        </div>
        <div className="flex flex-col gap-3">
          <b>Our Partners </b>
          <span>Goibibo</span> <span>Bus Goibibo</span>{" "}
          <span>Hotels Makemytrip</span> <span>Bus Makemytrip Hotels</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
