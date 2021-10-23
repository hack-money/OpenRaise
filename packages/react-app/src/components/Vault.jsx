import { formatBytes32String } from "@ethersproject/strings";
import { Button, Input, Form, Select, InputNumber, Table, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';

export default function Vault({ address, userSigner }) {
  const { sdk } = useSafeAppsSDK();
  const [pairName, setPairName] = useState('')
  const [expirationTimestamp, setExpirationTimeStamp] = useState('')
  const [priceIdentifier, setPriceIdentifier] = useState('')

  const [collateralToken, setCollateralToken] = useState('')

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
              placeholder="DAO Success Token"
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
            name="collateralToken"
            label="Collateral token"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="DAO"
              onChange={value => {
                setCollateralToken(value);
              }}
              ></Input>
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
              placeholder="DAOUSD"
              onChange={value => {
                setPriceIdentifier(value);
              }}
              ></Input>
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
                // TODO: add FPL
                const financialProductLibrary = "0x000000000000000000000000000000000"
                const params = {
                  pairName,
                  expirationTimestamp,
                  collateralPerPair: 1000,
                  priceIdentifier: formatBytes32String(priceIdentifier),
                  longSynthName: `${pairName}-Long`,
                  longSynthSymbol: "OpenLONG",
                  shortSynthName: `${pairName}-Short`,
                  shortSynthSymbol: "OpenSHORT",
                  collateralToken,
                  financialProductLibrary,
                  customAncillaryData: "0x",
                  prepaidProposerReward: 0,
                  optimisticOracleLivenessTime: 7200,
                  optimisticOracleProposerBond: 200,
              }

              console.log(params)
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