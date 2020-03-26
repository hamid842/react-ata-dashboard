import React, { Component } from "react";
import userImage from "../assets/images/users/varun.jpg";

export default class TopNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default m-b-0 p-0">
        <div className="navbar-header">
          <a
            className="navbar-toggle hidden-sm hidden-md hidden-lg "
            href="!#"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <i className="ti-menu"></i>
          </a>

          <ul className="nav navbar-top-links navbar-left hidden-xs">
            <li>
              <a
                href="!#"
                className="open-close hidden-xs waves-effect waves-light"
              >
                <i className="icon-arrow-right-circle ti-menu"></i>
              </a>
            </li>
            {/* <li>
              <form role="search" className="app-search hidden-xs">
                <input
                  type="text"
                  placeholder="جستجو ..."
                  className="form-control"
                />
                <a href="">
                  <i className="fa fa-search"></i>
                </a>
              </form>
            </li> */}
            <li className="dropdown">
              <a
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                href="!#"
              >
                {" "}
                <img
                  src={userImage}
                  alt="user-img"
                  width="36"
                  className="img-circle"
                />
                <span className="hidden-xs">مدیر سیستم</span>{" "}
              </a>
              <ul className="dropdown-menu dropdown-user scale-up">
                <li>
                  <a href="!#">
                    <i className="ti-user"></i> پروفایل من
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="ti-email"></i> لیست پیام ها
                  </a>
                </li>
                <li role="separator" className="divider">
                  {" "}
                </li>
                <li>
                  <a href="!#">
                    <i className="ti-settings"></i> تنظیمات حساب
                  </a>
                </li>
                <li role="separator" className="divider">
                  {" "}
                </li>
              </ul>
              {/* <!-- /.dropdown-user --> */}
            </li>
            <li>
              <span id="shamsi-date"></span>
            </li>
          </ul>
          <ul className="nav navbar-top-links navbar-right pull-left">
            {/* <!-- /.dropdown --> */}
            {/* <!-- .Megamenu --> */}
            <li className="mega-dropdown">
              <a
                id="full-icon-btn"
                className="dropdown-toggle waves-effect waves-light"
                data-toggle="dropdown"
                href="!#"
              >
                <span className="hidden-xs">همه سامانه ها</span>{" "}
                <i className="icon-options-vertical"></i>
              </a>
              <ul
                id="full-icon-box"
                className="dropdown-menu mega-dropdown-menu animated bounceInDown"
              >
                <div className="container">
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav customtab2 nav-tabs" role="tablist">
                    <li role="presentation" className="nav-item">
                      <a
                        href="#home6"
                        className="nav-link active"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span className="visible-xs">
                          <i className="ti-home"></i>
                        </span>
                        <span className="hidden-xs"> سامانه های عمومی</span>
                      </a>
                    </li>
                    <li role="presentation" className="nav-item">
                      <a
                        href="#profile6"
                        className="nav-link"
                        aria-controls="profile"
                        role="tab"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span className="visible-xs">
                          <i className="ti-user"></i>
                        </span>{" "}
                        <span className="hidden-xs">سامانه های تخصصی</span>
                      </a>
                    </li>
                    <li role="presentation" className="nav-item">
                      <a
                        href="#messages6"
                        className="nav-link"
                        aria-controls="messages"
                        role="tab"
                        data-toggle="tab"
                        aria-expanded="true"
                      >
                        <span className="visible-xs">
                          <i className="ti-email"></i>
                        </span>{" "}
                        <span className="hidden-xs">نشریات و مجلات</span>
                      </a>
                    </li>
                    <li role="presentation" className="nav-item">
                      <a
                        href="#settings6"
                        className="nav-link"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span className="visible-xs">
                          <i className="ti-settings"></i>
                        </span>{" "}
                        <span className="hidden-xs">اتوماسیون های اداری</span>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade active show"
                      id="home6"
                    >
                      <div className="row m-0">
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-address-book"></i>
                              <span>سامانه حضور غیاب</span>
                              <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-balance-scale"></i>
                              <span>سامانه حقوقی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-bell"></i>
                              <span>سامانه اطلاع رسانی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-book-open"></i>
                              <span>کتابخانه مجازی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-box-open"></i>
                              <span>بایگانی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-users"></i>
                              <span>سامانه اطلاعات پرسنلی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0">
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-building"></i>
                              <span>اتوماسیون های دفتر مرکزی</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-car"></i>
                              <span>سامانه حمل و نقل</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-chart-area"></i>
                              <span>داشبورد گزارشات</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-chalkboard-teacher"></i>
                              <span>سامانه آموزش کارکنان</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-chart-pie"></i>
                              <span>سامانه گزارشات </span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 p-0">
                          <div className="icon-box">
                            <a href="!#" target="_blank">
                              <i className="fas fa-chart-line"></i>
                              <span>گزارشات آماری</span>
                              <p>متن توضیحات این آیتم</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="profile6"
                    ></div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade active in"
                      id="messages6"
                    ></div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="settings6"
                    ></div>
                  </div>
                </div>
              </ul>
            </li>
            {/* <!-- /.Megamenu --> */}
            <li className="right-side-toggle">
              {" "}
              <a className="waves-effect waves-light" href="!#">
                <i className="ti-settings"></i>
              </a>
            </li>{" "}
            {/* <!-- /.dropdown --> */}
          </ul>
        </div>
        {/* <!-- /.navbar-header --> */}
        <div id="top-links" className="row navbar-left hidden-sm hidden-xs">
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-address-book"></i>
                <span> حضور غیاب</span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-book-open"></i>
                <span>کتابخانه مجازی</span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-box-open"></i>
                <span>بایگانی</span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-users"></i>
                <span> اطلاعات پرسنلی</span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-chart-pie"></i>
                <span>سامانه گزارشات </span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-3 col-xs-4 p-0">
            <div className="icon-box">
              <a href="!#" target="_blank">
                <i className="fas fa-chalkboard-teacher"></i>
                <span> آموزش کارکنان</span>
                <p>بررسی گزارشات مربوط به حضور و غیاب پرسنل</p>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /.navbar-top-links -->
			<!-- /.navbar-static-side --> */}
      </nav>
    );
  }
}
