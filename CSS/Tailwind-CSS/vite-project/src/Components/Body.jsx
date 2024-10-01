import React from "react";
import { FaCheck } from "react-icons/fa";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex item-center justify-center lg:flex-1 lg:order-2">
        <img src="src/assets/blue-circle.jpg" alt="1st" className="w-64" />
        <img
          src="src/assets/pink-circle.jpg"
          alt="2nd"
          className="absolute w-60 p-2 top-30 opacity-10 md:h-72"
        />
        <img
          src="src/assets/purple-circle.jpg"
          alt="3rd"
          className="absolute w-56 p-4 top-32 opacity-20 md:h-72"
        />
        <img
          src="src/assets/spongebob.png"
          alt="hero"
          className="absolute -rotate-[10deg] w-32 p-1 top-40 md:h-72"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight md:h-72">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          With Hoster, get your webiste up and running in no less than 5 minutes
          with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            className="rounded-md px-4 py-3 my-2 placeholder:text-gray-400"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <FaCheck className="bg-green-500 rounded-full text-white p-1 m-1" />
          <p>No Spam, ever. Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
