import { ClockIcon, PhoneIcon } from "@heroicons/react/outline";
import Image from "next/image";

const images = [
  {
    src: "/assets/icons/twitter.png",
    alt: "Twitter",
  },
  {
    src: "/assets/icons/instagram.png",
    alt: "Instagram",
  },
  {
    src: "/assets/icons/linkedin.png",
    alt: "LinkedIn",
  },
  {
    src: "/assets/icons/xing.png",
    alt: "Xing",
  },
];

const quickLinks = [
  {
    key: "ql1",
    text: "About Us",
  },
  {
    key: "ql2",
    text: "Services",
  },
  {
    key: "ql3",
    text: "Package",
  },
  {
    key: "ql4",
    text: "Analytics",
  },
  {
    key: "ql5",
    text: "Security",
  },
];

const usefulLinks = [
  {
    key: "ul1",
    text: "Privacy Policy",
  },
  {
    key: "ul2",
    text: "Terms and Conditions",
  },
  {
    key: "ul3",
    text: "Disclaimer",
  },
  {
    key: "ul4",
    text: "Support",
  },
  {
    key: "ul5",
    text: "FAQ",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row bg-black justify-evenly mx-auto my-auto pt-10 px-4">
        <div className="ml-8 w-1/4 ">
          <div className="px-6 pb-3 lg:pb-5">
            <h2 className="text-left font-bold font-serif text-2xl text-orange-400 md:text-3xl lg:text-5xl">
              RAXTER
            </h2>
          </div>
          <div className="px-6 max-h-44">
            <h2 className="text-justify hidden text-ellipsis overflow-hidden text-white lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              mauris placerat, tristique odio vitae, iaculis nibh. Vivamus
              facilisis diam sed metus convallis tincidunt. Donec malesuada urna
              in justo dapibus, et rutrum est rhoncus.
            </h2>
          </div>
          <div className="mt-2 pb-3 px-4 flex lg:flex-shrink-0 lg:mt-8 justify-evenly">
            {images.map((img) => (
              <div
                key={img.alt}
                className="grid place-items-center h-9 w-9 bg-white rounded-full"
              >
                <Image src={img.src} width="24" height="24" alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-8 w-1/6 pb-4">
          <div className="px-5 pb-3 lg:pb-4">
            <h2 className="text-left font-semibold font-serif italic text-l text-white md:text-xl lg:text-2xl">
              Quick links
            </h2>
          </div>
          <div className="max-h-44 px-6 flex flex-col justify-between">
            {quickLinks.map((link) => (
              <h2 key={link.key} className="text-left py-2 text-l text-white">
                {link.text}
              </h2>
            ))}
          </div>
        </div>
        <div className="ml-8 w-1/6 pb-4">
          <div className="px-5 pb-3 lg:pb-4">
            <h2 className="text-left font-semibold font-serif italic text-l text-white md:text-xl lg:text-2xl">
              Useful links
            </h2>
          </div>
          <div className="max-h-44 px-6 flex flex-col justify-between">
            {usefulLinks.map((link) => (
              <h2 key={link.key} className="text-left py-2 text-l text-white">
                {link.text}
              </h2>
            ))}
          </div>
        </div>
        <div className="ml-8 w-1/4 pb-4-">
          <div className="px-5 pb-3 lg:pb-4">
            <h2 className="text-left font-semibold font-serif italic text-l text-white md:text-xl lg:text-2xl">
              Work Hours
            </h2>
          </div>
          <div className="flex items-center mt-7 px-5">
            <ClockIcon className="h-6 w-6 stroke-white" aria-hidden="true" />
            <h3 className="px-4 text-left py-2 text-lg font-semibold text-white">
              8 AM - 5 PM, Monday - Friday
            </h3>
          </div>
          <div className="max-h-44 px-6 my-4 flex flex-col ">
            <h3 className="text-white">
              Donec pretium ornare ex sit amet fermentum. Ut eget porttitor
              metus. Mauris a velit commodo, maximus ex aliquet.
            </h3>
          </div>
          <div className="px-6 my-6 hidden grid place-items-center lg:block ">
            <button className="h-12 px-6 m-2 inline-flex items-center text-lg rounded-md border border-sky-500 ring-2 ring-blue-500 w-18 text-white hover:bg-orange-400 hover:text-black">
              <PhoneIcon className="h-6 w-6 stroke-white " aria-hidden="true" />
              <span className="pl-2">CALL US TODAY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 bg-black">
        <div className="flex justify-between items-center border-b-2 border-gray-300 text-white"></div>
        <div className="flex bg-black justify-between">
          <h2 className="text-white font-mono">RAXTER & Co. Ltd.</h2>
          <h2 className="text-white font-mono">
            Copyright © 2022. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
