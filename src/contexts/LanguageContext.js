import React from "react";

const Context = React.createContext("english"); // To create context object.

export class LanguageStore extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChage: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
