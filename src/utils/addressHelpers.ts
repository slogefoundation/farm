import addresses from 'config/constants/contracts'

const chainId = 2000

export const getKiwiAddress = () => {
  return addresses.sloge[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return "0x75f034A67939874c177ce030cA6A4Ee1a9E16DE9"
}
export const getWbnbAddress = () => {
  return addresses.wdoge[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}
