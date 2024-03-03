import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* In First row add the logo and title  */}
        <div className="flex flex-col items-starts gap-6">
          <Image
            src="/logo.svg"
            alt="footer logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub
            <br />
            All rights reserved &copy;
          </p>
        </div>
        {/* In second row  add usefull links to the app/routes and socials*/}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((items)=>(
                    <Link key={items.title}
                    href={items.url}
                    className="text-gray-500"
                    >
                        {items.title}
                    </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
