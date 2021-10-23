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
        <Divider />
          <h3>The Problem</h3>
          <List>
            The treasuries of decentralised autonomous organisations (DAOs) are growing larger. 
            And nearly all of the largest protocols hold the entirety of their treasury in their native governance token.
          </List>
          <br />
          <List>
            DAO's routinely have a need to deploy this capital for productive purposes. These can include anything from paying engineers and 
            contributors, to funding community grant programmes.
          </List>
          <br />
          <List>
            To finance these initiatives, the DAO will sell its native governance token for another useful asset such as a stablecoin.
            This is undesirable as it dramatically increases the supply of the native token on the market, bringing its price down. 
            As an example, Sushi recently had to raise $16m on a $100m treasury for these purposes!
          </List>
          <br />
          <br />
          <Divider />
          <h3>How OpenRaise solves this</h3>
          <List>
            Applying a venture-like approach, OpenRaise brings SAFE note financing to DAOs. With OpenRaise, investors are rewarded if the DAO is successful.
            We achieve this by using UMA's Success Token.
          </List>

          <List>
            Applying a venture-like approach, OpenRaise brings SAFE note financing to DAOs. With OpenRaise, investors are rewarded if the DAO is successful.
            We achieve this by using UMA's Success Token.
          </List>

          <br />
          <h4>Wait, how does this work?</h4>

          <List>
            So a DAO wants to raise $100 in USDC, they sell a success token at the current price of their native token ($DAO), sets an expiry on the success token 
            and a strike price. Let's say the native token trades at $50. For each $100USDC, the DAO sells 2 success tokens with a two-year expiry and a $60 strike
            price. After two years, the success token redeems for 2 $DAO and the value of the $60 strike option (paid in $DAO).
          </List>

          <br />
          <h4>Why is this good for DAOs?</h4>
            <List>
              DAOs are selling call options on their native tokens in return for downside protection, instead of potentially getting liquidated.
              DAOs are betting on themselves by using OpenRaise.
            </List>
        </div>
        <Divider />
      </div>
    </div>
  );
}
