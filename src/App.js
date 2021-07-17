import React from "react";
import "./App.css";
import ItemsDetails from "./components/NavbarItems/ItemsDetails";
import Purchase from "./components/NavbarItems/Purchase";
import Sales from "./components/NavbarItems/Sales";
import ItemsDetailsForm from "./components/NavbarItems/ItemsDetailsForm";
import PurchaseForm from "./components/NavbarItems/PurchaseForm";
import SalesForm from "./components/NavbarItems/SalesFrom";
import Route from "./components/NavbarItems/Route";
import Header from "./components/NavbarItems/Header";

function App() {
  return (
    <div>
      <Header />
      <Route path="/itemsdetails">
        <ItemsDetailsForm />
        <ItemsDetails />
      </Route>
      <Route path="/purchase">
        <PurchaseForm />
        <Purchase />
      </Route>
      <Route path="/sales">
        <SalesForm />
        <Sales />
      </Route>
      {/* <MenuItems /> */}
      {/* <ItemsDetails /> */}
      {/* <Purchase /> */}
      {/* <Sales /> */}
    </div>
  );
}

export default App;
