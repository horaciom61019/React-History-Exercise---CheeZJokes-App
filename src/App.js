import React, { Component } from "react";
import JokeList from "./JokeList";

/** Refactored the app to use class components. */
class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  };
};


/** Application is written using hooks and function components. */
// function App() {
//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }

export default App;
