import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      //   alert
      Swal.fire({
        title: "Opps!",
        text: "This product is alredy your card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
      });
    } else {
      setCartItems((prvItem) => [...prvItem, product]);
      Swal.fire({
        title: "Added!",
        text: "This product is Added in your card!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
      });

    }
  };
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
