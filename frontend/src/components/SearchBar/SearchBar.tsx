import React from 'react'
import TextField from '@mui/material/TextField';
//import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material'
import {Stack} from '@mui/material';
import { useState } from 'react';
import "./SearchBar.css"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';

const SearchBar = (props:any) => {
  

    const [checkinvalue, setcheckinValue] = React.useState<Date | null>(new Date());
    const [checkoutvalue, setcheckoutValue] = React.useState<Date | null>(new Date());
    const [destination, setDestinations] = useState("");
    //const [value, setvalue]=useState(props.des || "Enter Text")


    const [options, setOptions]= useState({
      adult :1,
      childern:0,
      room:1
    })
    
    const [openOptions, setOpenOptions] = useState(false);

    const handleOption = (name:string, operation:string) => {
      console.log(" inside increment ", name, operation)
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name as keyof typeof options] + 1 : options[name as keyof typeof options] - 1,
        };
      });
    };

    
    const {dispatch} = useContext(SearchContext);

    const navigate = useNavigate();
    
    const handelSearch = () => {
      dispatch({type:"NEW_SEARCH", payload:{
        destination, 
        checkinvalue,
        checkoutvalue,
        options
      }})
      console.log(destination )
      navigate('/hotels', { state:{destination,checkinvalue, checkoutvalue, options} } );

    }
    console.log("props des is ",props.des)
  return (
    <div>
      <Stack className='top' direction='row' justifyContent='center' 
            sx={{ width:800,
             height:40,
             margin:'auto', 
             backgroundColor:'white',
             padding:2,
             border: "4px solid #ffc501",
             borderRadius:3,
             
             }}>
            
            <TextField id="outlined-search"  label="Enter Destination" type="search" 
            size='small'
            //value={value}
            className='textfields'
            sx={{width:150}}
            onChange={(e)=>{
              console.log(e.target.value)
              setDestinations((e.target.value).toLowerCase())
              console.log('des main ye a ra ha ', destination)
              }}
            
              />
           
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    minDate={new Date()}
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
                    minDate={checkinvalue}
                    label="Check-out"
                    value={checkoutvalue}
                    onChange={(newValue) => {
                    setcheckoutValue(newValue);
                    }}
                    renderInput={(params) => <TextField size='small' sx={{width:150}} className='textfields' {...params} />}
                />
                </LocalizationProvider>

                <div className='people' >
                  <span className='text' onClick={() => setOpenOptions(!openOptions)}>
                    { `${options.adult} Adult ${options.childern} Childern ${options.room} Room`}</span> 
                  {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.childern <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("childern", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.childern}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("childern", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}           
                </div>

                {destination && <Button variant="outlined" sx={{color:"#ffc501", border:"1px solid #ffc501"}} onClick={handelSearch}>Search</Button>}
            </Stack>

    </div>
  )
}

export default SearchBar
