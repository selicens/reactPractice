import React, {Component} from 'react';
import SetState from "./SetState";
import LazyLoad from "./LazyLoad";
import Hooks from "./Hooks"
import FragmentComponent from "./Fragment";
import ContextA from "./Context";
import PureComponents from "./PureComponent";
import RendProps from "./RendProps";
import ErrorBoundary from "./ErrorBoundary";
class Extension extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <LazyLoad/>
                <Hooks/>
                <FragmentComponent/>
                <ContextA/>
                <PureComponents/>
                <RendProps/>
                <ErrorBoundary/>
            </div>
        );
    }

}

export default Extension;
