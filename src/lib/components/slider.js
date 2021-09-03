import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import style from "./styles/style.module.scss";
import { isDesktop, isMobile } from "react-device-detect";




const Slider = (props) => {

  const [isMobileFlag, setIsMobileFlag] = useState(isMobile);
  const {data , isLoggendIn} = props
  const [isOpenCollapse , setIsOpenCollapse] = useState(!isMobile)
  useEffect(() => {
    setIsMobileFlag(isMobile)
  }, [isMobile])


  console.log("mobile , collapse" , isMobile , isOpenCollapse)


  const toggleCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse)
    isDesktop && props.callBackIsCollapseToggle()
    // setIsMobileFlag(!)
  }

  console.log("is mobile flag heree" , isMobileFlag)
  return (
    <div className = {`${style.mainWrapper} ${isMobile ? ( isOpenCollapse ? style.fullWidth : style.fixWidth) : '' }`}>
      <div
        className={`${style.menuItemWrapper}`}
      >
        <div className={style.menuTitleWrapper}>
          <label className={`${!isOpenCollapse ? style.dNone : ""} ${style.title}`}>
            CIMB
          </label>
          <div
            onClick={() => {
              toggleCollapse();
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
                        !isOpenCollapse ? style.dNone : ""
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
                className={`${style.label} ${!isOpenCollapse ? style.dNone : ""}`}
              >
                Logout
              </label>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
