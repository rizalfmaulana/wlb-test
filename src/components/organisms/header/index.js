import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Close, Menu, SearchIcon } from "../../../assets";
import Container from "../../templates/container";

const Header = () => {
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center ">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <img src={Menu} alt="s" />
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12 ">
            <Link to="/">
              <a className="flex items-center md:justify-start justify-center">
                <div className="w-10 h-10 bg-white border border-gray-500 mr-4 rounded flex items-center justify-center shadow-2xl font-bold">B</div>
                Blog
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <img src={SearchIcon} alt="" />
            </button>
          </div>
          <div className={`bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none lg:w-7/12 transition-all ease-in-out duration-300 w-full fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 ${offCanvas ? "left-0" : "-left-full"} `}>
            <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffCanvas(false)}>
              <img src={Close} alt="" />
            </button>
            <ul className="flex lg:items-center lg:space-x-14 flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create-blog" className="hover:underline">
                  New Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
