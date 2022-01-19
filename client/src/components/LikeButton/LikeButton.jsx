import React, { Component } from "react";
import likesDisabled from "../../assets/icons/likes-disabled.png";
import likesEnabled from "../../assets/icons/likes.png";
import "./likeButton.scss";

export default class LikeButton extends Component {
  state = {
    likes: 0,
    updated: false,
  };

  updateLikes = () => {
    if (!this.state.updated) {
      this.setState((prevState) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  };

  render() {
    return (
      <div className="like-button">
        <div className="like-button__metrics">
          <img
            className="like-button__icon"
            onClick={this.updateLikes}
            src={this.state.likes ? likesEnabled : likesDisabled}
            alt="like icon"
          />

          <p className="like-button__counter">{this.state.likes}</p>
        </div>
      </div>
    );
  }
}
