import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {error: ''}
    static getDerivedStateFromError(error){
        console.log(error)
        return {error}
    }
    componentDidCatch(error, errorInfo) {
        // 统计错误，只能捕获子组件产生的错误
        console.log(error,errorInfo)
    }

    render() {
        return (
            <div>
               <p>错误边界,出错不会影响到全局</p>
                {this.state.error ? <p>出错了</p> : <ErrorComponent/>}
            </div>
        );
    }
}
function ErrorComponent() {
    // obj = [{name: 'zs}, {name:'ls'}]
    const obj = 'listener'
    return (
        <div>
           <ul>
               {this.obj.map(item =>{
                   return <li>item.name</li>
               })}
           </ul>
        </div>
    )
}

export default ErrorBoundary;
