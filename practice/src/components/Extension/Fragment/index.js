import React, {Fragment} from 'react'

function FragmentComponent() {
    // 因为return只能有一个根节点，页面上会套很多div层级
    return (
        <Fragment>
            <p>Fragment或者<></>空标签在页面上不会生成父标签</p>
            <div>1</div>
            <div>2</div>
        </Fragment>
    )
}
export default FragmentComponent
