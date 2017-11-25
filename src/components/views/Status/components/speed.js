import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Label } from "reactstrap";

const SPEEDCHANGE_SUB = gql`
  subscription SpeedChanged {
    speedChange {
      id
      speed
      on
    }
  }
`;

class EngineCoreView extends Component {
  constructor(props) {
    super(props);
    this.setSpeedSubscription = null;
  }
  componentWillReceiveProps(nextProps) {
    if (!this.setSpeedSubscription && !nextProps.data.loading) {
      this.setSpeedSubscription = nextProps.data.subscribeToMore({
        document: SPEEDCHANGE_SUB,
        updateQuery: (previousResult, { subscriptionData }) => {
          previousResult.engines = previousResult.engines.map(engine => {
            if (engine.id === subscriptionData.speedChange.id) {
              engine.speed = subscriptionData.speedChange.speed;
              engine.on = subscriptionData.speedChange.on;
            }
            return engine;
          });
          return previousResult;
        }
      });
    }
  }
  componentWillUnmount() {
    this.setSpeedSubscription && this.setSpeedSubscription();
  }
  render() {
    if (this.props.data.loading || !this.props.data.engines) return null;
    const { engines } = this.props.data;
    if (!engines || engines.length === 0) return null;
    const onEngine = engines.find(e => e.on);
    const speed = !onEngine
      ? "Full Stop"
      : onEngine.speeds[onEngine.speed - 1].text;
    return (
      <div>
        <Label>Speed</Label>
        <div className="status-field">{speed}</div>
      </div>
    );
  }
}

const ENGINE_QUERY = gql`
  query getEngines($simulatorId: ID!) {
    engines(simulatorId: $simulatorId) {
      id
      name
      displayName
      speeds {
        text
        number
      }
      heat
      speed
      on
    }
  }
`;

export default graphql(ENGINE_QUERY, {
  options: ownProps => ({ variables: { simulatorId: ownProps.simulator.id } })
})(EngineCoreView);
