import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import style from "./styles/style.module.scss";
import { isMobile } from "react-device-detect";




const Slider = (props) => {

  const [isMobileFlag, setIsMobileFlag] = useState(isMobile);
  const {data , isLoggendIn} = props
  useEffect(() => {
    setIsMobileFlag(isMobile)
  }, [isMobile])

  console.log("is mobile flag heree" , isMobileFlag)
  return (
    <React.Fragment>
      <div
        className={`${style.menuItemWrapper} ${isMobileFlag ? style.fixWidth : ""}`}
      >
        <div className={style.menuTitleWrapper}>
          <label className={`${isMobileFlag ? style.dNone : ""} ${style.title}`}>
            CIMB
          </label>
          <div
            onClick={() => {
              setIsMobileFlag(!isMobileFlag);
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
                        isMobileFlag ? style.dNone : ""
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
                className={`${style.label} ${isMobileFlag ? style.dNone : ""}`}
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
