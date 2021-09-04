import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getTest, selectTest } from "../store/testSlice";

function Test(props) {
    const dispatch = useDispatch();
    const test = useSelector(selectTest);

    return (
        <>
            <Button>
                Button
            </Button>
        </>
    );
}

export default Test;