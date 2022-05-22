import React, {Component} from 'react';

const DataContext = React.createContext()
class ContextA extends Component {
    state = {data: '来自组件A的值'}
    render() {
        return (
            <div style={{width: '100%', backgroundColor: 'red', padding: '8px'}}>
                <p>A组件</p>
                <p>从state中取得值：{this.state.data}</p>
                <DataContext.Provider value={this.state.data}>
                    <ContextB data={this.state.data}/>
                </DataContext.Provider>
            </div>
        );
    }
}
class ContextB extends Component{

    render() {
        return (
            <div style={{width: '100%', backgroundColor: 'blue', padding: '8px'}}>
                <p>B组件，可以直接使用props传值,如果子组件下还有子组件，可以使用context</p>
                <p>props接收的：{this.props.data}</p>
              <ContextC/>
            </div>
        );
    }
}
class ContextC extends Component{
    // 必须声明接收context后才能使用
    static contextType = DataContext
    render() {
        return (
            <div style={{width: '100%', backgroundColor: 'green', padding: '8px'}}>
                <p>C组件</p>
                <p>声明contextType后接收的:{this.context}</p>
                <ContextD/>
            </div>
        );
    }
}
function ContextD() {
    return (
        <DataContext.Consumer>
            {
                value => {
                    return (
                        <div style={{width: '100%', backgroundColor: 'pink', padding: '8px'}}>
                            <p>D组件</p>
                            <p>函数式组件获取context:{value}</p>
                        </div>
                    )
                }
            }
        </DataContext.Consumer>
    );
}
export default ContextA;
