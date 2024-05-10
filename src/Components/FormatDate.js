import React from 'react';

//format date function
function formatDate(date){
  return new Intl.DateTimeFormat('en-US', {
    month: 'long', //full month name
    day: 'numeric', //numeric day
    year: 'numeric', //numeric year
  }).format(date);
}

//React component to display the formatted date: 
function FormattedDate({ date }){
  return <span>{formatDate(date)}</span>;
}

export default FormattedDate;