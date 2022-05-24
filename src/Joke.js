import React, { Component } from "react";
import "./Joke.css";

/** Refactored the app to use class components. */
class Joke extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
  };

  upVote() {
    this.props.vote(this.props.id, +1);
  };

  downVote() {
    this.props.vote(this.props.id, -1);
  }

  toggleLock() {
    this.props.toggleLock(this.props.id);
  }

  render() {
    <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <button onClick={this.toggleLock}>
            <i
              className={`fas ${this.props.locked ? "fa-unlock" : "fa-lock"}`}
            />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
    </div>
  };
};


/** Application is written using hooks and function components. */
// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

export default Joke;
