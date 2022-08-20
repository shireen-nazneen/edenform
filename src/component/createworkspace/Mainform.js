import styled from '@emotion/styled';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import logo from '../../images/logo.png'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Luncheden from './Luncheden';
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "50vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));
const steps = [1, 2, 3, 4];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setdata] = React.useState({})

  const Logo = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
  }))
  return (
    <>
      <ContentStyle>
        <Logo>
          <img src={logo} alt='logo' />
          <Typography variant='h3'>Eden</Typography>
        </Logo>
        <div>
          <Box sx={{ width: '100%', m: 1 }}>
            <Stepper
              size='large'
              activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step sx={{
                    width: 2000
                  }}
                    key={label} {...stepProps} >
                    <StepLabel
                      sx={{ fontSize: 10, }
                      }
                      {...labelProps} size='large' >{''}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </div>

        <Box className='d-flex-center'>
          {
            activeStep === 0 && <Form1 setActiveStep={setActiveStep} setdata={setdata} data={data} />
          }
          {

            activeStep === 1 && <Form2 setActiveStep={setActiveStep} setdata={setdata} data={data} />
          }
          {

            activeStep === 2 && <Form3 setActiveStep={setActiveStep} setdata={setdata} data={data} />
          }
          {

            activeStep === 3 && <Luncheden />
          }
        </Box>
      </ContentStyle>
    </>

  );
}
