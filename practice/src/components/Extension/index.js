import React, {Component} from 'react';
import SetState from "./SetState";
import LazyLoad from "./LazyLoad";
import Hooks from "./Hooks"
import FragmentComponent from "./Fragment";
import ContextA from "./Context";
class Extension extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <LazyLoad/>
                <Hooks/>
                <FragmentComponent/>
                <ContextA/>
            </div>
        );
    }

}

export default Extension;
