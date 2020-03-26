import React, { Component } from "react";
import eliteadminLogoDark from "../assets/images/eliteadmin-logo-dark.png";
import eliteadminTextDark from "../assets/images/eliteadmin-text-dark.png";

export default class RightNavbar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar " role="navigation">
        <div className="top-left-part hidden-sm hidden-xs">
          <a className="logo" href="!#">
            <b>
              <img src={eliteadminLogoDark} alt="home" />
            </b>
            <span className="hidden-xs">
              <img src={eliteadminTextDark} alt="home" />
            </span>
          </a>
        </div>
        <div className="sidebar-nav navbar-collapse slimscrollsidebar">
          <ul className="nav" id="side-menu">
            <li className="sidebar-search hidden-sm hidden-md hidden-lg hidden-xs">
              {/* <!-- input-group --> */}
              <div className="input-group custom-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو ..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    {" "}
                    <i className="fa fa-search"></i>{" "}
                  </button>
                </span>{" "}
              </div>
              {/* <!-- /input-group --> */}
            </li>
            <li>
              <a href="home.html" className="waves-effect active">
                <i className="fas fa-home"></i>
                <span className="hide-menu">صفحه اصلی</span>
              </a>
            </li>
            <li>
              <a href="!#" className="waves-effect">
                <i className="fas fa-bell"></i>
                <span className="hide-menu">آرشیو اعلانات</span>
              </a>
            </li>
            <li>
              <a href="!#" className="waves-effect">
                <i className="fas fa-calendar-alt"></i>
                <span className="hide-menu">تقویم جلسات</span>
              </a>
            </li>
            <li>
              <a href="!#" className="waves-effect">
                <i className="fas fa-coffee"></i>
                <span className="hide-menu">سامانه ثب مرخصی</span>
              </a>
            </li>
            <li>
              <a href="!#" className="waves-effect">
                <i className="fas fa-chart-pie"></i>
                <span className="hide-menu">داشبورد گزارشات</span>
              </a>
            </li>
            <li>
              {" "}
              <a href="index.html" className="waves-effect">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw fa-fw"></i>{" "}
                <span className="hide-menu">
                  {" "}
                  داشبورد <span className="fa arrow"></span>{" "}
                  <span className="label label-rouded label-custom pull-left">
                    4
                  </span>
                </span>
              </a>
              <ul className="nav nav-second-level">
                <li>
                  {" "}
                  <a href="index.html">دموگرافیک</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="index2.html">ساده</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="index3.html">تحلیلی</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="index4.html">ساده تر</a>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
