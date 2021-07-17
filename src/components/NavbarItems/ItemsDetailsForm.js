import React, { Component } from "react";
import axios from "axios";
class ItemsDetailsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items_code: "",
      variety_code: "",
      items_name: "",
      variety_name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:4000/item_details/itemDetailsOrder", this.state)

      .then((response) => {
        // console.log(response);
        console.log("the itemdetails inserted")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { items_code, variety_code, items_name, variety_name } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <h2 style={{ textAlign: "center" }}>Items Details</h2>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ItemsDetailsForm;
