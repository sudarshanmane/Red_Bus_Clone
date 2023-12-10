import React from "react";
import { CustomerServiceOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <section className="header fixed w-screen z-10 bg-white border">
      <header className="flex justify-around items-center p-3">
        <div className="flex w-8/12 items-center p-2 ">
          <img
            src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
            alt=""
          />
          <div className="text-red-200 ml-8 ">|</div>
          <div className="flex items-center w-5/12 justify-around ml-9">
            <div className=" flex justify-center items-center flex-col p-2 hover:bg-emerald-100 rounded-lg">
              <img
                src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
                alt=""
              />
              <p>Bus Tickets</p>
            </div>
            <div className=" flex justify-center items-center flex-col p-2 hover:bg-emerald-100 rounded-lg">
              <img
                src="https://st.redbus.in/web/images/layout/ryde_vertical.svg"
                alt=""
              />
              <p>Cab Rental</p>
            </div>
            <div className=" flex justify-center items-center flex-col p-2 hover:bg-emerald-100 rounded-lg">
              <img
                src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
                alt=""
              />
              <p>Train Tickets</p>
            </div>
          </div>
        </div>
        <div className="flex w-2/12 justify-around item-center gap-4">
          <div className="flex item-center h-fit w-3/5 p-2 rounded-lg justify-around  hover:bg-emerald-100">
            <CustomerServiceOutlined className="mt-1" />
            Help
          </div>
          <div className="flex item-center h-fit w-3/5 p-2 rounded-lg justify-around  hover:bg-emerald-100">
            <UserOutlined className="mt-1" />
            Account
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
