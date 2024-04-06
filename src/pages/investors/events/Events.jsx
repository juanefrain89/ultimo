import React, { useState } from 'react';
import { Investor } from '../../../components/Invesor';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./estilos.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NuevaFecha from './NuevaFecha';
const localizer = momentLocalizer(moment);

export const Events = () => {
  
  const fecha = new Date('Wed Mar 20 2024 13:10:00 GMT-0600'); 
const fechaFormateada = [
  fecha.getFullYear(), 
  fecha.getMonth(),    
  fecha.getDate(),     
  fecha.getHours(),                                         
  fecha.getMinutes(),
];
console.log(fechaFormateada); 
  const [info, setinfo] = useState(600);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  let z = true;
  const handleViewChange = view => {
    if (view === 'month') {
      setinfo(600)
    } else {
      setinfo(2000)
    }
  };

  const cv = () => {
    z = true;
    console.log(z);
  }
  const minDate = new Date();
  minDate.setHours(13, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    {
      title: 'Evento 1',
      start: new Date(2024, 2, 20, 13, 0), 
      end: new Date(2024, 2, 20, 14, 0), 
    }
  ];
  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    console.log(selectedDate);
  };

  return (
    <>

      <Investor>
        <Calendar
        min={minDate} 
          localizer={localizer}
          className='calendar'
          selectable
          onSelectSlot={handleSelectSlot}
          events={[]} 
          startAccessor="start"
          endAccessor="end"
          timeslots={6} 
          step={10}
          style={{ height: info, backgroundColor: "grey" }}   
          onView={handleViewChange}    
        />
        <button onClick={cv}></button>
        <h1>{selectedDate ? moment(selectedDate).format('LL') : ''}</h1>
        {selectedDate && <NuevaFecha selectedDate={selectedDate} />}
      </Investor>
    </>
  );
};
