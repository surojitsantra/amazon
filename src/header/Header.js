import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/* amazon logo */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      {/* search box */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* nav options */}
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Hello</span>
          <span className="header__navOptionLineTwo">Sign in</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">& Orders</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>

        <div className="header__navOptionBasket">
          <ShoppingBasketIcon className="header__navOptionBasket" />
          <span className="header__navOptionLineTwo header__navOptionBasketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
