import React from 'react';

export const Title = ()=>
{
    return(<React.Fragment>
        <div className='title-block' style={{ marginTop: '1em' }}>
            <h1 className='name'>Decentralized Lottery</h1>
            <button className='metamask-button'>Connect Wallet</button>
        </div> 
    </React.Fragment>)
}