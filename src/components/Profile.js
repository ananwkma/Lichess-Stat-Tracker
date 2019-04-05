import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    const { profile } = this.props;
    return <div className="Profile">ID: {profile}</div>;
  }
}

const mapStateToProps = ({ profile }) => {
  return { profile: profile };
};

export default connect(mapStateToProps)(Profile);
