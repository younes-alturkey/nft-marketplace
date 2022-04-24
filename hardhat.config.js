require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

const { ALCHEMY_PROJECT_ID, PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_PROJECT_ID}`,
    },
  },
  solidity: "0.8.4",
};
