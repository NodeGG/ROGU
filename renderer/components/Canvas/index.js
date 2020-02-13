import { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <canvas
        className={`${
          (this.props.css !== undefined ? this.props.css : '')}`
        }
      />
    );
  }
}
