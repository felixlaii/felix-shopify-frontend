import React, { Component } from 'react'
import axios from 'axios'
import { nasaEndPoint } from "../../utils/nasaAPI";
import SpaceList from '../SpaceList/SpaceList';

export default class SpaceGram extends Component {
    state = {
        nasa: []
    }

    componentDidMount() {
        axios.get(`${nasaEndPoint}`)
            .then((response) => { console.log(response.data)
                this.setState({
                    nasa: response.data
                })
            }).catch((error) => console.log(error))
    }
    render() {
        return (
            <div>
                <SpaceList nasa={this.state.nasa} />
            </div>
        )
    }
}
