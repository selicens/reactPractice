import React, {useState} from 'react'
import {useSearchParams} from 'react-router-dom'

export default function UrlNavigation(){
    //const [content] = useState(["新闻","体育","财经","科技","汽车","军事"])
    const [search, setSearch] = useSearchParams()
    console.log(search)
    const id = search.get('id')
    const content = search.get('content')
    return (
        <ul>
            <li>{id}</li>
            <li>{content}</li>
        </ul>
    )
}
