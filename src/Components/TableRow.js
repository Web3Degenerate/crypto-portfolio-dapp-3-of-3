import React from 'react';
import HistoryIcon from '../Components/HistoryIcon';
import FormattedDate from "../Components/FormatDate";
import './TableRow.css';
import TransactionDetails from './TransactionDetails';
import SwapLogos from './SwapLogos';

// Single Row Component
const TableRow = ({ event, index }) => {

    const handleToggle = () => {
      console.log("handleToggle")
      // Toggle the section. If it's already open, close it.
      setOpenSectionIndex(openSectionIndex === index ? null : index);
      console.log(openSectionIndex)
      console.log(index)
    };

    // State to track the open section
    const [openSectionIndex, setOpenSectionIndex] = React.useState(null);

    return (
      <div className='accordion-container'>
        <div className="accordion-toggle" onClick={handleToggle} style={{ cursor: 'pointer' }}>
            <span className="accordion-date"><FormattedDate date={new Date(event.block_timestamp)}/></span>
            <span className="accordion-icon">
              <HistoryIcon category={event.category}/>
            </span>
        
          <span className="accordion-summary" >{event.summary}</span>
          {event.category === "token swap" && (
            <SwapLogos event={event}/>
          )}
        </div>
        {openSectionIndex === index && (
          <div className="accordion-content">
            <TransactionDetails event={event}/>
          </div>
        )}
      </div>
    );
}

export default TableRow;
