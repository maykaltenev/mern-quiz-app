import React, { useEffect } from 'react'
import Questions from './Questions'

/** redux store import */

import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';

export default function Quiz() {
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(trace)
    })
    /* On next Handler*/
    function onNext() {
        /** update the trace value by one using MoveNextAction */
        if (trace < queue.length) {
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(1))
        }
    }
    /* On Prev Handler*/
    function onPrev() {
        if (trace > 0) dispatch(MovePrevQuestion())
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
