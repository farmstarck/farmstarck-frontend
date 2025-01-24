import React, { useState } from "react";
import { Link } from "react-router-dom";

type AccordionItem = {
  title: string;
  content: AccordionContentItem[];
};

type AccordionContentItem = {
  url: string;
  name: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const FooterAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 w-full">
      {items.map((item, index) => (
        <div key={index} className="">
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-3 bg-transparent text-left focus:outline-none"
          >
            <span className="uppercase text-white text-sm">{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-2 fill-white"
              >
                <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
              </svg>
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 text-white font-normal text-sm">
              {Array.isArray(item.content) ? (
                <ul className="space-y-2">
                  {item.content.map((listItem, i) => (
                    <Link key={i} to={listItem.url}>
                      <li className="pb-3">{listItem.name}</li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <div>
        {/* Accordion Header */}
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center p-3 bg-transparent text-left focus:outline-none"
        >
          <span className="uppercase text-white text-sm">
            CONTACT INFORMATION
          </span>
          <span
            className={`transform transition-transform duration-300 ${
              activeIndex === 2 ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-2 fill-white"
            >
              <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
            </svg>
          </span>
        </button>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ${
            activeIndex === 2 ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-4 text-white font-normal text-sm">
            <ul className="space-y-2">
              <li className="pb-3">+234 813 039 5444</li>
              <li className="pb-3">info@farmstarck.com</li>
              <li className="pb-3">
                Lorem ispum do not know the current address of farstack company
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAccordion;
