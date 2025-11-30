import React from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router";
import Footer from "./component/Footer";
import "./App.css";
import { ThemeProvider } from "./Contaxt/ThemeContext";
import { CartProvider } from "./Contaxt/CartContext";

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className=" min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
