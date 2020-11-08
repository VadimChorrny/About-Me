import React from 'react'

function Contents(props) {

    return (
        <div className="contents">
            <div className="contents__inner">

                <p className="contents__text_first">{props.job}</p>

                <p className="contents__text_second">I create <span> custom </span> and design sites</p>

                <p className="contents__text_third">{props.description}</p>
            </div>
        </div>
    )
}

export default Contents
