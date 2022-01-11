import React, { Component } from 'react'
import axios from 'axios'
import { nasaEndPoint } from "../../utils/nasaAPI";

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
                
            </div>
        )
    }
}
