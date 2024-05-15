// Created at (9:30): https://youtu.be/noNyHV9HPM8?si=bHgomK7oWjUWbtJC&t=570

import React, {useEffect, useState } from 'react';
import TableRow from './Components/TableRow';

// function HistoryTable( {selectedChains, address} ){
function HistoryTable( {address, selectedChains} ){

//add state logic to save the history of a given wallet:
    const [history, setHistory] = useState([])

    function fetchHistory(chain, fromDate, address){
      const baseUrl = `https://deep-index.moralis.io/api/v2.2/wallets`;
      // const queryParams = `?chain=${chain}&from_date=${fromDate}&order=DESC&nft_metadata=true`
      const queryParams = `?chain=${chain}&from_date=${fromDate}&order=DESC`;
      const url = `${baseUrl}/${address}/history${queryParams}`;

      const headers = {
        "Content-Type": "application/json",
        "X-API-Key": process.env.REACT_APP_MORALIS_API_KEY,
      }

      return fetch(url, {headers})
      .then(data => {
        return data.json();
      })
      .then(json => {
        console.log(json);
        setHistory(json.result);
      })
    }


//Put this inside useEffect to run when page loads (17:42): https://youtu.be/noNyHV9HPM8?si=gng0rMfJni08UZgO&t=1062 
    useEffect( () => {
      //set date 30 days from current date: 
      const today = new Date();
      const fromDate = new Date(today.setDate(today.getDate() - 30));

      //call fetchHistory and hardcode chain for now
      fetchHistory("eth", fromDate)

    }, [address, selectedChains]) //we have dependency here on address and selectedChains

    return (
      <div>
        {history?.map( (entry, index) => (
          // <>
          //   <div>{entry.block_number}</div>
          //   <div>{entry.summary}</div>
          // </>
          <TableRow event={entry} index={index} />
        ))}
      </div>

    )

}

// Start at (10:24) adding the logic to fetch the history: https://youtu.be/noNyHV9HPM8?si=l0Q1NKqliyEg5lgj&t=624

export default HistoryTable;