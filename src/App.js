import React from "react";
import TopNavigation from "./components/TopNavigation";
import RightNavbar from "./components/RightNavbar";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div>
      <RightNavbar />
      <TopNavigation />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
