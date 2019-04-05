import React from "react";
import StatWidget from "./StatWidget";
import { receiveInitialDataAction } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(receiveInitialDataAction());
  }
  render() {
    const { bg } = this.props;
    return (
      <div className="App" style={{ background: bg }}>
        <StatWidget />
      </div>
    );
  }
}

const mapStateToProps = ({ bg: bg }) => {
  return { bg: bg };
};

export default connect(mapStateToProps)(App);
