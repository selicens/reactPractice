import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import UrlNavigation from "../pages/UrlNavigation";
/*hooks 路由表类似于vue的router写法*/
const route = [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news/:id/:title/:content',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            },{
                /*search传参不用占位*/
                path: 'urlNavigation',
                element: <UrlNavigation/>
            },
        ]
    },
    {
        path: '/urlNavigation',
        element: <UrlNavigation/>
    },
    {
        path: '/',
        element: <Navigate to={'/about'}/>
    },
]
export default route
