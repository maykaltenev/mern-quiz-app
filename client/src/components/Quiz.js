import React, { useEffect } from 'react'
import Questions from './Questions'

/** redux store import */

import { useSelector } from 'react-redux'
export default function Quiz() {
    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state)
    })
    /* On next Handler*/
    function onNext() {
        console.log("On next")
    }

    /* On Prev Handler*/
    function onPrev() {
        console.log("On prev")
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <Questions />
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
