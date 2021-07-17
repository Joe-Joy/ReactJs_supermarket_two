import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link href="/itemsdetails" className="item">
        Items Details
      </Link>
      <Link href="/purchase" className="item">
        Purchase
      </Link>
      <Link href="/sales" className="item">
        Sales
      </Link>
    </div>
  );
};
export default Header;

