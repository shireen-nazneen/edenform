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
const Form2 = ({ setActiveStep, setdata, data }) => {
    const [state, setState] = useState({})
    const theme = useTheme()

    const handleActivetStep = () => {
        setActiveStep(2)
        setdata({
            ...state, ...data
        })
    }
    return (
        <div className='d-flex-center'>
            <div className='w-100'>
                <Typography variant='h4' align='center'>Let's! set up a home for all your work</Typography>
                <div className='d-flex-center'>
                    <Typography variant='h8' color={'gray'}>You can always wreate another workspace them later.</Typography>
                </div>
                <form className='m-1' onSubmit={handleActivetStep}>
                    <div className='w-100'>
                        <StyledLabel>Workspace Name</StyledLabel>
                        <StyledInput
                            id="outlined-size-small"
                            placeholder="Eden"
                            size="small"
                            color='action'
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    [e.target.name]: e.target.value
                                })
                            }}
                            required />
                    </div>
                    <div className='w-100'>
                        <StyledLabel>Workspace Url <span className='action'>(optional)</span></StyledLabel>
                        <div className='d-flex'>
                            <Button
                                disabled
                                variant='contained'
                                sx={{ marginTop: 1 }}
                            >www.eden.com</Button>
                            <StyledInput
                                id="outlined-size-small"
                                placeholder="Example"
                                sx={{ borderRadius: 2, }}
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        [e.target.name]: e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{ borderRadius: theme?.shape?.borderRadius }}
                        className='w-100'>Create Workspace</Button>
                </form>
            </div>
        </div>
    )
}

export default Form2