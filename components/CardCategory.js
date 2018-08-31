import React, { Component, Fragment } from "react";
import CardCollection from "./CardCollection.js";

class CardCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  render() {
    const listItems = this.props.categoryContent.map(d => (
      <CardCollection name={d.cardCollectionName} />
    ));

    return (
      <Fragment>
        <div>{this.props.categoryName}</div>
        <div>
          <ul class="list-group">{listItems}</ul>
        </div>
      </Fragment>
    );
  }
}
export default CardCategory;
