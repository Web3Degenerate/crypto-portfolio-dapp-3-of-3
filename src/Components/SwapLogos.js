import React from 'react';

// Single Row Component
const TransactionDetails = ({ event }) => {

    const getLogos = () => {
        if(event.erc20_transfers.length === 2)
            return [event.erc20_transfers[0].token_logo, event.erc20_transfers[1].token_logo]
        else if(event.erc20_transfers.length === 1 && event.native_transfers.length === 1)
            return [event.erc20_transfers[0].token_logo, event.native_transfers[0].token_logo]
        return [null, null]
    }
    const getSwapAssets = () => {
        if(event.erc20_transfers.length === 2)
            return [event.erc20_transfers[0], event.erc20_transfers[1]]
        else if(event.erc20_transfers.length === 1 && event.native_transfers.length === 1)
            return [event.erc20_transfers[0], event.native_transfers[0]]
        return [null, null]
    }

    return (
        <span className='swap-logo-container'>
            {getLogos()[0] != null ? <img className='asset-logo' src={getLogos()[0]}></img> : <span className='logo-fallback'>{getSwapAssets()[0].token_symbol.substring(1,3)}</span>}
            {getLogos()[1] != null ? <img className='asset-logo swap-logo-right' src={getLogos()[1]}></img> : <span className='logo-fallback swap-logo-right'>{getSwapAssets()[1].token_symbol.substring(1,3)}</span>}
        </span>
    );
}

export default TransactionDetails;