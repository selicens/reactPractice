import React, {useState} from 'react'
import { Navigate, NavLink, Outlet, useNavigate} from 'react-router-dom'
export default function Home() {
    const [count, setCount] = useState(1)
    const target = [
        {id: '1', title: 'news', content: 'react-dom'},
        {id: '2', title: 'message', content: 'react-dom'},
    ]
    const navigate = useNavigate()
    function f(value) {
        console.log('555')
        navigate('message', {
            replace: false,
            state: {
                id: value.id,
                title: value.title,
                content: value.content,
            }
        })
    }
    function next() {
        navigate(1)
    }
    function back() {
        navigate(-1)
    }
    return (
        <div>
            <h3>params传参</h3>
            <div>
                <li >
                    <span>params直接在url中传参</span>
                    <NavLink to={`news/${target[0].id}/${target[0].title}/${target[0].content}`}>
                        news
                    </NavLink>
                </li>
                <li>
                    <span>params通过state传参</span>
                    <NavLink to='message' state={{id: `${target[1].id}`,title: `${target[1].title}`,content: `${target[1].content}`,}}>
                        message
                    </NavLink>
                </li>
            </div>
            <h3>search传参/类似vue中query传参</h3>
            <li>
                <NavLink to={`urlNavigation?id=${target[0].id}&content=${target[0].content}`}>search传参</NavLink>
                <hr/>
                <span>编程式路由导航</span>
                <button onClick={()=>{f(target[0])}}>跳转</button>
                <button onClick={next}>前进</button>
                <button onClick={back}>后退</button>
            </li>
            <Outlet/>
            {count === 2 ? <Navigate to='/about'/> : <p>当前值为{count}</p>}
            <button onClick={()=>setCount(2)}>click</button>
        </div>
    )
}
