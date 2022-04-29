import React, {Component} from 'react';
import Count from "../../containers/Count" // 在Count容器中连接ui组件
import store from "../../redux/store";

class ReactReduxContainer extends Component {
    render() {
        return (
            <div>
                {/*将store传入*/}
                <Count store={store}/>
                {/*也可以不在此处传store，可在首页引入Provider，用Provide包裹App组件，同时引入store并传入*/}
            </div>
        );
    }
}

export default ReactReduxContainer;
