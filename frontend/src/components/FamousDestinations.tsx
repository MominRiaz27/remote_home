import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useFetch from '../hooks/useFetch';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import Tilt from 'react-vanilla-tilt';

const Islamabad = require('../images/islamabad.jpg')
const Lahore = require('../images/lahore.jpg')
const Faislabad = require('../images/faislabad.jpg')
const Karachi = require('../images/karachi.jpg')



const FamousDestinations = () => {
    
    
    const { data, loading, error } =  useFetch("/hotels/countByCity?cities=islamabad,lahore,faislabad,karachi")
    //console.log('Famous',data);
    
    return (

        <Box textAlign="center"
            sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            
            {
            loading ? "Loading please wait"
            : <>
            
            <Paper variant="outlined"  sx={{ color:"white",
                margin: 1, flex: '0 0 45%', height: '234px', "&:hover": { transform: 'scale(1.1)', transition: '0.5s ease' },
                border: "1.5px solid #ffc501", backgroundImage: `url(${Islamabad})`, backgroundSize: 'cover'
            }}><h1>Islamabad</h1>
            <h2> {`${data[0]}`}</h2>
            </Paper>
            <Paper variant="outlined" sx={{ color:"white",
                margin: 1, flex: '0 0 45%', height: '234px', "&:hover": { transform: 'scale(1.1)', transition: '0.5s ease' },
                border: "1.5px solid #ffc501", backgroundImage: `url(${Lahore})`, backgroundSize: 'cover'
            }}>
                <h1>Lahore</h1>
            <h2> {`${data[1]}`}</h2>
            </Paper>
            <Paper variant="outlined" sx={{ color:"white",
                margin: 1, flex: '0 0 45%', height: '234px', "&:hover": { transform: 'scale(1.1)', transition: '0.5s ease' },
                border: "1.5px solid #ffc501", backgroundImage: `url(${Faislabad})`, backgroundSize: 'cover'
            }}>
                <h1>Faislabad</h1>
            <h2> {`${data[2]}`}</h2>
            </Paper>
            <Paper variant="outlined" sx={{ color:"white",
                margin: 1, flex: '0 0 45%', height: '234px', "&:hover": { transform: 'scale(1.1)', transition: '0.5s ease' },
                border: "1.5px solid #ffc501", backgroundImage: `url(${Karachi})`, backgroundSize: 'cover'
            }}>
                <h1>Karachi</h1>
            <h2> {`${data[0]}`}</h2>
            </Paper>
            </>}
        </Box>

    )
}

export default FamousDestinations
