import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import menuIcon from "./menu_icon.png";
import style from "./styles/style.module.scss";

const data = [
  { img: "", name: "Dashboard", url: "/dashboard" },
  { img: "", name: "Document", url: "/document" },
  { img: "", name: "Service availibility", url: "service" },
];

let isMobile = false;

const Slider = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <React.Fragment>
      <div
        className={`${style.menuItemWrapper} ${isMobile ? style.fixWidth : ""}`}
      >
        <div className={style.menuTitleWrapper}>
          <label className={`${isMobile ? style.dNone : ""} ${style.title}`}>
            CIMB
          </label>
          <div
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          >
            <div className={style.menuIcon}></div>
            <div className={style.menuIcon}></div>
            <div className={style.menuIcon}></div>
          </div>
        </div>
        <div className={style.separater}></div>
        <ul className={style.menuList}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <li>
                  <a href = {`${item.url}`}>
                    <img src={logo} alt="logo" />
                    <label
                      className={`${style.label} ${
                        isMobile ? style.dNone : ""
                      }`}
                    >
                      {item.name}
                    </label>
                  </a>
                </li>
              );
            })}
        </ul>

        <div className={style.logout}>
          <a href = "/">
            <span>
              <img src={logo} alt="logo" />
              <label
                className={`${style.label} ${isMobile ? style.dNone : ""}`}
              >
                Logout
              </label>
            </span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
