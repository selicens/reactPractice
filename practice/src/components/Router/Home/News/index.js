import React, {Component} from 'react';
import Detail from "../Detail";

class News extends Component {
    render() {
        return (
            <div>
               <h1>news</h1>
                {/*从props的match里的params取参*/}
                <Detail name={this.props.match.params.name}/>
            </div>
        );
    }
}

export default News;
