import { Card, Divider, List } from "antd";
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
        </div>
        
        <div style={{ marginTop: 32 }}>
          <h3>Problem</h3>
          <List>
            DAO treasuries are growing ever larger in size. DAO's often have a need to deploy this capital for
            productive purposes, such as in paying engineers, funding grants programmes etc.
          </List>
          <br />
          <List>
            Typically, DAO treasury governance tokens are sold to finance these initiatives. This puts downwards
            pressure on the price + nobody wants to sell their own governance tokens!
          </List>
          <br />
          <List>
            Instead, you want a mechanism whereby DAO priorities can be financed without having to sell treasury
            governance tokens.
          </List>
          <br />

          <h3>Why not put the DAO treasury in a money lending protocol and take out a loan?</h3>
          <List>
            There is a risk of liquidation if the governance token price changes! Given the size of many treasuries
            this is a significant risk + there is overhead in having to actively monitor the health factor of
            positions.
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
