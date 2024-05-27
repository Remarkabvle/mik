import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../api";
import { RiSearchLine } from "react-icons/ri";
import "./header.scss";
import logo from "../../assets/logo.svg";
import SearchModel from "./SearchModal.jsx";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!value.trim()) return;
      try {
        const res = await axios.get(`/products/search?q=${value}`);
        setData(res.data.products);
        setShow(true);
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchData();
  }, [value]);

  return (
    <header>
      <nav className="navbar container">
        <div className="navbar__left">
          <NavLink className="navbar__link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="navbar__link" to={"/shop-all"}>
            Shop All
          </NavLink>
          <NavLink className="navbar__link" to={"/blog"}>
            Blog
          </NavLink>
        </div>
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__right">
          <NavLink className="navbar__link" to={"/about"}>
            About
          </NavLink>
          <div>
            <form className="header__form" onSubmit={(e) => e.preventDefault()}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="search"
                placeholder="Search Product"
                onFocus={() => setShow(true)}
                onBlur={() => setTimeout(() => setShow(false), 100)}
              />
              <RiSearchLine className="header__form__icon" />
              {show && value.trim() && <SearchModel data={data} />}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
