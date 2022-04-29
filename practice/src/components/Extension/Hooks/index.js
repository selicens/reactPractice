import React from "react"
import {Button} from 'antd'
function Hooks() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('react')
    const add = ()=>{
        // setCount(count + 1) // 第一种写法
        setCount(count => count+1)
    }
    const update = ()=>{
        setName('vue')
    }
    return (
        <div>
            <span>当前值为：{count}</span>
            <span>当前名字为：{name}</span>
            <br/>
            <Button onClick={add}>hooks求和</Button>
            <Button onClick={update}>hooks改名</Button>
        </div>
    )
}
export default Hooks
