import React from "react";
import { connect } from "react-redux";

class Stats extends React.Component {
  renderStats = () => {
    const { stats } = this.props;
    return Object.entries(stats).map(res =>
      res[0] !== "correspondence" ? (
        <div key={res[0]}>
          {res[0]}: {res[1].rating}
        </div>
      ) : null
    );
  };

  render() {
    const { stats } = this.props;
    return <div className="Stats">{stats ? this.renderStats() : null}</div>;
  }
}

const mapStateToProps = ({ stats }) => {
  return { stats: stats };
};

export default connect(mapStateToProps)(Stats);
