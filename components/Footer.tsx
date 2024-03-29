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
            {/* map the footerlinks data as lists */}
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((items)=>(
                    // map the array inside of items on links
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
        {/* At end add Terms of use and policy rights */}
        <div className="flex justify-between items-center flex-wrap mt-10
        border-gray-100 sm:px-16 px-6 py-10">
            <p>@2024 carhub all rights reserved</p>
            <div className="footer__copyrights-link">
                <Link href='/'
                className="text-gray-500">Privay Policy</Link>
                <Link href='/'
                className="text-gray-500">Terms of Use</Link>
            </div>
            
        </div>
      
    </footer>
  );
};

export default Footer;
