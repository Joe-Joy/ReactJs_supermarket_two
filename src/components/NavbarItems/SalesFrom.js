import React, { Component } from "react";
import axios from "axios";

class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variety_code: "",
      items_name: "",
      variety_name: "",
      total_kg: "",
      per_kg_amt: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:4000/item_sales/salesOrder", this.state)

      .then((response) => {
        // console.log(response);
        console.log("the sales details inserted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { items_code, variety_code, items_name, variety_name, items_kg } =
      this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h2 style={{ textAlign: "center" }}>Sales Details</h2>
          <div>
            <label>Items Code:</label>
            <br />
            <input
              type="text"
              name="items_code"
              value={items_code}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Variety Code:</label>
            <br />
            <input
              type="text"
              name="variety_code"
              value={variety_code}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Items Name:</label>
            <br />
            <input
              type="text"
              name="items_name"
              value={items_name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Variety Name:</label>
            <br />
            <input
              type="text"
              name="variety_name"
              value={variety_name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Items kg:</label>
            <br />
            <input
              type="text"
              name="total_kg"
              value={items_kg}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PurchaseForm;
