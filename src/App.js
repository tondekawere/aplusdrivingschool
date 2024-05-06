import React from "react";
import CustomizedDialogs from "./Components/Dialogs";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Book from "./Components/Book";
import WhyUs from "./Components/WhyUs";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import DrawerAppBar from "./Components/ResponsiveAppBar";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Book />
      <WhyUs/>
      <Team />
      <Testimonials />
      <Contacts />
      <Footer />
      <CustomizedDialogs />
    </div>
  );
}

export default App;
