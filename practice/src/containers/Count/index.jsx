import {connect} from 'react-redux' // 用于连接ui组件与redux
import ReactReduxUI from "../../components/ReactRedux/ReactReduxUI"; // UI组件
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 函数的返回值作为状态传给ui组件的props
function mapStateToProps(state) {
    // state：调用a函数时自动调了store.getState()并传入
    return {count: state}
}
// 函数的返回值作为操作状态方法传给ui组件的props
function mapDispatchToProps(dispatch) {
    // dispatch：调用b函数时自动传入
    return {
        increment: (data) =>{
            dispatch(createIncrementAction(data))
        },
        decrement: (data) => {
            dispatch(createDecrementAction(data))
        },
        incrementAsync: (data, time) => {
            dispatch(createIncrementAsyncAction(data, time))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxUI) // 使用connect()()创建并暴露一个容器组件, connect()中必须传入两个值
// 精简版写法
/*
export default connect(
    state => ({count: state}),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(ReactReduxUI)
// 第一个参数函数改成箭头函数，箭头函数只有一个参数可以省略括号，返回值只有一句可以去掉花括号与return，返回值是对象的用括号包裹
// 第二个参数ui组件调用时传了参，所以他是函数形式的key，第二部分是调用了封装的action方法所以是函数形式value，
// 使用这种对象简写形式，react-redux自动调用了dispatch，
*/
