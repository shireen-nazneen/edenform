
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Formcard from './Formcard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form3 = ({ setActiveStep, data, setdata }) => {
    const [state, setState] = useState('')

    const handleActivetStep = () => {
        if (state !== '') {
            setActiveStep(3)
            setdata({
                ...state, ...data
            })
        } else {
            toast.error('Select one option')
        }
    }
    return (
        <div className='d-flex-center'>
            <div className='w-100'>
                <Typography variant='h4' align='center'>How are You planning to use Eden?</Typography>
                <div className='d-flex-center'>
                    <Typography variant='h8' color={'gray'}>We'll streamline your setup experience accordingly.</Typography>
                </div>
                <div className='d-flex'>
                    <Formcard
                        texttitle={'For my self'}
                        textdescription={'Write better.Thinkmore clearly.Stayorganized.'}
                        setState={setState}
                        state={state}
                    />
                    <Formcard
                        texttitle={'with my team'}
                        textdescription={'Wikis,docs,tasks& projects,all in oneplace.'}
                        setState={setState}
                        state={state}
                    />
                </div>
                <Button
                    variant='contained'
                    className='w-100'
                    sx={{ borderRadius: 2 }}
                    onClick={handleActivetStep}
                >Create Workspace</Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Form3
