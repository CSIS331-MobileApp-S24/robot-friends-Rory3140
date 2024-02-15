import React from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
//import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: "" };
  }

  onSearchChange = (event) => {
    var input = event.target.value;
    input = input.toLowerCase();
    this.setState({ searchfield: input });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield);
    });
    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <Scroll>
          {robots.length ? (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          ) : (
            <h2 className="tc white">Loading...</h2>
          )}
        </Scroll>
      </div>
    );
  }
}

export default App;
