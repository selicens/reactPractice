import React, {Component} from 'react';

class RendProps extends Component {
    render() {
        return (
            <div>
                <p>rendProps,类似于vue的slot插槽</p>
                {/*<ComponentsA>
                    <ComponentsB/>
                </ComponentsA>*/}
                <ComponentsA render={()=><ComponentsB name='zs'/>}/>
            </div>
        );
    }
}
class ComponentsA extends Component{

    render() {
        console.log(this.props.children)
        return (
            <div>
                <p>A组件</p>
                {/*{this.props.children}*/}
                {this.props.render(this.props.name)}
            </div>
        )
    }
}
class ComponentsB extends Component{
    render() {
        return (
            <div>
                <p>B组件</p>
            </div>
        )
    }
}
export default RendProps;
