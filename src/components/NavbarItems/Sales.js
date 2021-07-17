import React, { Component } from "react";
import axios from "axios";
import "./ItemsDetails.css";

class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/item_sales/getSalesData")
      .then((response) => {
        this.setState({ items: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { items } = this.state;

    return (
      <div className="items_details">
        <h3 style={{ color: "red" }}>Sales Items Details:-</h3>
        <table>
          <tr>
            <th>Sales_id</th>
            <th>Items_code</th>
            <th>Variety_code</th>
            <th>Items_name</th>
            <th>variety_name</th>
            <th>Items_kg</th>
            <th>Per_kg_amt</th>
            <th>Total_kg_amt</th>
            <th>Balance_kg</th>
          </tr>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.sales_id}</td>
                <td>{item.items_code}</td>
                <td>{item.variety_code}</td>
                <td>{item.items_name}</td>
                <td>{item.variety_name}</td>
                <td>{item.items_kg}</td>
                <td>{item.per_kg_amt}</td>
                <td>{item.total_kg_amt}</td>
                <td>{item.balance_kg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Sales;
