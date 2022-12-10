import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url:string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        console.log("inside fetch")
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setError(err as any);
      }
      
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err as any);
    }
    
  };

  return { data, loading, error, reFetch };
};

export default useFetch;

// const useFetch = async (url:string)=>{

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   let apiresponse;
  
//   setLoading(true);
//       try {
//         console.log(' Calling: ',url);
//         apiresponse =await axios.get(url).then((resp)=> {
//           console.log(" inside.THEN>> ",resp.data);
//           return resp.data;
//         });

//         console.log(' Response received ', url);
//         console.log(' SetData ' ,url);
//       } catch (err) {
//         setError(err as any);
//       }
//       setLoading(false);
//     console.log(' After UseEffect ');
 
//   console.log('Returning Data');
//   return { data: apiresponse, loading, error };
// };

// export default useFetch;


