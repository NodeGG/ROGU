import { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className={`${this.props.css !== undefined ? this.props.css : ''}`}>
        <style jsx>{``} </style>
      </div>
    );
  }
}
