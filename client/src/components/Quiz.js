import React, { useEffect } from 'react'
import Questions from './Questions'

/** redux store import */

import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';

export default function Quiz() {
    const state = useSelector(state => state.questions.trace)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(state)
    })
    /* On next Handler*/
    function onNext() {
        /** update the trace value by one using MoveNextAction */
        dispatch(MoveNextQuestion())
    }
    /* On Prev Handler*/
    function onPrev() {
        dispatch(MovePrevQuestion())
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
