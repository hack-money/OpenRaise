import { PageHeader } from "antd";
import OpenRaiseImage from '../images/OpenRaise.png'
import React from "react";

// displays a page header

export default function Header() {
  return (
    <div>
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
      </div>
  );
}
