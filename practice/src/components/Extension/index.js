import React, {Component} from 'react';
import SetState from "./SetState";
import LazyLoad from "./LazyLoad";
import Hooks from "./Hooks"
class Extension extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <LazyLoad/>
                <Hooks/>
            </div>
        );
    }

}

export default Extension;
