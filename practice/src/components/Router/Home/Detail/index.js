import React, {Component} from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
               <ul>
                   <li>page:{this.props.name}</li>
               </ul>
            </div>
        );
    }
}

export default Detail;
