import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-[#FAF9F6] border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="navbar container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              className="logo"
              alt="logo"
              width={150}
              height={100}
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto bg-[#FAF9F6]`}
            id="navbar-default"
          >
            <ul
              className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
              style={{ backgroundColor: "#FAF9F6" }}
            >
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                <Link
                  className={
                    router.pathname === "/" ? "active hover:text-[#096785]" : ""
                  }
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent ">
                <Link
                  className={
                    router.pathname === "/portfolio"
                      ? "active hover:text-[#096785]"
                      : ""
                  }
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                <Link
                  className={
                    router.pathname === "/contactus"
                      ? "active hover:text-[#096785]"
                      : ""
                  }
                  href="/contactus"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
