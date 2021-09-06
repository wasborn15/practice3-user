import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getTest, selectTest } from "../store/testSlice";

function Test(props) {
    const dispatch = useDispatch();
    const test = useSelector(selectTest);

    useEffect(() => {
        console.log("useeffect");
        dispatch(getTest());
    });

    return (
        <>
            {test.map(item => (
                <p>item.title</p>
            ))}
            <Button>
                Button
            </Button>
        </>
    );
}

export default Test;