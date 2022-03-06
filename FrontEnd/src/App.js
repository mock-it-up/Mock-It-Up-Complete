import React from "react";
import Navbar from "./components/navbar";
import MainPage from "./components/mainPage";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Form from "./components/registrationForm";
function App() {
  return (
    <div>
      <MainPage />
      <About />
      <Form />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;