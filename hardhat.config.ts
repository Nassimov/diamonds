import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 300,
      },
    },
  },
  etherscan: {
    apiKey: "KC4PXGBK4YMWDX7CJMB7UB28W5IXFX4PCU"
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/201d9ae020d84f3281aac3ee8d829d07",
      // chainId: 5,
      accounts: ["815b14dc6c6fd7f22a5ea489a506a7cf875e06124ca0a413f76f559941657a79"]
    },
    meta: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  }
};

export default config;
