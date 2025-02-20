const RWA_STAKING = "0xdbd03d676e1cf3c3b656972f88ed21784372acab"
const RESERVE_STAKING = "0xba0ae7069f94643853fce3b8af7f55acbc11e397"
const SBTC = "0x094c0e36210634c3CfA25DC11B96b562E0b07624"
const STONE = "0x7122985656e38bdc0302db86685bb972b145bd3c"

const nELIXIR = "0x9fbC367B9Bb966a2A537989817A088AFCaFFDC4c"
const deUSD = "0x15700B564Ca08D9439C58cA5053166E8317aa138"
const sdeUSD = "0x5C5b196aBE0d54485975D1Ec29617D42D9198326"

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"

async function tvl(api) {
  // Get allowed stablecoins from RWA Staking
  const stablecoins = await api.call({    target: RWA_STAKING,    abi: 'address[]:getAllowedStablecoins',  })
  const ownerTokens = [
    [stablecoins, RWA_STAKING], 
    [[SBTC, STONE], RESERVE_STAKING],
    [[deUSD, sdeUSD, USDC, USDT], nELIXIR],
  ]
  return api.sumTokens({ ownerTokens})
}

module.exports = {
  methodology: "Counts total value locked in RWA Staking (stablecoins), Reserve Staking (SBTC and STONE) and nELIXIR vault contracts",
  ethereum: { tvl }
}