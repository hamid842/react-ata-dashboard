import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Bootstrap core CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/plugins/bootstrap-extension/css/bootstrap-extension.css";
// Animation CSS
import "./assets/plugins/animate/animate.css";
// Menu CSS
import "./assets/plugins/sidebar-nav/dist/sidebar-nav.min.css";
// Morris CSS
import "./assets/plugins/morrisjs/morris.css";
import "./assets/plugins/css-chart/css-chart.css";
// OWL Carousel CSS
// import "./assets/plugins/owl.carousel/owl.carousel.min.css";
// import "./assets/plugins/owl.carousel/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
// Color CSS
import "./assets/css/colors/default-dark.css";
// Icons
import "./assets/plugins/font-awesome/5.2.0/css/all.min.css";
import "./assets/plugins/linea-icons/css/linea-icons.css";
import "./assets/plugins/material-design-iconic-font/css/material-design-iconic-font.css";
import "./assets/plugins/weather-icons/css/weather-icons.css";
import "./assets/plugins/weather-icons/css/weather-icons.css";
import "./assets/plugins/themify-icons/css/themify-icons.css";
import "./assets/plugins/simple-line-icons/css/simple-line-icons.css";
// Style CSS
import "./assets/css/style.css";
// Custom CSS
import "./assets/css/custom.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
