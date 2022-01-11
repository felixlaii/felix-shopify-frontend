import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0
    }

    incrementLike = () => {
        let newLike = this.state.likes + 1
            this.setState({
                likes: newLike
            }) 
        }
    render() {
        return (
            <div>
             <button onClick={this.incrementLike}>heart: {this.state.likes}</button>

            </div>
        )
    }
}
