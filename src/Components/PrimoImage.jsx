import React from "react";

const PrimoImage = () => {
  let listData = [
    "SRS Travels",
    "Evacay Bus",
    "Kallada Travels",
    "KPN Travels",
    "Orange Travels",
    "Parveen Travels",
    "Rajdhani Express",
    "VRL Travels",
    "Chartered Speed Bus",
    "Bengal Tiger",
    "SRM Travels",
    "Infant Jesus",
    "Patel Travels",
    "JBT Travels",
    "Shatabdi Travels",
    "Eagle Travels",
    "Kanker Roadways",
    "Komitla",
    "Sri Krishna Travels",
    "Humsafar Travels",
    "Mahasagar Travels",
    "Raj Express",
    "Sharma Travels",
    "Shrinath Travels",
  ];

  let countryList = [
    <div className="flex flex-col">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        Colombia
      </span>
    </div>,
    <div className="flex flex-col ">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        India
      </span>
    </div>,
    <div className="flex flex-col ">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        Indonesia
      </span>
    </div>,
    <div className="flex flex-col ">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        Malaysia
      </span>
    </div>,
    <div className="flex flex-col ">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        Peru
      </span>
    </div>,
    <div className="flex flex-col ">
      <img
        src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg"
        alt=""
      />
      <span className="text-bold mx-auto p-2 w-fit rounded-xl hover:bg-neutral-200 text-center">
        Singapore
      </span>
    </div>,
  ];

  return (
    <div className="w-10/12 mx-auto">
      <img
        className="mx-auto"
        src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg"
        alt=""
      />
      <div className="flex gap-10 mt-10 mb-10">
        <div
          className="flex border w-4/12 p-5 rounded-2xl tracking-normal text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(38, 72, 153), rgb(125, 70, 134)) ",
          }}
        >
          <img
            className="pr-3"
            src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg"
            alt=""
          />
          <div>
            <b className="font-bolder text-lg text-white">
              1 of 5 buses qualify
            </b>
            <p>
              Primo’s strict safety qualification ensures a safer travel for you
            </p>
          </div>
        </div>
        <div
          className="flex border w-4/12 p-5 rounded-2xl tracking-normal text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(38, 72, 153), rgb(125, 70, 134)) ",
          }}
        >
          <img
            className="pr-3"
            src="https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg"
            alt=""
          />
          <div>
            <b className="font-bolder text-lg text-white">Preferred by 90%</b>
            <p>
              90% of travellers re-book Primo buses for its punctuality and
              comfort
            </p>
          </div>
        </div>
        <div
          className="flex border w-4/12 p-5 rounded-2xl tracking-normal text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(38, 72, 153), rgb(125, 70, 134)) ",
          }}
        >
          <img
            className="pr-3"
            src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg"
            alt=""
          />
          <div>
            <b className="font-bolder text-lg text-white">
              9 Lac+ monthly travellers
            </b>
            <p>In 2022, 9 Lac+ people traveled with Primo </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mb-6">3500+ Private Bus Operators</h1>
        <div className=" grid grid-cols-5 gap-5">
          {listData.map((element) => {
            return (
              <span className="p-2 w-fit rounded-xl hover:bg-neutral-200">
                {element}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-3xl mt-10 mb-10">GLOBAL PRESENCE</h2>
        <div className=" flex justify-between">
          {countryList.map((element) => {
            return element;
          })}
        </div>
      </div>
      <div className="mt-10 ">
        <h1 className="text-3xl mb-6">BOOK BUS TICKETS ONLINE</h1>
        <p className="tracking-wider">
          redBus is India's largest brand for online bus ticket booking and
          offers an easy-to-use online bus ticket and train ticket booking
          service, With over 36 million satisfied customers, 3500+ bus operators
          to choose from, and plenty of offers on bus ticket booking, redBus
          makes road journeys super convenient for travelers. A leading platform
          for booking bus tickets, redBus has been the leader in online bus
          booking over the past 17 years across thousands of cities and lakhs of
          routes in India. <br /> <br /> Booking a bus ticket online on redBus
          app or website is very simple. You can download the redBus app or
          visit redbus.in and enter your source, destination & travel date to
          check the top-rated bus services available. You can then compare
          prices, ratings & amenities, select your preferred seat, boarding &
          dropping points and make the payment using multiple payment options
          like UPI, debit or credit card, net banking and more. With redBus you
          can be assured of safe & secure payment methods and guaranteed travel
          with the best seat and bus operator of your choice. On...{" "}
          <span className="text-blue-950">Read more</span>
        </p>
      </div>
      <div>
        <h1 className="text-3xl mt-8">Today’s Exclusive redDeals on redBus</h1>
        <p className="mt-2 tracking-wider">
          Don't miss out on these incredible offers, book your tickets now and
          travel with convenience and affordability. Hurry, grab the best deals
          before they're gone!
        </p>
      </div>
    </div>
  );
};

export default PrimoImage;
