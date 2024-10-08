const ADDRESSES = require("../helper/coreAssets.json");
const { sumTokensExport } = require("../helper/unwrapLPs");

const owners = ["0x1c3f35F7883fc4Ea8C4BCA1507144DC6087ad0fb", "0xfE03be1b0504031e92eDA810374222c944351356","0xef7aF0804AAB3885da59a8236fabfA19DDc6Cf48"];
const opbnb_owners = ["0xA2E2F3726DF754C1848C8fd1CbeA6aAFF84FC5B2", "0x1EbEd4024308afcb05E6938eF8Ebd1ec5d6E8C46", "0x1Bc6F42D6D1680115A52F82DFA29265085E91d93"];
const manta_owners = ["0xA2E2F3726DF754C1848C8fd1CbeA6aAFF84FC5B2", "0x1EbEd4024308afcb05E6938eF8Ebd1ec5d6E8C46", "0x471C5e8Cc0fEC9aeeb7ABA6697105fD6aaaDFf99","0xa10f74374b8bE9E9C8Fb62c1Dc17B8D4247E332A"];
const manta_stone_token = "0xEc901DA9c68E90798BbBb74c11406A32A70652C3";
const manat_manta_token = "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5";
const taiko_owners = ["0x735D00A9368164B9dcB2e008d5Cd15b367649aD5", "0x235C5C450952C12C8b815086943A7bBCF96bc619","0x2646E743A8F47b8d2427dBcc10f89e911f2dBBaa"];
const bsquared_owners = ["0xA2E2F3726DF754C1848C8fd1CbeA6aAFF84FC5B2", "0x1EbEd4024308afcb05E6938eF8Ebd1ec5d6E8C46","0xB20Faa4BA0DdEbDe49299557f4F1ebB5532745e3"];

module.exports = {
  start: 1690971144,
  bsc: { tvl: sumTokensExport({ owners, tokens: [
    ADDRESSES.bsc.USDT, ADDRESSES.ethereum.FDUSD, ADDRESSES.scroll.STONE,
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', //WBNB
    '0xba2ae424d960c26247dd6c32edc70b295c744c43', //DOGE
    '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', //BTCB
    '0xb0b84d294e0c75a6abe60171b70edeb2efd14a1b',//slisBNB
    '0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5',//lisUSD
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', //usdc
    
  ], }) },
  op_bnb: {
    tvl: sumTokensExport({ owners: opbnb_owners, tokens: [
      ADDRESSES.op_bnb.USDT, 
      ADDRESSES.base.DAI, //FDUSD
      ADDRESSES.optimism.WETH_1, //WBNB
      '0x7c6b91d9be155a6db01f749217d76ff02a7227f2', //BTCB
      '0xe7798f023fc62146e8aa1b36da45fb70855a77ea', //ETH
    ] })
  },
  manta: {
    tvl: sumTokensExport({ owners: manta_owners, tokens: [
      ADDRESSES.manta.USDT, manta_stone_token, manat_manta_token,
      '0x7746ef546d562b443ae4b4145541a3b1a3d75717', //vMANTA
      '0xb73603c5d87fa094b7314c74ace2e64d165016fb', //USDC
      ] })
  },
  taiko: {
    tvl: sumTokensExport({ owners: taiko_owners, tokens: [
      ADDRESSES.taiko.USDC,
      '0x19e26b0638bf63aa9fa4d14c6baf8d52ebe86c5c', //USDC.e
      ] })
  },
  bsquared: {
    tvl: sumTokensExport({ owners: bsquared_owners, tokens: [
      ADDRESSES.bsquared.USDT,
      '0xe544e8a38add9b1abf21922090445ba93f74b9e5', //USDC
      '0x7537c1f80c9e157ed7afd93a494be3e1f04f1462', //BSTONE
      '0x796e4d53067ff374b89b2ac101ce0c1f72ccaac2',//uBTC
      ] })
  },
};
