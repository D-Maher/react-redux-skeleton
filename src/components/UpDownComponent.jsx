import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increaseCount,
  decreaseCount,
  changeValue,
} from '../redux';

class UpDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    this.props.changeValue(+event.target.value);
  }

  handleIncrease() {
    this.props.increaseCount(this.props.value);
  }

  handleDecrease() {
    this.props.decreaseCount(this.props.value);
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleValueChange}
        />
        <button onClick={() => this.handleIncrease()}>+</button>
        <button onClick={() => this.handleDecrease()}>-</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count, value }) => ({
  count,
  value,
});

const mapDispatchToProps = dispatch => ({
  increaseCount: number => dispatch(increaseCount(number)),
  decreaseCount: number => dispatch(decreaseCount(number)),
  changeValue: number => dispatch(changeValue(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpDownComponent);
