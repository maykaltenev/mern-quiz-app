import React from 'react'
import Questions from './Questions'
export default function Quiz() {

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
