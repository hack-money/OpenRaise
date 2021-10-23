import { PageHeader } from "antd";
import OpenRaiseImage from '../images/OpenRaise.png'
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <img
        src={OpenRaiseImage}
        width={50}
        align="left"
        style={{
          margin: 10
        }}
        ></img>
      <PageHeader
        title="OpenRaise"
        subTitle="SAFE notes for DAOs"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
