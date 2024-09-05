import eth from "./assets/images/eth.png"
import matic from "./assets/images/matic.png"
import avax from "./assets/images/avax.png"
import egem from "./assets/images/egem.png"
import bnb from "./assets/images/bnb.png"
import gnosis from "./assets/images/gnosis.png"
import etc from "./assets/images/etc.png"
// import klaytn from "./assets/images/klaytn.png"
import evmos from "./assets/images/evmos.png"
import moonriver from "./assets/images/moonriver.png"

export const NetworkId = {
  POLYGON: 137,
  // POLYGON_TESTNET: 80001,
  RINKEBY: 4,
  ETHEREUM: 1,
  ETHERGEM: 1987,
  AVALANCHE: 43114,
  BSC: 56,
  GNOSIS: 100,
  ETC: 61,
  KLAYTN: 8217,
  EVMOS: 9001,
  MOONRIVER: 1285,
  ARBITRUM: 42161,
  OPTIMISM: 10
  // FUJI: 43113,
};
export const supportedChainIds = [ 137, 56, 61, 100, 1987, 43114, 4, 1285, 9001, 42161, 10]
export const addresses = {
  [NetworkId.POLYGON]: "0x683F246253934862B86b042476837a5e9B91E326", //verified
  [NetworkId.RINKEBY]: "0x0f79f4239F343fc932F357eFAAeE405a90d28e42", //verified
  [NetworkId.ETHERGEM]: "0x5A4Aa5B8f54763A22A7bE54F30Be650fe040b8eA", //
  [NetworkId.AVALANCHE]: "0x0a8D5435a43c8d63b47D6E61F5eE88868A1b8Ed9", //verified
  [NetworkId.BSC]: "0x57aa9274d64185A77DAde4c104A49eD52C9D42Af", //verified
  [NetworkId.GNOSIS]: "0x86E25f1e266eA4831b3CBb68164753DcbA30D047", //verified
  [NetworkId.ETC]: "0x86E25f1e266eA4831b3CBb68164753DcbA30D047", //verified
  [NetworkId.EVMOS]: "0x86E25f1e266eA4831b3CBb68164753DcbA30D047", //verified
  [NetworkId.MOONRIVER]: "0x86E25f1e266eA4831b3CBb68164753DcbA30D047", //verified
  [NetworkId.ARBITRUM]: "0x86E25f1e266eA4831b3CBb68164753DcbA30D047", //verified
  [NetworkId.OPTIMISM]: "0x04Fe964916B24deb3C2D7E6A8d9873b054E52492" //verified
};
export const standard = {
  [NetworkId.POLYGON]: "0x78A46265BedEfF1f18C3696dB01669A76B7833C8",
  [NetworkId.RINKEBY]: "0xFe4317e87958f5b408aF9d8fFf78F228435fd0C8",
  [NetworkId.ETHERGEM]: "0xf3195693ddb32822cdf759305a91b674ab1382e1",
  [NetworkId.AVALANCHE]: "0x0603347E9f803D28b59B8346480b1a43a11eE100",
  [NetworkId.BSC]: "0xCE387EEAD4bf81D5665EacBC457CcAea51955863",
  [NetworkId.GNOSIS]: "0xCbd697f76e90435Dce788ce14e096f732803fA71",
  [NetworkId.ETC]: "0xCbd697f76e90435Dce788ce14e096f732803fA71",
  [NetworkId.MOONRIVER]: "0xCbd697f76e90435Dce788ce14e096f732803fA71",
  [NetworkId.EVMOS]: "0xCbd697f76e90435Dce788ce14e096f732803fA71",
  [NetworkId.ARBITRUM]: "0xCbd697f76e90435Dce788ce14e096f732803fA71",
  [NetworkId.OPTIMISM]: "0xC254F215840EB03Ef7ff7E2707CB5787d529579a"
}
// export const platforms = {
//   [NetworkId.POLYGON]: "0x175bc1bACF1fc054A5CA30AdeC155f00AaA2ce06",
//   [NetworkId.RINKEBY]: "0x3521750B9abda780854C570e83624aCB1EB7afe7",
//   [NetworkId.ETHERGEM]: "0x43dF4869458f2B81782cE29951d057253a68Ffc6",
//   [NetworkId.AVALANCHE]: "0x0c11e7AC0864624e22935748ea092A27bD7B4924"
// }
export const explorer = {
  [NetworkId.POLYGON]: "https://polygonscan.com",
  [NetworkId.RINKEBY]: "https://rinkeby.etherscan.io",
  [NetworkId.ETHERGEM]: "https://blockscout.egem.io",
  [NetworkId.AVALANCHE]: "https://snowtrace.io",
  [NetworkId.BSC]: "https://bscscan.com",
  [NetworkId.GNOSIS]: "https://xdai.tokenview.com/en", //"https://blockscout.com/xdai/mainnet/",
  [NetworkId.ETC]: "https://etc.tokenview.com/en", //"https://blockscout.com/etc/mainnet/",
  [NetworkId.MOONRIVER]: "https://moonriver.moonscan.io",
  [NetworkId.EVMOS]: "https://evm.evmos.org",
  [NetworkId.ARBITRUM]: "https://arbiscan.io",
  [NetworkId.OPTIMISM]: "https://optimistic.etherscan.io"
}

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */
// export const netOrder = [ 137, 56, 61, 100, 1987, 43114, 4, 1285, 9001]
export const NETWORKS = {
  [NetworkId.POLYGON]: {
    image: matic,
    label: "Polygon",
    chainId: 137
  },
  // [NetworkId.POLYGON_TESTNET]: {
  //   image: matic,
  //   label: "Polygon Mumbai",
  //   chainId: 80001
  // },
  // [NetworkId.ETHEREUM]: {
  //   image: eth,
  //   label: "Ethereum",
  //   chainId: 1
  // },
  [NetworkId.BSC]: {
    image: bnb,
    label: "Binance Smart Chain",
    chainId: 56,
  },
  [NetworkId.ETC]: {
    image: etc,
    label: "Ethereum Classic",
    chainId: 61
  },
  [NetworkId.GNOSIS]: {
    image: gnosis,
    label: "Gnosis Chain",
    chainId: 100
  },
  [NetworkId.ETHERGEM]: {
    image: egem,
    label: "Ethergem",
    chainId: 1987
  },
  [NetworkId.AVALANCHE]: {
    image: avax,
    label: "Avalanche",
    chainId: 43114
  },
  [NetworkId.RINKEBY]: {
    image: eth,
    label: "Rinkeby",
    chainId: 4
  },
  [NetworkId.MOONRIVER]: {
    image: moonriver,
    label: "Moonriver",
    chainId: 1285
  },
  [NetworkId.EVMOS]: {
    image: evmos,
    label: "Evmos",
    chainId: 9001
  },
  [NetworkId.ARBITRUM]: {
    image: "https://bridge.arbitrum.io/logo.png",
    label: "Arbitrum",
    chainId: 42161
  },
  [NetworkId.OPTIMISM]: {
    image: "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/611fd32ddac3c1856c306c37_optimism%20logo%20icon.svg",
    label: "Optimism",
    chainId: 10
  }
  // [NetworkId.KLAYTN]: {
  //   image: klaytn,
  //   label: "Klaytn Mainnet",
  //   chainId: 8217
  // }
  // [NetworkId.FUJI]: {
  //   image: avax,
  //   label: "Avalanche Fuji",
  //   chainId: 43113
  // },
  
};

