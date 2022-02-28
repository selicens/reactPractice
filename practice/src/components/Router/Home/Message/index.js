import React, {Component} from 'react';
import Detail from "../Detail";

class Message extends Component {
    render() {
        /*从props中的location里的search中取参，也可称之为query*/
        const val = this.props.location.search
        const newVal = val.split('&')
        const newValue = newVal.join(',').replace('?', '')
        return (
            <div>
                <h1>message</h1>
                {console.log(this.props)}
                <Detail name={newValue}/>
            </div>
        );
    }
}

export default Message;
