import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoClose, IoMenu } from "react-icons/io5";
import LinkButton from "../utilities/Buttons/button";
import Mode from "../utilities/Buttons/mode";

// const NavItem = (props) => (
//   <li>
//     <Link href={`#${props.href}`}>
//       <a className="nav-link hover:text-ijikod-red">{props.text}</a>
//     </Link>
//   </li>
// );

// eslint-disable-next-line react-hooks/rules-of-hooks

function Nav(props) {
  return (
    <nav>
      <div className="h-8 w-20 relative text-xl">
        4eug
        {/* <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.png"}
          alt="ijikod logo"
        /> */}
      </div>
      <Mode />
      <LinkButton />

      <div className="block md:hidden ">
        <div
          className="inline-flex items-center justify-center p-2"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          <span
            className="cursor-pointer"
            onClick={() => props.setSideBar((isOpen) => !isOpen)}
          >
            {!props.sideBar ? <IoMenu size={35} /> : <IoClose size={35} />}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