export const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "calculateCost",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "cost",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "collectionOwned",
    "outputs": [
      {
        "internalType": "address",
        "name": "platform",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dev",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCollections",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "platform",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          }
        ],
        "internalType": "struct BidifyFactory.Collection[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "collection",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "platform",
        "type": "address"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "setAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "setdev",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const ERC721_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const BIDIFY = {
  address: {
    [NetworkId.RINKEBY]: "0xE9f8f0267342c4b9e65C7Bc14c1b33877e10C817", //new tested
    [NetworkId.ETHERGEM]: "0x159f569E2c35C7B5B601D222AFafc90edD23E1f9", //new tested
    [NetworkId.AVALANCHE]: "0xED002B4F0b3167E9096F6f4674c18433dca96518", //new tested
    [NetworkId.POLYGON]: "0x2FccEd65EeC83Bf2790bBc046013e13d6498038C", //new tested
    [NetworkId.GNOSIS]: "0xcA592ed60C20085217C4529CF75638A0d71F1F02", //new tested
    [NetworkId.ETC]: "0xD4e83E1Fc9d88730CA63Aaaffef168811BFC6D14", //new tested
    [NetworkId.EVMOS]: "0x1779ac6Dc323528DcC93aE8716211FC7dEDb4294", //new tested
    [NetworkId.MOONRIVER]: "0xD4e83E1Fc9d88730CA63Aaaffef168811BFC6D14", //new tested
    [NetworkId.BSC]: "0xA878b8eB62B4a25308CA75B0c89C718F1448B50F", //new tested
    [NetworkId.OPTIMISM]: "",
    [NetworkId.ARBITRUM]: "",
  },
  abi: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        }
      ],
      "name": "AuctionExtended",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "AuctionFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "Bid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "platform",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "endingPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "timeInDays",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "lister",
          "type": "address"
        }
      ],
      "name": "ListingCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "bid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        }
      ],
      "name": "finish",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getListing",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "platform",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "token",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endingPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "referrer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "lister",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "highBidder",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "paidOut",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isERC721",
              "type": "bool"
            }
          ],
          "internalType": "struct Bidify.Listing",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        }
      ],
      "name": "getNextBid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        }
      ],
      "name": "getPriceUnit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "platform",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endingPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "timeInDays",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "isERC721",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "lister",
          "type": "address"
        }
      ],
      "name": "list",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
};

