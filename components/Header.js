import React, { useState, useContext } from "react";
import Link from "next/link";
import { navbar } from "../data/data";
import { CreateAccount, DonateButton, LogOut } from "./buttons";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [links] = useState(navbar);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    const navbar = document.querySelector(".navbar");
    const listItems = document.querySelectorAll(".list-item");

    navbar.classList.toggle("open");
    setIsOpen(!isOpen);

    listItems.forEach((item) => {
      item.addEventListener("click", () => navbar.classList.remove("open"));
      setIsOpen(false);
    });
  };

  return (
    <>
      <header
        //  sticky top-0 z-50
        className="p-5 flex items-center sticky top-0 z-50 bg-blue-600 shadow-md justify-between xl:max-w-8xl lg:mx-auto 3xl:px-0"
        id="header"
      >
        <div className="logo ">
          <h2 className="font-bold text-2xl ">
            <Link href="/">
              <a>Ghana Entrepreneurs</a>
            </Link>
          </h2>
        </div>

        <nav className="navbar">
          <ul>
            {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link href={url} className="text-base text-slate-700">
                    <a>{title}</a>
                  </Link>
                </li>
              </React.Fragment>
            ))}

            <li>
              {" "}
              <CreateAccount />
            </li>
            <li>
              <DonateButton />
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen?.isOpen ? (
              <AiOutlineCloseCircle className="text-blue-500 text-2xl" />
            ) : (
              <AiOutlineMenu className="text-blue-500 text-2xl" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
