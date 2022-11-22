import React from 'react'
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const FirstScreen = () => {
    const [checkinvalue, setcheckinValue] = React.useState<Dayjs | null>(null);
    const [checkoutvalue, setcheckoutValue] = React.useState<Dayjs | null>(null);
  return (
    <>
      <Typography variant="h2" component="h1" >
                        Book your Stay
                    </Typography>
                    <p>
                    <p>The most memorable rest time starts here</p>
                    <p>We give you a legendary welcome, every time you come back.</p>
                    <p>We give you more of what you want and less of what you don't need.</p>
                    </p>

                    <Typography variant='h6' component='div' >
                       <TextField id="outlined-search" label="Enter Destination" type="search" />
                       <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Check-in"
                            value={checkinvalue}
                            onChange={(newValue) => {
                                setcheckinValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Check-out"
                            value={checkoutvalue}
                            onChange={(newValue) => {
                            setcheckoutValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                        <Button variant="outlined">Search</Button>


                        <Box textAlign="center" 
                        sx={{display: 'flex','& > :not(style)': {width: 290,height: 230,flexDirection: 'column',},}}>
                        <Paper variant="outlined" sx={{
                            border:5, backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg')"
                        }}>lahore</Paper>
                        <Paper variant="outlined" sx={{
                            border:5, backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg')"
                        }}>Karachi</Paper>
                    </Box>
                    </Typography>

    </>
  )
}

export default FirstScreen
