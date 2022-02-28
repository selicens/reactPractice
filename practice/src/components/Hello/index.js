import React, {Component} from 'react'
import Hello from './index.module.css'

export default class Index extends Component{
    render() {
        return (
            <div className={Hello.text}>{this.props.name} hello Component</div>
        )
    }
}
