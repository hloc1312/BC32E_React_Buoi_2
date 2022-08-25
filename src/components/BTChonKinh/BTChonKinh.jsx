import React, { Component } from "react";
import data from "./dataGlasses.json";
import "./style.css";
export default class BTChonKinh extends Component {
  state = {
    glass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./images/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    return (
      <div className="wrap">
        <div className="position-fixed fixed-top p-4 heading">
          <h1 className="text-white text-center text-uppercase">
            Try glasses app online
          </h1>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6 glasses-left ">
              <div className="glasses">
                <img src={this.state.glass.url} alt={this.state.glass.name} />
              </div>
              <div className="glasses-info">
                <h1 className="text-primary mb-3">{this.state.glass.name}</h1>
                <span className="p-1 d-inline-block bg-danger font-weight-bold price">
                  ${this.state.glass.price}
                </span>
                <span className="text-success ml-2 font-weight-bold stock">
                  Stocking
                </span>
                <p className="mt-3">{this.state.glass.desc}</p>
              </div>
            </div>
            <div className="col-lg-6 glasses-right "></div>
          </div>

          <div className="mt-3 bg-light">
            <div className="row p-5">
              {data.map((val) => {
                return (
                  <div
                    className="col-lg-2"
                    key={val.id}
                    onClick={() => {
                      //   console.log(val);
                      this.setState({
                        glass: val,
                      });
                    }}
                  >
                    <img src={val.url} className="img-fluid" alt={val.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
