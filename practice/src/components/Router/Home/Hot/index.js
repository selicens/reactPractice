import React, {Component} from 'react';
import Detail from "../Detail";
class Hot extends Component {
    render() {
        return (
            <div>
                <h1>hot</h1>
                {/*从props中的location里的state取参*/}
                <Detail name={this.props.location.state.name}></Detail>
            </div>
        );
    }
}

export default Hot;
