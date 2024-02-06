import React from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: robots, Searchfield: "" };
  }

  onSearchChange = (event) => {
    var input = event.target.value;
    input = input.toLowerCase();
    this.setState({Searchfield: input});
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.Searchfield);
    });

    return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
