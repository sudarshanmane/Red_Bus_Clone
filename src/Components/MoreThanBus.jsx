import React from "react";

const MoreThanBus = () => {
  return (
    <div className=" w-10/12 mx-auto grid grid-cols-2 font-normal">
      <div className="mb-10">
        <h1 className="text-4xl tracking-wider">
          <span>NOW,</span>{" "}
          <span className="font-extrabold">GET MORE THAN JUST BUS</span> TICKETS
          WITH REDBUS!
        </h1>
        <div className=" flex">
          <div className="flex w-5/12 border-r-2 border-red-300 mt-7 h-7 items-center">
            <img
              className="ml-2 mr-4"
              src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg"
              alt=""
            />
            <h2 className="font-bold text-red-500"> Cab/Bus Rental</h2>
          </div>
          <div className="flex w-5/12 mt-7 ml-4 h-7 items-center">
            <img
              className="ml-2 mr-4"
              src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg"
              alt=""
            />
            <h2 className="font-medium text-neutral-600">Train Tickets</h2>
          </div>
        </div>
        <div className="mt-4 ml-0">
          <h3>Rent Cabs, Tempo Travellers & Buses with best drivers</h3>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center">
            <img
              className="mr-4"
              src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg"
              alt=""
            />
            <b>Outstation</b>
          </div>
          <div className="flex items-center">
            <img
              className="mr-4"
              src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg"
              alt=""
            />
            <b>Hourly Rental</b>
          </div>
          <div className="flex items-center">
            <img
              className="mr-4"
              src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg"
              alt=""
            />
            <b>Airport Transfers</b>
          </div>
        </div>
        <button
          className="border rounded-md p-4 px-6 mt-10 text-white font-bold"
          style={{ background: "rgb(216, 78, 85)" }}
        >
          Book Cab / Bus Rental
        </button>
      </div>
      <div
        className="flex items-end"
        style={{
          backgroundImage:
            "url('https://s3.rdbuz.com/web/images/homeV2/AboutUs/aboutUsImg.svg')",
        }}
      >
        <img
          className="mb-10"
          src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MoreThanBus;
