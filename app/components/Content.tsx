"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const bandData = [
  {
    name: "Corduroy Gary",
    date: "1st July 9pm - Main Stage",
    url: "/assets/images/band1.jpg",
  },
  {
    name: "Ken's Showing Off again",
    date: "2nd July 9.30pm - Main Stage",
    url: "/assets/images/band2.jpg",
  },
  {
    name: "Golden Quavers",
    date: "3rd July 9.30pm - Main Stage",
    url: "/assets/images/band3.jpg",
  },
  {
    name: "Sonic Levitation",
    date: "2th July 10pm - Main Stage",
    url: "/assets/images/band4.jpg",
  },
  {
    name: "Collection Point A",
    date: "5th July 10pm - Main Stage",
    url: "/assets/images/band5.jpg",
  },
  {
    name: "Laura Can't Eat Diary",
    date: "6th July 10pm - Main Stage",
    url: "/assets/images/band6.jpg",
  },
  {
    name: "Broken toaster",
    date: "7th July 10.30pm - Main Stage",
    url: "/assets/images/band7.jpg",
  },
];

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? bandData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === bandData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        (scrollContainerRef.current.scrollWidth / bandData.length) *
        activeIndex;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <article className="max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text-zinc-200">
      <h2>Headliners</h2>
      <p>
        Expertize the sonic delight from these made-up artists across 7 days
        that music fans are calling &quot;one of the many gigs that will happen this
        year&quot;
      </p>
      <div className="flex relative">
        <div
          className="text-5xl flex items-center justify-center cursor-pointer p-2 relative -top-8"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </div>
        <div
          className="mt-4 flex w-full gap-4 pb-5 overflow-x-auto"
          ref={scrollContainerRef}
        >
          {bandData.map(({ name, date, url }, index) => (
            <div
              key={name}
              className={`min-w-[80%] md:min-w-[40%] ${
                index === activeIndex ? "opacity-100" : "opacity-50"
              } transition-opacity`}
            >
              <div
                className={
                  "flex-1 h-80 w-full rounded-xl bg-cover bg-center shadow-md shadow-black/20 scroll-smooth"
                }
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              <h5 className="mt-2">{name}</h5>
              <h6>{date}</h6>
            </div>
          ))}
        </div>
        <div
          className="text-5xl flex items-center justify-center cursor-pointer p-2 relative -top-8"
          onClick={handleNext}
        >
          <FaChevronRight />
        </div>
      </div>
    </article>
  );
};

export default Content;
