import React from "react";
import { receiveDataAction, changeBGColor } from "../actions";
import { connect } from "react-redux";

class Switch extends React.Component {
  state = {
    name: ""
  };

  componentDidMount() {
    const { profile } = this.props;
    if (profile === "DrDrunkenstein") this.setState({ name: "Anan" });
    else this.setState({ name: "Magnus" });
  }

  renderButton = () => {
    return (
      <button onClick={this.changeStats}>
        Show {this.state.name}'s Stats{" "}
      </button>
    );
  };

  changeStats = e => {
    e.preventDefault();
    let name = "";
    if (this.state.name === "Magnus") {
      this.setState({ name: "Anan" });
      name = "Magnus";
    } else if (this.state.name === "Anan") {
      this.setState({ name: "Magnus" });
      name = "Anan";
    }
    this.props.dispatch(receiveDataAction(name));
  };

  changeColor = e => {
    e.preventDefault();
    const { bg } = this.props;
    let color = "red";
    if (bg === "red") color = "white";
    this.props.dispatch(changeBGColor(color));
  };

  render() {
    return (
      <div className="Switch">
        {this.renderButton()}
        <button onClick={this.changeColor}>Change BG Color</button>
      </div>
    );
  }
}

const mapStateToProps = ({ profile, bg }) => {
  return { profile: profile, bg: bg };
};

export default connect(mapStateToProps)(Switch);
