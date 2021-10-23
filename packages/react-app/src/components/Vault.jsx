import { utils, ethers } from "ethers";
import { Button, Input, Form, Select, InputNumber, Table, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { useContractLoader, useOnBlock } from "eth-hooks";
import { NETWORKS } from "../constants";
import { Transactor } from "../helpers";

export default function Vault({ address, userSigner }) {
  const selectedChainId =
    userSigner && userSigner.provider && userSigner.provider._network && userSigner.provider._network.chainId;

  const tx = Transactor(userSigner);


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
        <Form
          {...formItemLayout}
          form={form}
          name="control-hooks"
          onFinish={() => {}}
          initialValues={{ assetType: "eth" }}
        >
          <Form.Item
            name="assetType"
            label="Select Asset Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select an asset type" onChange={onAssetChange} allowClear>
              <Option value="eth">ETH</Option>
              <Option disabled value="erc20">
                ERC-20
              </Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input disabled placeholder={address} />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount to bridge"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}