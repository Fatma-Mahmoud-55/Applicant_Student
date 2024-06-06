import * as React from 'react';
import {useEffect} from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import './stepper.css'
const steps = [
    {
        label: 'applicant (student)',
    },
    {
        label: 'Personal Details (student)',
    },
    {
        label: 'Contact Details (student)',
    },
    {
        label: 'Applicant (Guardian)',

    },
    {
        label:'Follow-Applicant (Guardian)' ,
    },
    {
        label:'Last Attended School  (student)' ,
    },
    {
        label: 'Final-step',
    }
];


export default function VerticalLinearStepper(page) {
    const [activeStep, setActiveStep] = React.useState(page.page);
    console.log(page.page)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)

    };
    // const handleReset = () => {
    //     setActiveStep(page);
    // };
    useEffect(()=>{
        if(page.page > 0){
            handleNext()
            // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    },[page])
    return (
        <Box sx={{ maxWidth: 400 }} className='pt-5'>
            <Stepper className='mt-5 m-auto' activeStep={page.page} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {/*{activeStep === steps.length && (*/}
            {/*    <Paper square elevation={0} sx={{ p: 3 }}>*/}
            {/*        <Typography>All steps completed - you&apos;re finished</Typography>*/}
            {/*        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>*/}
            {/*            Reset*/}
            {/*        </Button>*/}
            {/*    </Paper>*/}
            {/*)}*/}
        </Box>
    );
}
