import React from "react";
import { GiEgyptianBird } from "react-icons/gi";
import { FaPaw } from "react-icons/fa";

const mockupImages = [
  {
    src: "/assets/moc1.jpg",
    alt: "mockup image",
  },
  {
    src: "/assets/moc2.jpg",
    alt: "mockup image",
  },
  {
    src: "/assets/moc3.jpg",
    alt: "mockup image",
  },
  {
    src: "/assets/moc4.jpg",
    alt: "mockup image",
  },
  {
    src: "/assets/moc5.jpg",
    alt: "mockup image",
  },
  {
    src: "/assets/moc6.jpg",
    alt: "mockup image",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pt-30">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8 w-full max-w-5xl">
        <h1 className="text-6xl font-semibold text-[#566B2D] flex items-center justify-center">
          <span>
            <FaPaw size={32} color="#566b2d" />
          </span>
          Welcome to Beyond Wildlife
          <span>
            <GiEgyptianBird size={32} color="#566b2d" />
          </span>
        </h1>
        <h3 className="mt-4 mb-8">
          Track your Beyond Wildlife encounters, <br />
          document your adventures in nature, and <br />
          experience all features in our app!
        </h3>
        <div className="px-6 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600">
          <a href="#mockups">Explore Our App by Clicking Each Page!</a>
        </div>
      </div>

      <div id="mockups" className="mb-8">
        <a className="px-8 py-4 bg-white text-green-700 text-2xl font-semibold rounded-full flex items-center border border-green-200 shadow-md hover:shadow-lg hover:bg-green-50">
          <span className="mr-1">
            <FaPaw color="#566b2d" />
          </span>
          <span className="uppercase">App Wireframes</span>
          <span className="ml-1">
            <GiEgyptianBird color="#566b2d" />
          </span>
        </a>
      </div>

      <div
        id="mockups"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-2xl"
      >
        {mockupImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="h-100 rounded-3xl shadow-md object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
