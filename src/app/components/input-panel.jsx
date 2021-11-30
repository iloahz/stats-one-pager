import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField'
import { updateRawText } from '../store/input-slice'
import './input-panel.css'

export default function InputPanel() {
    const rawText = useSelector((state) => state.input.rawText)
    const dispatch = useDispatch()

    const onTextChange = (event) => {
        const text = event.target.value
        dispatch(updateRawText(text))
    }

    return (<>
        <TextField
            className="numbers"
            label="Numbers"
            multiline
            minRows="32"
            maxRows="32"
            onChange={onTextChange}
        />
    </>)
}
