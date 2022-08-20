import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

const Formcard = ({ Icon, texttitle, textdescription, setState, state }) => {
    return (
        <div>
            <Card sx={{ minWidth: 200, m: 1, border: 1, borderColor: state === texttitle ? 'primary.main' :'grey.500'}} onClick={() => { setState(texttitle) }} className='border'>
                <CardContent>
                    {Icon}
                    {texttitle === 'For my self' ? <PersonIcon color={state === 'For my self' ? 'primary' : ''} /> :
                        <GroupsIcon color={state === 'with my team' ? 'primary' : ''} />
                    }
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {texttitle}
                    </Typography>
                    <Typography variant="body2">
                        {textdescription}
                        <br />
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Formcard