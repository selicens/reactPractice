import React, {Component} from 'react';
import SetState from "./SetState";
import LazyLoad from "./LazyLoad";
import Hooks from "./Hooks"
import Fragment from "./Fragment";
class Extension extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <LazyLoad/>
                <Hooks/>
                <Fragment/>
            </div>
        );
    }

}

export default Extension;
