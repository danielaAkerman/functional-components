import React from "react";
import { LoginForm } from "./LoginForm";
import { ThankYou } from "./ThankYou";

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  whenLogin(userData) {
    console.log(userData);
    this.setState({ loggedIn: true });
  }
  render() {
    const showForm = !this.state.loggedIn;
    return showForm ? (
      <LoginForm onLogin={(val) => this.whenLogin(val)} />
    ) : (
      <ThankYou />
    );
  }
}
