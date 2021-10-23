export const erc20ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
]

export const lspFactoryAbi = [
  {
    "inputs": [
      {
        "internalType": "contract ILongShortPairCreator",
        "name": "pairCreator_",
        "type": "address"
      },
      {
        "internalType": "contract ISuccessTokenLongShortPairFinancialProductLibrary",
        "name": "successTokenFPL_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "pairName",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "expirationTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint256",
            "name": "collateralPerPair",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "priceIdentifier",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "longSynthName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "longSynthSymbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "shortSynthName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "shortSynthSymbol",
            "type": "string"
          },
          {
            "internalType": "contract IERC20",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "financialProductLibrary",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "customAncillaryData",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "prepaidProposerReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "optimisticOracleLivenessTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "optimisticOracleProposerBond",
            "type": "uint256"
          }
        ],
        "internalType": "struct ILongShortPairCreator.CreatorParams",
        "name": "params",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "strikePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "basePercentage",
        "type": "uint256"
      }
    ],
    "name": "createLongShortPair",
    "outputs": [
      {
        "internalType": "contract ILongShortPair",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "pairName",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "expirationTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint256",
            "name": "collateralPerPair",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "priceIdentifier",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "longSynthName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "longSynthSymbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "shortSynthName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "shortSynthSymbol",
            "type": "string"
          },
          {
            "internalType": "contract IERC20",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "financialProductLibrary",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "customAncillaryData",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "prepaidProposerReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "optimisticOracleLivenessTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "optimisticOracleProposerBond",
            "type": "uint256"
          }
        ],
        "internalType": "struct ILongShortPairCreator.CreatorParams",
        "name": "params",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "strikePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "basePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokensToCreate",
        "type": "uint256"
      }
    ],
    "name": "createLongShortPairAndMint",
    "outputs": [
      {
        "internalType": "contract ILongShortPair",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pairCreator",
    "outputs": [
      {
        "internalType": "contract ILongShortPairCreator",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "successTokenFPL",
    "outputs": [
      {
        "internalType": "contract ISuccessTokenLongShortPairFinancialProductLibrary",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]