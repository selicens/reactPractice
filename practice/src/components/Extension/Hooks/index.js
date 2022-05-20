import React from "react"
import ReactDOM from 'react-dom';
import {Button,Input} from 'antd'
function Hooks() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('react')
    // (function, ([])) 第二个参数可不传，相当于生命周期，componentDidMount，componentDidUpdate
    // 第二个参数空[],相当于componentDidMount
    // 第二个参数传入想要监听的如count和name，相当于componentDidMount，componentDidUpdate，只监听传入的参数
    // return返回的函数就是componentWillUnmount
    React.useEffect(()=>{
        console.log('组件进入触发')
        let time = setInterval(()=>{
            setCount(count => count+1)
        }, 1000)
        return ()=>{
            clearInterval(time)
        }
    }, [])
    const myRef = React.useRef()
    const add = ()=>{
        // setCount(count + 1) // 第一种写法
        setCount(count => count+1)
    }
    const update = ()=>{
        setName('vue')
    }
    const unmount = ()=>{
        console.log('组件卸载触发')
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }
    const show = ()=>{
        console.log(myRef.current.state.value)
    }
    return (
        <div>
            <span>当前值为：{count}</span>
            <span>当前名字为：{name}</span>
            <br/>
            <Button onClick={add}>hooks求和</Button>
            <Button onClick={update}>hooks改名</Button>
            <Button onClick={unmount}>卸载组件</Button>
            <Input ref={myRef}></Input>
            <Button onClick={show}>hookRef</Button>
        </div>
    )
}
export default Hooks
