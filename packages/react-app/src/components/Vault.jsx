import { utils, ethers } from "ethers";
import { Button, Input, Form, Select, InputNumber, Table, Radio } from "antd";
import React, { useState, useEffect } from "react";

export default function Vault({ address, userSigner }) {
  const [pairName, setPairName] = useState('')
  const [expirationTimeStamp, setExpirationTimeStamp] = useState('')
  const [collateralPerPair, setCollateralPerPair] = useState('')
  const [priceIdentifier, setPriceIdentifier] = useState('')

  const [longSynthName, setLongSynthName] = useState('')
  const [longSynthSymbol, setLongSynthSymbol] = useState('')

  const [shortSynthName, setShortSynthName] = useState('')
  const [shortSynthSymbol, setShortSynthSymbol] = useState('')

  const [collateralToken, setCollateralToken] = useState('')
  const [prepaidProposerReward, setPrepaidProposerReward] = useState('')

  const [optimisticOracleLivenessTime, setOptimisticOracleLivenessTime] = useState('')
  const [optimisticOracleProposerBond, setOptimisticOracleProposerBond] = useState('')

  const [strikePrice, setStrikePrice] = useState('')
  const [basePercentage, setBasePercentage] = useState('')

  const { Option } = Select;
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

  const onAssetChange = value => {
    console.log(value);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ padding: 16, width: 800, margin: "auto", marginBottom: 128 }}>
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 800, margin: "auto", marginBottom: 128 }}>
        <h2>Vault creation</h2>
        <h3>Provide the settings for vault creation and click 'Submit'!</h3>
        <br />
        <br />
        <h3>Vault settings</h3>
        <Form
          {...formItemLayout}
          form={form}
          name="control-hooks"
          onFinish={() => {}}
          initialValues={{ assetType: "eth" }}
        >
          <Form.Item
            name="pairName"
            label="Pair name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input 
              placeholder="UMA Range Dai"
              onChange={value => {
                setPairName(value);
              }}
              >
              </Input>
          </Form.Item>

          <Form.Item
            name="expirationTimeStamp"
            label="Expiration time stamp"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="23/12/2023"
              onChange={value => {
                setExpirationTimeStamp(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="collateralPerPair"
            label="Collateral per pair"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={20000}
              onChange={value => {
                setCollateralPerPair(value);
              }}
              ></InputNumber>
          </Form.Item>

          <Form.Item
            name="priceIdentifier"
            label="Price identifier"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Maker Oracle"
              onChange={value => {
                setPriceIdentifier(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="longSynthName"
            label="Long Synth Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="UMARangeDai102"
              onChange={value => {
                setLongSynthName(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="longSynthSymbol"
            label="Long synth symbol"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="UD2"
              onChange={value => {
                setLongSynthSymbol(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="shortSynthName"
            label="Short synth name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input 
              placeholder="UMARangeDai101"
              onChange={value => {
                setShortSynthName(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="shortSynthSymbol"
            label="Short synth symbol"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="UD1"
              onChange={value => {
                setShortSynthSymbol(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="collateralToken"
            label="Collateral token"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Dai"
              onChange={value => {
                setCollateralToken(value);
              }}
              ></Input>
          </Form.Item>

          <Form.Item
            name="prepaidProposerReward"
            label="Prepaid proposer reward"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={800}
              onChange={value => {
                setPrepaidProposerReward(value);
              }}></InputNumber>
          </Form.Item>

          <Form.Item
            name="optimisticOracleLivenessTime"
            label="Optimistic oracle liveness time"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={120}
              onChange={value => {
                setOptimisticOracleLivenessTime(value);
              }}
              ></InputNumber>
          </Form.Item>

          <Form.Item
            name="optimisticOracleProposerBond"
            label="Optimistic oracle proposer bond"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={300}
              onChange={value => {
                setOptimisticOracleProposerBond(value);
              }}
              ></InputNumber>
          </Form.Item>

          <Form.Item
            name="strikePrice"
            label="Strike price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={23}
              onChange={value => {
                setStrikePrice(value);
              }}
              ></InputNumber>
          </Form.Item>

          <Form.Item
            name="basePercentage"
            label="Base percentage"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={10}
              onChange={value => {
                setBasePercentage(value);
              }}
              ></InputNumber>
          </Form.Item>
        </Form>
        
        <br />
        <br />
        <br />
        <h3>Tokens to mint</h3>
        
        <Form
          {...formItemLayout}
          form={form}
        >
          <Form.Item 
            name="tokensToMint"
            label="Num tokens to mint"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber defaultValue={500}></InputNumber>
          </Form.Item>
        </Form>

        <div>
          <Button
              style={{ 
                marginTop: 50,
                width: 150,
                height: 100,
                backgroundColor: '#FFBE0B'
              }}
              onClick={() => {
                // TODO: Use Safe SDK to send a transaction
              }}
            >
              Create
          </Button>
        </div>
      </div>
    </div>
  );
}