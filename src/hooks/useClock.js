import React from 'react';

export function useClock(currentDate) {
    const [date, setDate] = React.useState(currentDate);
    
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
  }

