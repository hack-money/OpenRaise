import { Divider, List } from "antd";
import OpenRaise from '../images/OpenRaise.png'
import React from "react";

export default function Home({}) {
  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px #cccccc", padding: 16, width: 800, margin: "auto", marginTop: 64 }}>
        <img
          src={OpenRaise}
          width={300}
          marginBottom={10}
          ></img>
        
        <div style={{marginTop: 50}}>
          <h1>OpenRaise</h1>
          <h2 style={{color: 'grey' }}>SAFE notes for DAOs</h2>
        </div>
        
        <div style={{ marginTop: 32 }}>
          <h3>The Problem</h3>
          <List>
            The treasuries of decentralised autonomous organisations (DAOs) are growing ever larger in size. At the same time nearly all of the largest protocols hold the
            entirety of their treasury in their native governance token. 
          </List>
          <br />
          <List>
            DAO's routinely have a need to deploy this capital for productive purposes. These can include anything from paying engineers and 
            contributors, to funding community grant programmes.
          </List>
          <br />
          <List>
            To finance these initiatives, the DAO will typically sell it's native governance token for another useful asset such as a stablecoin. This is undesirable as it
            dramatically increases the supply of the native token on the market, putting significant downwards pressure on the native token price.
            As an example, Sushi recently had to raise $16m on a $100m treasury for these purposes!
          </List>
          <br />
          <List>
            Instead, you want a mechanism whereby DAO priorities can be financed without having to sell treasury
            governance tokens. Taking a loan against the treasury tokens via a Defi money lending protocol is not suitable - it exposes
            the treasury to liquidation risk and potentially very significant interest rate swings.
          </List>
          <br />

          <h3>OpenRaise's solution</h3>
          <List>
            OpenRaise introduces a primitive loosely analogous to a SAFE note from traditional financing. 
          </List>

          <br />
          <h3>Solution</h3>
          <List>{/* TODO */}</List>
        </div>
        <Divider />
      </div>
    </div>
  );
}
