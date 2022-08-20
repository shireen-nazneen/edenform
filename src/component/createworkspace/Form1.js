import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledInput = styled(TextField)(({ theme }) => ({
    width: '100%',
    borderRadius: theme?.shape?.borderRadius,
    marginTop: '0.5em'
}))
const StyledLabel = styled(FormLabel)(({ theme }) => ({
    fontSize: 'bolde',
    color: theme.palette.common.black
}))
const Form1 = ({ setActiveStep, setdata, data }) => {
    const [state, setState] = useState({})
    const theme = useTheme()
    const handleActivetStep = () => {
        setActiveStep(1)
        setdata({
            ...state, ...data
        })
    }
    return (
        <div className='d-flex-center'>
            <div className='w-100'>
                <Typography variant='h4' align='center'>Welcome! First things first</Typography>
                <div className='d-flex-center'>
                    <Typography variant='h8' color={'gray'}>You can Always Change them later.</Typography>
                </div>
                <form className='m-1' onSubmit={handleActivetStep}>
                    <div className='w-100'>
                        <StyledLabel>Full Name</StyledLabel>
                        <StyledInput
                            id="outlined-size-small"
                            placeholder="Steve Jobs"
                            size="small"
                            color='action'
                            required
                            name='fullname'
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    [e.target.name]: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className='w-100'>
                        <StyledLabel>Display Name</StyledLabel>
                        <StyledInput
                            id="outlined-size-small"
                            placeholder="Steve"
                            size="small"
                            color='action'
                            required
                            name='displayName'
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    [e.target.name]: e.target.value
                                })
                            }}
                        />
                    </div>
                    <br />
                    <Button
                        variant='contained'
                        sx={{ borderRadius: theme?.shape?.borderRadius }}
                        type='submit'
                        className='w-100'>Create Workspace</Button>
                </form>
            </div>
        </div>
    )
}

export default Form1