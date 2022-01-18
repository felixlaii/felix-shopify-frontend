import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0,
        updated: false
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         likes: 0,
    //         updated: false
    //     }
    // }

    updateLikes = () => {
        if(!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes + 1,
                    updated: true
                }
            })
        } else {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    updated: false
                }
            })
        }
    }

    render() {
        return (
            <div className="like-button">
            <p className="like-button__icon" onClick={this.updateLikes}>Like</p>
            <p className="like-button__counter">{this.state.likes}</p>
            </div>
        )
    }
}
