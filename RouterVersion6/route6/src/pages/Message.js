import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Message(){
    const a = useLocation()
    const {state} = useLocation()
    console.log(a, state)
    return (
        <div>
            <ul>
                <li>{state.id}</li>
                <li>{state.title}</li>
                <li>{state.content}</li>
            </ul>
        </div>
    )
}
