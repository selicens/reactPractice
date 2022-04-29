const iniState = [{id: '001', name: 'tom', age: 18}]

export default function personReducer(pre= iniState, action) {
    const {type, data} = action
    switch (type) {
        case 'addPerson':
            return [data, ...pre]
        default:
            return pre
    }

}
