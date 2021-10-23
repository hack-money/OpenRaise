import { formatBytes32String } from "@ethersproject/strings";
import { Button, Input, Form, Select, InputNumber, Table, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import {Interface} from "@ethersproject/abi"
import { erc20ABI, lspFactoryAbi} from "./abi"

const collateralPerPair = 1000;

export default function Vault({ address, userSigner }) {
  const { sdk } = useSafeAppsSDK();
  const [pairName, setPairName] = useState('')
  const [expirationTimestamp, setExpirationTimeStamp] = useState('')
  const [priceIdentifier, setPriceIdentifier] = useState('')

  const [collateralToken, setCollateralToken] = useState('')

  const [strikePrice, setStrikePrice] = useState(23)
  const [basePercentage, setBasePercentage] = useState(40)

  const [tokensToDeposit, setTokensToDeposit] = useState(5000)

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
    <div style={{ padding: 16, width: 800, margin: "auto" }}>
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 800, margin: "auto" }}>
        <h2>Create vault</h2>
        <h3>Provide the details for vault creation and click 'Create'!</h3>
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
            name="lsppairName"
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
              onChange={event => {
                setExpirationTimeStamp(event.target.value);
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
              onChange={event => {
                setCollateralToken(event.target.value);
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
              defaultValue={strikePrice}
              onChange={value => {
                setStrikePrice(parseFloat(value));
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
              defaultValue={basePercentage}
              onChange={value => {
                setBasePercentage(parseFloat(value));
              }}
              ></InputNumber>
          </Form.Item>
        </Form>
        
        <br />
        <br />
        <br />
        <h3>Tokens to deposit</h3>
        
        <Form
          {...formItemLayout}
          form={form}
        >
          <Form.Item 
            name="numtokensToDeposit"
            label="Number of tokens to deposit"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              defaultValue={tokensToDeposit}
              onChange={value => {
                setTokensToDeposit(parseFloat(value));
              }}></InputNumber>
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
              onClick={async () => {
                const financialProductLibrary = "0x0000000000000000000000000000000000000000"
                const params = {
                  pairName,
                  expirationTimestamp,
                  collateralPerPair,
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

              console.log( [params, strikePrice, basePercentage, tokensToDeposit * collateralPerPair])

              const lspFactoryAddress = "0x8df04d551e3f7f5b03a67de79184bb919a97bbde"
              const erc20Interface = new Interface(erc20ABI)
              const lspFactoryInterface = new Interface(lspFactoryAbi)

              const txs = [
                {
                  to: collateralToken,
                  data: erc20Interface.encodeFunctionData("approve", [lspFactoryAddress, tokensToDeposit]),
                  value: "0"
                },
                {
                  to: lspFactoryAddress,
                  data: lspFactoryInterface.encodeFunctionData("createLongShortPairAndMint", [params, strikePrice, basePercentage, tokensToDeposit * collateralPerPair]),
                  value: "0"
                }
              ]

              await sdk.txs.send({txs})
              }}
            >
              Create
          </Button>
        </div>
    </div>
  );
}