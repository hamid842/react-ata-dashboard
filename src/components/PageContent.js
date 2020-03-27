import React, { Component } from "react";

import landscape1 from "../assets/images/assets/landscape1.jpg";
import landscape2 from "../assets/images/assets/landscape2.jpg";
import landscape3 from "../assets/images/assets/landscape3.jpg";
import landscape4 from "../assets/images/assets/landscape4.jpg";
import landscape11 from "../assets/images/assets/landscape11.jpg";
import landscape16 from "../assets/images/assets/landscape16.jpg";

export default class PageContent extends Component {
  render() {
    return (
      // <!-- Page Content -->
      <div id="page-wrapper">
        <div className="container-fluid">
          {/* <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-12">
              <h4 className="page-title">ویجت‌ها</h4>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <ol className="breadcrumb">
                <li>
                  <a href="#">داشبورد</a>
                </li>
                <li className="active">ویجت‌ها</li>
              </ol>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="white-box">
                <div className="row row-in">
                  <div className="col-lg-3 col-sm-6 row-in-br">
                    <div className="col-in row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <i className="ti-user"></i>
                        <h5 className="text-muted vb">پرسنل شرکت</h5>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <h3 className="counter text-left m-t-15 text-danger">
                          23
                        </h3>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          >
                            <span className="sr-only">پیشرفت 40% (موفقیت)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 row-in-br  b-l-none">
                    <div className="col-in row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <i className="ti-pencil-alt"></i>
                        <h5 className="text-muted vb">تست 1</h5>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <h3 className="counter text-left m-t-15 text-info">
                          169
                        </h3>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          >
                            <span className="sr-only">پیشرفت 40% (موفقیت)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 row-in-br">
                    <div className="col-in row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <i className="ti-mouse-alt"></i>
                        <h5 className="text-muted vb">تست 2</h5>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <h3 className="counter text-left m-t-15 text-success">
                          431
                        </h3>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          >
                            <span className="sr-only">پیشرفت 40% (موفقیت)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  b-0">
                    <div className="col-in row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <i className="ti-receipt"></i>
                        <h5 className="text-primary vb">تست 3</h5>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <h3 className="counter text-left m-t-15 text-primary">
                          157
                        </h3>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          >
                            <span className="sr-only">پیشرفت 40% (موفقیت)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-wrapper collapse in">
                    <div id="owl-demo" className="owl-carousel owl-theme">
                      <div className="item">
                        <img src={landscape1} alt="Owl" />
                      </div>
                      <div className="item">
                        <img src={landscape2} alt="Owl" />
                      </div>
                      <div className="item">
                        <img src={landscape3} alt="Owl" />
                      </div>
                      <div className="item">
                        <img src={landscape4} alt="Owl" />
                      </div>
                      <div className="item">
                        <img src={landscape11} alt="Owl" />
                      </div>
                      <div className="item">
                        <img src={landscape16} alt="Owl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="white-box fix-height p-0">
                {/* <!-- Nav tabs --> */}
                <ul className="nav icon-tab nav-tabs" role="tablist">
                  <li role="presentation" className="nav-item">
                    <a
                      href="#clock-box"
                      className="nav-link active"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <span className="visible-xs">
                        <i className="ti-home"></i>
                      </span>
                      <span className="hidden-xs">
                        <i className="far fa-clock"></i>
                      </span>
                    </a>
                  </li>
                  <li role="presentation" className="nav-item">
                    <a
                      href="#weather-box"
                      className="nav-link"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <span className="visible-xs">
                        <i className="ti-user"></i>
                      </span>
                      <span className="hidden-xs">
                        <i className="far fa-sun"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className="tab-content b-none">
                  <div
                    role="tabpanel"
                    className="tab-pane fade active show"
                    id="clock-box"
                  >
                    <div id="clock"></div>
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane fade"
                    id="weather-box"
                  >
                    <div className="row weather">
                      <div className="col-md-12 col-12 col-lg-12 col-sm-12 text-center">
                        <i className="wi wi-day-cloudy-high"></i>
                        <br />
                        <br />
                        <b className="text-white"> آفتابی</b>
                      </div>
                      <div className="col-md-12 col-12 col-lg-12 col-sm-12 m-t-20 text-center">
                        <h1>
                          36<sup>°C</sup>
                        </h1>
                        <p className="text-white">ایران - تهران</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
          {/* <!-- .row --> */}
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="white-box fix-height">
                    <h3 className="box-title">اعلانات شرکت</h3>
                    <ul className="feeds">
                      <li>
                        <div className="bg-info bg-icon">
                          <i className="fa fa-bell-o text-white"></i>
                        </div>
                        آخرین مهلت ارسال مدارک پرسنلی
                        <span className="text-muted">1398/04/04</span>
                      </li>
                      <li>
                        <div className="bg-info bg-icon">
                          <i className="fa fa-bell-o text-white"></i>
                        </div>
                        نشست هم اندیشی کارمندان شرکت
                        <span className="text-muted">1398/04/03</span>
                      </li>
                      <li>
                        <div className="bg-info bg-icon">
                          <i className="fa fa-bell-o text-white"></i>
                        </div>
                        واریز سنوات و مطالبات سال 1397
                        <span className="text-muted">1398/04/03</span>
                      </li>
                      <li>
                        <div className="bg-danger bg-icon">
                          <i className="ti-user text-white"></i>
                        </div>
                        نشست هم اندیشی کارمندان شرکت
                        <span className="text-muted">1398/04/03</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12">
                  <div className="white-box fix-height">
                    <h3 className="box-title">مانده مرخصی های من</h3>
                    <div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 m-t-10">
                          <div id="sales1" className="text-center"></div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-12 text-center m-t-10">
                          <h1 className="text-primary">53</h1>
                          <p className="text-muted">فروردین 1397</p>
                          <b>(150-165)</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="news-slide m-b-15">
                <div className="vcarousel slide">
                  {/* <!-- Carousel items --> */}
                  <div className="carousel-inner">
                    <div className="active carousel-item">
                      <div className="overlaybg">
                        <img src="assets/images/news/slide1.jpg" alt="" />
                      </div>
                      <div className="news-content">
                        <span className="label label-info label-rounded">
                          نکات کاربردی واحد IT
                        </span>
                        <h2>آموزش پیشرفته نرم افزار مایکروسافت اوت لووک</h2>
                        <a href="!#">بیشتر بخوانید</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="overlaybg">
                        <img src="assets/images/news/slide1.jpg" alt="" />
                      </div>
                      <div className="news-content">
                        <span className="label label-info label-rounded">
                          نکات کاربردی واحد IT
                        </span>
                        <h2>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه.
                        </h2>
                        <a href="!#">بیشتر بخوانید</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="overlaybg">
                        <img src="assets/images/news/slide1.jpg" alt="" />
                      </div>
                      <div className="news-content">
                        <span className="label label-info label-rounded">
                          نکات کاربردی واحد IT
                        </span>
                        <h2>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه.
                        </h2>
                        <a href="!#">بیشتر بخوانید</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
          {/* <!-- .row --> */}
          <div className="row">
            <div className="col-md-12 col-lg-9">
              <div className="white-box">
                <h3 className="box-title">تجزیه و تحلیل</h3>
                <ul className="list-inline text-center">
                  <li>
                    <div className="col-12">
                      <h5>
                        <i
                          className="fa fa-circle m-l-5"
                          style={{ color: "#00bfc7" }}
                        ></i>
                        آمار یک
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="col-12">
                      <h5>
                        <i
                          className="fa fa-circle m-l-5"
                          style={{ color: "#fdc006" }}
                        ></i>
                        آمار دو
                      </h5>
                    </div>
                  </li>
                </ul>
                <div id="morris-area-chart2" style={{ height: "370px" }}></div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 col-sm-6 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="white-box">
                    <h3 className="box-title">اختلاف</h3>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-6  m-t-20">
                        <h1 className="text-info">2478</h1>
                        <p className="text-muted">فروردین 1397</p>
                        <b>(150-165)</b>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <div id="sales2" className="text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="white-box">
                    <h3 className="box-title">کارکرد پرسنل</h3>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-12  m-t-10 m-b-20 text-center">
                        <h1 className="text-info">4565</h1>
                        <p className="text-muted">اردیبهشت 1397</p>
                        <b>(150-165)</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}

          {/* <!--row --> */}
          {/* <!-- /.row --> */}
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-12">
              <div className="white-box">
                <h3 className="box-title">آمار کل</h3>
                <ul className="list-inline text-left">
                  <li>
                    <div className="col-12">
                      <h5>
                        <i
                          className="fa fa-circle m-l-5"
                          style={{ color: "#00bfc7" }}
                        ></i>
                        یک
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="col-12">
                      <h5>
                        <i
                          className="fa fa-circle m-l-5"
                          style={{ color: "#fdc006" }}
                        ></i>
                        دو
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="col-12">
                      <h5>
                        <i
                          className="fa fa-circle m-l-5"
                          style={{ color: "#9675ce" }}
                        ></i>
                        سه
                      </h5>
                    </div>
                  </li>
                </ul>
                <div id="morris-area-chart" style={{ height: "340px" }}></div>
              </div>
            </div>
          </div>

          {/* <!-- .right-sidebar --> */}
          <div className="right-sidebar">
            <div className="slimscrollleft">
              <div className="rpanel-title">
                پنل سرویس
                <span>
                  <i className="ti-close right-side-toggle"></i>
                </span>
              </div>
              <div className="r-panel-body">
                <ul>
                  <li>
                    <b>اختیارات طرح</b>
                  </li>
                  <li>
                    <div className="checkbox checkbox-info">
                      <input id="checkbox1" type="checkbox" className="fxhdr" />
                      <label htmlFor="checkbox1"> سرصفحه ثابت </label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox checkbox-warning">
                      <input id="checkbox2" type="checkbox" className="fxsdr" />
                      <label htmlFor="checkbox2"> نوار کناری ثابت </label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox checkbox-success">
                      <input
                        id="checkbox4"
                        type="checkbox"
                        className="open-close"
                      />
                      <label htmlFor="checkbox4"> تغییر حالت نوار کناری </label>
                    </div>
                  </li>
                </ul>
                <ul id="themecolors" className="m-t-20">
                  <li>
                    <b>نوار کناری روشن</b>
                  </li>
                  <li>
                    <a
                      href="!#"
                      theme="default"
                      className="default-theme working"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="green" className="green-theme">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="gray" className="yellow-theme">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="blue" className="blue-theme">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="purple" className="purple-theme">
                      5
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="megna" className="megna-theme">
                      6
                    </a>
                  </li>
                  <li>
                    <b>نوار کناری تیره</b>
                  </li>
                  <br />
                  <li>
                    <a
                      href="!#"
                      theme="default-dark"
                      className="default-dark-theme"
                    >
                      7
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      theme="green-dark"
                      className="green-dark-theme"
                    >
                      8
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      theme="gray-dark"
                      className="yellow-dark-theme"
                    >
                      9
                    </a>
                  </li>
                  <li>
                    <a href="!#" theme="blue-dark" className="blue-dark-theme">
                      10
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      theme="purple-dark"
                      className="purple-dark-theme"
                    >
                      11
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      theme="megna-dark"
                      className="megna-dark-theme"
                    >
                      12
                    </a>
                  </li>
                </ul>
                <ul className="m-t-20 chatonline">
                  <li>
                    <b>اختیارات چت</b>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/varun.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        سامان جلیلی
                        <small className="text-success">آنلاین</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/genu.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        احسان خواجه امیری
                        <small className="text-warning">رفته</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/ritesh.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        حمید هیراد
                        <small className="text-danger">مشغول</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/arijit.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        سپهر آریا
                        <small className="text-muted">آفلاین</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/govinda.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        امین رستمی
                        <small className="text-success">آنلاین</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/hritik.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        بهنام بانی<small className="text-success">آنلاین</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/john.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        مازیار فلاحی
                        <small className="text-success">آنلاین</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <img
                        src="assets/images/users/pawandeep.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span>
                        بنیامین بهادری
                        <small className="text-success">آنلاین</small>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="footer text-center"></footer>
          {/* <!-- /.right-sidebar --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    );
  }
}
