import React from "react";
import { connect } from "react-redux";

import { buyItem } from "../actions/index";

class AdditionalFeature extends React.Component {
  state = {
    item: []
  };

  buyItem = e => {
    e.preventDefault();
    this.props.buyItem(this.state.item);
  };

  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button className="button" onClick={this.buyItem}>
          Add
        </button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
