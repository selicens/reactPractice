// 创建store仓库的函数 调用中间件的函数
import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk' // 用于处理异步的中间件

const store = createStore(countReducer, applyMiddleware(thunk))
export default store
