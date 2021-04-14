import React from "react";
export default function Header() {
  return (
    <header className="header flex items-center">
      <a href="#" className="header__logo"></a>
      <nav>
        <a href="#">Categories</a>
      </nav>
      <div className="search">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <nav>
        <a href="#">Udemy for Busineess</a>
        <a href="#">Tech on Udemy</a>
      </nav>
      <i className="fa fa-shopping-cart" />
      <div>
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
}
