import React, {useEffect, useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom';

import AssetTable from "./AssetTable";
import HistoryTable from "./HistoryTable";
import ChainSelector from "./ChainSelector";
import NetWorth from "./NetWorth";

function Portfolio() {

  const [selectedChains, setSelectedChains] = useState(["eth", "polygon", "bsc", "optimism", "base"]);

  const [tempAddress, setTempAddress] = useState("0xcB1C1FdE09f811B294172696404e88E658659905")
  const [address, setAddress] = useState(tempAddress)

  const [netWorth, setNetWorth] = useState({})

  const fetchNetWorth = async (address) => {
    try {
      const response = await fetch(`https://deep-index.moralis.io/api/v2.2/wallets/${address}/net-worth?chains=eth&chains=polygon&chains=bsc&chains=optimism&chains=base&exclude_spam=true&exclude_unverified_contracts=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.REACT_APP_MORALIS_API_KEY
        }
      })
      const data = await response.json();
      setNetWorth(data);
      
    } catch (error) {
      
    }
  }


  const handleInputChange = (e) => {
    setTempAddress(e.target.value);
  }
  
  const handleButtonClick = (e) => {
    setAddress(tempAddress)
  }

  useEffect( () => {
    fetchNetWorth(address)
  }, [address])

  return (
    <div>
      <input 
        className="addressInput"
        type="text"
        value={tempAddress}
        onChange={handleInputChange}
        placeholder="Enter wallet address"
      />
      <button onClick={handleButtonClick} className="fetchButton">Fetch assets</button>
      <NetWorth netWorth={netWorth} />
      <ChainSelector netWorth={netWorth} selectedChains={selectedChains} onSelectionChange={setSelectedChains}/>
        <Routes>
          <Route path="/" element={<AssetTable address={address} selectedChains={selectedChains} />} />
          <Route path="/history" element={<HistoryTable address={address} selectedChains={selectedChains} />} />

        </Routes>
      
    </div>
  );
}

export default Portfolio;