export const baseUrl = "https://api.bidify.org/api"
// export const baseUrl = "http://localhost:8080/api"
export const getLogUrl = {
  [NetworkId.POLYGON]: "https://api.polygonscan.com/api?module=logs&action=getLogs",
  [NetworkId.AVALANCHE]: "https://api.snowtrace.io/api?module=logs&action=getLogs",
  [NetworkId.RINKEBY]: "https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs",
  [NetworkId.ETHERGEM]: "https://blockscout.egem.io/api?module=logs&action=getLogs",
  [NetworkId.BSC]: "https://api.bscscan.com/api?module=logs&action=getLogs",
  [NetworkId.EVMOS]: "https://evm.evmos.org/api?module=logs&action=getLogs",
  [NetworkId.MOONRIVER]: "https://api-moonriver.moonscan.io/api?module=logs&action=getLogs",
  [NetworkId.GNOSIS]: "https://blockscout.com/xdai/mainnet/api?module=logs&action=getLogs",
  [NetworkId.ETC]: "https://blockscout.com/etc/mainnet/api?module=logs&action=getLogs"
}
export const snowApi = {
  43114: "Y72B4EMH42SYS5C3RGGIDJM9HPQKYUSUTH",
  137: "XKIRV2YEWTDJIXRQSXB42PT78P1879NTJT",
  4: "1GT2QR7K76T2EAU72UEP43M82W72TMQAU6",
  56: "WYSBB1UFVWFNRVRMCRZ6PMI5XD3K1D2A9F"
}

export const URLS = {
  // 1: "https://mainnet.infura.io/v3/0c8149f8e63b4b818d441dd7f74ab618",
  // 3: "https://ropsten.infura.io/v3/0c8149f8e63b4b818d441dd7f74ab618",
  // 80001: "https://matic-testnet-archive-rpc.bwarelabs.com",
  // 43113: "https://api.avax-test.network/ext/bc/C/rpc",
  // 5: "https://goerli.infura.io/v3/0c8149f8e63b4b818d441dd7f74ab618",
  [NetworkId.RINKEBY]: "https://rinkeby.infura.io/v3/0c8149f8e63b4b818d441dd7f74ab618",
  [NetworkId.ETHERGEM]: "https://lb.rpc.egem.io",
  [NetworkId.AVALANCHE]: "https://api.avax.network/ext/bc/C/rpc",
  [NetworkId.POLYGON]: "https://polygon-rpc.com",
  [NetworkId.GNOSIS]: "https://rpc.gnosischain.com",
  [NetworkId.ETC]: "https://www.ethercluster.com/etc",
  [NetworkId.EVMOS]: "https://eth.bd.evmos.org:8545",
  [NetworkId.MOONRIVER]: "https://rpc.api.moonriver.moonbeam.network",
  [NetworkId.BSC]: "https://bsc-dataseed1.binance.org",
  [NetworkId.OPTIMISM]: "",
  [NetworkId.ARBITRUM]: "",

};