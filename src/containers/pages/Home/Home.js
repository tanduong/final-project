import React, { Component } from "react";
import bg1 from "../../../assets/img/bg1.jpg";
import bg2 from "../../../assets/img/bg2.jpg";
import bg3 from "../../../assets/img/bg3.jpeg";
import Carousel from "../../../components/Carousel/Carousel";
class Home extends Component {
  state = {
    carousel: [
      { title: "c1", content: bg1 },
      { title: "c2", content: bg2 },
      { title: "c3", content: bg3 }
    ]
  };
  render() {
    return <Carousel data={this.state.carousel} />;
  }
}
export default Home;
