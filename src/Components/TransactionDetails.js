import React from 'react';

//single row component
const TransactionDetails = ({ event }) => {
  return (
    <div>
        <div>Transaction Hash: {event.hash}</div>
        <div>From: {event.from_address} {event.from_label ? `(${event.from_label})` : ""}</div>
        <div>To: {event.to_address} {event.to_label ? `(${event.to_label})` : ""}</div>
    </div>
  )
}

export default TransactionDetails;