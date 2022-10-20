import React from 'react'
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material'
import {Stack} from '@mui/material';

const SearchBar = () => {
    const [checkinvalue, setcheckinValue] = React.useState<Dayjs | null>(null);
    const [checkoutvalue, setcheckoutValue] = React.useState<Dayjs | null>(null);
  return (
    <div>
      <Stack direction='row' justifyContent='center' 
            sx={{ width:600,
             height:40,
             margin:'auto', 
             backgroundColor:'white',
             padding:2,
             border: "3px solid #dca73a",
             borderRadius:3
             
             }}>
            <TextField id="outlined-search" label="Enter Destination" type="search" 
            size='small'
            className='textfields'
            sx={{width:150}}

            
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-in"
                    value={checkinvalue}
                    onChange={(newValue) => {
                        setcheckinValue(newValue);
                    }}
                    renderInput={(params) => <TextField size='small' sx={{width:150}} className='textfields' {...params} />}
                />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-out"
                    value={checkoutvalue}
                    onChange={(newValue) => {
                    setcheckoutValue(newValue);
                    }}
                    renderInput={(params) => <TextField size='small' sx={{width:150}} className='textfields' {...params} />}
                />
                </LocalizationProvider>
                <Button variant="outlined">Search</Button>
            </Stack>

    </div>
  )
}

export default SearchBar
