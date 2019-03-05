import React, { Component } from "react";
import CarouselInner from "./CarouselInner/CarouselInner";
import CarouselControl from "./CarouselControl/CarouselControl";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 0
    };
    this.handleNext = this.handleNext.bind(this);

    this.handleBack = this.handleBack.bind(this);
  }
  handleNext = () => {
    if (this.state.isShow === this.props.data.length - 1) {
      return this.setState(prevState => ({ isShow: 0 }));
    }
    return this.setState(prevState => ({ isShow: prevState.isShow + 1 }));
  };
  handleBack = () => {
    if (this.state.isShow === 0) {
      return this.setState(prevState => ({
        isShow: this.props.data.length - 1
      }));
    }
    this.setState(prevState => ({ isShow: prevState.isShow - 1 }));
  };
  render() {
    return (
      //   <div
      //     style={{
      //       height: "100vh",
      //       width: "100%",
      //       backgroundImage: `url(${this.props.data[0].content})`
      //     }}
      //   />
      <div className="Carousel">
        <CarouselInner display={this.props.data[this.state.isShow].content} />
        <CarouselControl Clicked={this.handleBack} value="<" />
        <CarouselControl Clicked={this.handleNext} value=">" />
      </div>
    );
  }
}
export default Carousel;
