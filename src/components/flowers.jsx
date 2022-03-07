import React, { Component } from "react";
import flowers from "./data";

class Flowers extends Component {
  state = {};
  render() {
    return (
      <div>
        {unflatten(flowers, 4).map((row, i) => (
          <FlowerRow row={row} key={`row${i}`} />
        ))}
      </div>
    );
  }
}

class FlowerRow extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        {this.props.row.map((flower) => (
          <div className="col-md-3" key={flower.name}>
            <Flower name={flower.name} picture={flower.picture} />
          </div>
        ))}
      </div>
    );
  }
}

class Flower extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column m-3 text-center">
        <img id={this.props.name} src={this.props.picture}></img>
        <label htmlFor={this.props.name}>{this.props.name}</label>
      </div>
    );
  }
}

function unflatten(arr, colCount) {
  let out = [];
  for (let i = 0; i < Math.ceil(arr.length / colCount); i++) {
    let temp = [];
    for (let j = 0; j < colCount; j++) {
      if (i * colCount + j === arr.length) break;
      temp.push(arr[i * colCount + j]);
    }
    out.push(temp);
  }
  return out;
}

export default Flowers;
