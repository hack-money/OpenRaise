import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, InputNumber, List, Progress, Slider, Spin, Switch, Form } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";

export default function LaunchRaise({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const defaultCollateralNum = 1000
  const defaultFairLaunchNum = 20
  const defaultStartWeight = 20
  const defaultEndWeight = 80

  const [collateralTokenNum, setCollateralTokenNum] = useState(defaultCollateralNum)
  const [fairLaunchTokenNum, setFairLaunchTokenNum] = useState(defaultFairLaunchNum)
  const [startWeight, setStartWeight] = useState(defaultStartWeight)
  const [endWeight, setEndWeight] = useState(defaultEndWeight)

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  const [form] = Form.useForm();

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 800, margin: "auto", marginTop: 64 }}>
        <h2>Launch the Raise</h2>
        <h3>Provide the details of the raise and click 'Launch'!</h3>
        <Divider />
        <h3>Pool deposit quantities</h3>
        <Form
          {...formItemLayout}
          form={form}
          name="control-hooks"
          onFinish={() => {}}
          initialValues={{ assetType: "eth" }}
        >
          <Form.Item
            name="collateralToken"
            label="Num USDC tokens"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber 
              defaultValue={defaultCollateralNum}
              onChange={value => {
                setCollateralTokenNum(value);
              }}
              >
              </InputNumber>
          </Form.Item>

          <Form.Item
            name="fairLaunchToken"
            label="Num fair launch tokens"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber 
              defaultValue={defaultFairLaunchNum}
              onChange={value => {
                setFairLaunchTokenNum(value);
              }}
              >
              </InputNumber>
          </Form.Item>
        </Form>

        <h3>Weights</h3>
        <Form
          {...formItemLayout}
          form={form}
          name="control-hooks"
          onFinish={() => {}}
          initialValues={{ assetType: "eth" }}
        >
          <Form.Item
            name="startWeights"
            label="Start weight, Fair launch to USDC"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber 
              defaultValue={defaultStartWeight}
              onChange={value => {
                setStartWeight(value);
              }}
              >
              </InputNumber>

          </Form.Item>

          <Form.Item
            name="endWeight"
            label="End weight, Fair launch to USDC"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber 
              defaultValue={defaultEndWeight}
              onChange={value => {
                setEndWeight(value);
              }}
              >
              </InputNumber>
          </Form.Item>
        </Form>
        </div>

        <div>
          <Button
              style={{ 
                marginTop: 50,
                width: 150,
                height: 100,
                backgroundColor: '#FFBE0B'
              }}
              onClick={() => {
                // TODO: Implement
              }}
            >
              Launch
          </Button>
        </div>
    </div>
  );
}
