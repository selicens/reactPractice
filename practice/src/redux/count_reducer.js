
/*countReducer(之前的状态，动作对象）*/
export default function countReducer(preState, action) {
    console.log(preState, action)
    // preState === undefined是初始状态
    if (preState === undefined) preState = 0
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}
