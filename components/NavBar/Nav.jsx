import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

// const NavItem = (props) => (
//   <li>
//     <Link href={`#${props.href}`}>
//       <a className="nav-link hover:text-ijikod-red">{props.text}</a>
//     </Link>
//   </li>
// );

function Nav(props) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="h-8 w-20 relative">
        4eug
        {/* <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.png"}
          alt="ijikod logo"
        /> */}
      </div>

      <button
        className="white hidden md:block"
        onClick={() => props.setContactSideBar(true)}
      >
        Let’s build
      </button>

      <div className="block md:hidden ">
        <div
          className="inline-flex items-center justify-center p-2 text-black"
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
