import React from "react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = (
    <button onClick={() => setViewCart(!viewCart)}>
      View {viewCart ? "Products" : "Cart"}
    </button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};

export default Nav;
