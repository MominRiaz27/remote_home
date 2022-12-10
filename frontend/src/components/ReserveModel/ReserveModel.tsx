import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/searchContext';
import "./ReserveModel.css"

//ype stateObj= boolean;
type roomNumberObj = {
  number:number,
  unavailableDates:[],
  _id:string
}

const ReserveModel = (props:any) => {


  const {data,loading,error} = useFetch(`/hotels/room/${props.hotelId}`)
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const { checkinvalue, checkoutvalue } = useContext(SearchContext);
  console.log("this is checkin ",checkinvalue);
  console.log("this is checkout ",checkoutvalue);

  console.log("this is data ", data);
  const getDatesInRange = (checkinvalue:string, checkoutvalue:string) => {
    const start = new Date(checkinvalue);
    console.log("this is start date ", start)
    const end = new Date(checkoutvalue);
    console.log("this is end date ", end)

    const date = new Date(start.getTime());
    console.log("this is start time ",((start.getTime())));
    const dates = [];

    while (date <= end) {
      dates.push((date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  console.log(getDatesInRange(checkinvalue, checkoutvalue))
  const allDates = getDatesInRange(checkinvalue, checkoutvalue);
  
    console.log(props.hotelId);
    //props.setOpenModel(true);

    const isAvailable = (roomNumbers:roomNumberObj) => {
      console.log('Unavailable:',roomNumbers.number,roomNumbers.unavailableDates);
      console.log(allDates);
      const isFound = roomNumbers.unavailableDates.some((date) =>{
        console.log(date);
        console.log(allDates);
        let newDate = new Date(date);
        let result = allDates.includes((newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear());
        //console.log('Result:',result, date);
        return result;
      }
      );
  console.log(roomNumbers.number, ' Is Avaialbe ' , isFound);
      return isFound;
    };

    const handleSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      const value = e.target.value;
      console.log(value);
      setSelectedRooms(
        checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value)
      );
    };
    console.log(selectedRooms);

    const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map(async (roomId) => {
          const res = await axios.put(`/rooms/avalibility/${roomId}`, { dates: allDates });
          //console.log('last data is ', roomId, checkinvalue,checkoutvalue,allDates)
          const user= JSON.parse(localStorage.getItem('user')+'');
          console.log(user.username);
          const book={
            hotelName:props.hotelname,
            roomId:roomId,
            dates:allDates,
            userName:user.username
          }
          console.log('complete data ', book);
          await axios.post(`/booking`, book);
          navigate('/bookings')
        })
      );
      props.setOpenModel(false);
      //navigate("/");
    } catch (err) {}
  };
  
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => props.setOpenModel(false)}
        />
      Select Your Rooms:
      {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber:{number:number, unavailableDates:[], _id:string}) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={isAvailable(roomNumber)}
                  />
                </div>
                
              ))}
              <button onClick={handleClick} className="rButton">
                Reserve Now!
              </button>
            </div>
       </div>
  ))}
  </div>
  </div>
  )
}


export default ReserveModel
