import React, {Component} from 'react'
import Hello from './index.module.css'

export default class Index extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={Hello.text}>{this.props.name} react</div>
        )
    }
}
