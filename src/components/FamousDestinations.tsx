import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Islamabad = require('../images/islamabad.jpg') 
const Lahore = require('../images/lahore.jpg')
const Faislabad = require('../images/faislabad.jpg')
const Karachi = require('../images/karachi.jpg')
//import Tilt from '../types'

//import { Card } from '../react-animated-3d-card';

// import AnimatedCard from '@sl-codeblaster/react-3d-animated-card';

// const styles = {
//   paper: {
//     transition: "transform .2s",
//     '&:hover': {
//       transform: "scale(1.5)",
//     }
//   }
// };

const FamousDestinations = () => {
  return (
    
      <Box textAlign="center" 
        sx={{display: 'flex',width: '100%', flexWrap:'wrap', justifyContent: 'space-between'}}>
          
        <Paper variant="outlined" sx={{ margin:1,flex: '0 0 45%',height:'234px', "&:hover":{ transform: 'scale(1.1)', transition: '0.5s ease'},
            border:5, backgroundImage: `url(${Islamabad})`,backgroundSize:'cover'
        }}>Islamabad
        </Paper>
        <Paper variant="outlined" sx={{ margin:1,flex: '0 0 45%',height:'234px',"&:hover":{ transform: 'scale(1.1)', transition: '0.5s ease'},
            border:5, backgroundImage: `url(${Lahore})`,backgroundSize:'cover'
        }}>Lahore
        </Paper>
        <Paper variant="outlined" sx={{ margin:1,flex: '0 0 45%',height:'234px',"&:hover":{ transform: 'scale(1.1)', transition: '0.5s ease'},
            border:5, backgroundImage: `url(${Faislabad})`,backgroundSize:'cover'
        }}>Faislabad
        </Paper>
        <Paper variant="outlined" sx={{ margin:1,flex: '0 0 45%',height:'234px',"&:hover":{ transform: 'scale(1.1)', transition: '0.5s ease'},
            border:5, backgroundImage: `url(${Karachi})`,backgroundSize:'cover'
        }}>Karachi
        </Paper>
       
    </Box>
    
  )
}

export default FamousDestinations
