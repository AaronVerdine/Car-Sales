import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../actions/actions";

class AddedFeature extends React.Component {
  state = {
    item: {}
  };

  removeFeature = e => {
    e.preventDefault();
    this.props.removeFeature(this.state.item);
  };

  render() {
    return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button className="button" onClick={this.removeFeature}>
          X
        </button>
        {this.props.feature.name}
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
