import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import data, { answers } from "../database/data";
import { getServerData } from "../helper/helper";

/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        /** async function fetch backend data */
        (async () => {
            try {
                let question = await data;
                await getServerData('http://localhost:5001/api/reuslt')

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: { question, answers } }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question, answers }))
                } else {
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error);
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error);
    }
}