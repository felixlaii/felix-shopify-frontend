import React, { Component } from 'react'
import axios from 'axios'
import { nasaEndPoint } from "../../utils/nasaAPI";
import SpaceList from '../SpaceList/SpaceList';
import SpaceItem from '../SpaceItem/SpaceItem';

export default class SpaceGram extends Component {
    state = {
        nasa: [],
        // likes: 0
    }

    componentDidMount() {
        axios.get(`${nasaEndPoint}`)
            .then((response) => { console.log(response.data)
                this.setState({
                    nasa: response.data
                })
            }).catch((error) => console.log(error))
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Component Updated')
    //     console.log(prevProps) //previous props
    //     console.log(this.props) //current props
    //     console.log(prevState) //previous state
    //     console.log(this.state)
    // }

    // componentWillUnmount() {
    //     console.log('Component Unmounted')
    //     clearInterval(this.liker)
    // }

    // incrementLike = () => {
    //     let newLike = this.state.likes + 1
    //         this.setState({
    //             likes: newLike
    //         }) 
    //     }
    
    render() {
        return (
            <div>
                <SpaceList nasa={this.state.nasa} />
                {/* <button onClick={this.incrementLike}>heart: {this.state.likes}</button> */}
            </div>
        )
    }
}
