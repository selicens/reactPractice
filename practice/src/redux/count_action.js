// 加值的同步action
export const createIncrementAction = data => ({type: 'increment', data})

// 减值的同步action
export const createDecrementAction = data => ({type: 'decrement', data})

// 加值的异步action
export const createIncrementAsyncAction = (data, time) => {
    // 此处的dispatch由store自动传递
    return (dispatch) => {
        setTimeout(() => {
           dispatch(createIncrementAction(data))
        }, time)
    }
}
