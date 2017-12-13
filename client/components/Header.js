import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/current_user";
import mutation from "../mutations/logout";

class Header extends React.Component {
  onLogoutClick() {
    console.log(this.props);
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }
  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) return <div />;

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    if (this.props.loading) return <div>Loading...</div>;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/">Home </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
