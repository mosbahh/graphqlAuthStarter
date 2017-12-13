import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/current_user";

export default WarrpedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextprops) {
      if (!nextprops.data.loading && !nextprops.data.user) {
        this.props.router.push("/signin");
      }
    }
    render() {
      return <WarrpedComponent {...this.props} />;
    }
  }
  return graphql(query)(RequireAuth);
};
