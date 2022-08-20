
import { Button, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Luncheden = () => {
    return (
        <div className='d-flex-center'>
            <div className='w-100'>
                <div className='d-flex-center'>
                    <CheckCircleIcon sx={{
                        fontSize: '100px'
                    }} color='primary' />
                </div>
                <Typography variant='h4' align='center'>Congratulations,Eren!</Typography>
                <div className='d-flex-center'>
                    <Typography variant='h8' color={'gray'}>You have completed onboarding,you can start using the Eden!</Typography>
                </div>
                <div className='m-1'>
                    <Button
                        variant='contained'
                        className='w-100'
                        sx={{ borderRadius: 2 }}
                    >Launch Eden</Button>
                </div>
            </div>
        </div>
    )
}

export default Luncheden
