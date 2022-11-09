import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';


/** redux store import */

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Quiz() {
    const [check, setChecked] = useState(undefined);

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(result)
    })
    /* On next Handler*/
    function onNext() {
        /** update the trace value by one using MoveNextAction */
        if (trace < queue.length) {
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(check))
        }
    }
    /* On Prev Handler*/
    function onPrev() {
        if (trace > 0) dispatch(MovePrevQuestion());
    }
    function onChecked(check) {
        setChecked(check)
    }
    /** finished exam after the last question */

    if (result.length && result.length >= queue.length) {
        return <Navigate to={"/result"} replace={true}></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <Questions onChecked={onChecked} />
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
