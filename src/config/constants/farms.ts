import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SLOGE',
    lpAddresses: {
      97: '',
      2000: '0x2D6794DeB4A4C622DC318Aa5C1bA983CBC83e957',
    },
    tokenSymbol: 'SLOGE',
    tokenAddresses: {
      97: '',
      2000: '0x2D6794DeB4A4C622DC318Aa5C1bA983CBC83e957',
    },
    quoteTokenSymbol: QuoteToken.SLOGE,
    quoteTokenAdresses: contracts.sloge,
  },
  {
    pid: 3,
    lpSymbol: 'REDROCKET-WDOGE LP',
    lpAddresses: {
      97: '',
      2000: '0xF610E0128A26CB84bf49840fDd6497D9eB3CfAe7',// V1
      // 2000: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
    },
    tokenSymbol: 'REDROCKET',
    tokenAddresses: {
      97: '',
      2000: contracts.redrocket[2000],

    },
    quoteTokenSymbol: QuoteToken.REDROCKET,
    quoteTokenAdresses: contracts.redrocket,
  },
  {
    pid: 4,
    lpSymbol: 'USDC-WDOGE LP',
    lpAddresses: {
      97: '',
      2000: '0xcbB6c82511Ed2B6BB51886bF072e11068e256A60',// V1
      // 2000: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      2000: contracts.usdc[2000],

    },
    quoteTokenSymbol: QuoteToken.WDOGE,
    quoteTokenAdresses: contracts.wdoge,
  }
  // ,
  // {
  //   pid: 5,
  //   lpSymbol: 'SLOGE-WDOGE LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0x1Dc776555150D40A055Bc986a5E12Cf888987809',// V1
  //     // 2000: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
  //   },
  //   tokenSymbol: 'SLOGE',
  //   tokenAddresses: {
  //     97: '',
  //     2000: contracts.sloge[2000],

  //   },
  //   quoteTokenSymbol: QuoteToken.WDOGE,
  //   quoteTokenAdresses: contracts.wdoge,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'WDEFI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0x6254C5be216B7E17ff27E82d06e96BAdF799885B', // V1
  //     // 2000: '0xb2B8B015414a30E56Fe79347Fc1563729d539288'// V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'WDEFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0x35c9FE405B85757d531B6340265D70ce5f6d2132', // V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD', // V1
  //     // 2000: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE'// V2
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x55d398326f99059fF775485246999027B3197955', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'WOOP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04', // V1
  //     // 2000: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04' // V2
  //   },
  //   tokenSymbol: 'WOOP',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'WOOP-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     // 2000: '0x123354f9C3f9D35602d95231723A3A463815b9c4',// V1
  //     2000: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
  //   },
  //   tokenSymbol: 'WOOP',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',

  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'WDEFI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     // 2000: '0x6254C5be216B7E17ff27E82d06e96BAdF799885B', // V1
  //     2000: '0xb2B8B015414a30E56Fe79347Fc1563729d539288'// V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'WDEFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0x35c9FE405B85757d531B6340265D70ce5f6d2132', // V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     // 2000: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD', // V1
  //     2000: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE'// V2
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x55d398326f99059fF775485246999027B3197955', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'WOOP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     // 2000: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04', // V1
  //     2000: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04' // V2
  //   },
  //   tokenSymbol: 'WOOP',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  //   {
  //    pid: 3,
  //    lpSymbol: 'KIWI-USDT LP',
  //    lpAddresses: {
  //      97: '',
  //      2000: '0xab2c09F73FB62B033C6B5CfDb929C422033B0619',
  //    },
  //    tokenSymbol: 'KIWI',
  //    tokenAddresses: {
  //      97: '',
  //      2000: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
  //    },
  //    quoteTokenSymbol: QuoteToken.USDT,
  //    quoteTokenAdresses: contracts.usdt,
  //    isCommunity: false,
  //  },
  //  {
  //   pid: 4,
  //   lpSymbol: 'KIWI-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     2000: '0xaC8532CD60CF37440e00c86c0EFDe31C1Dbcf099',
  //   },
  //   tokenSymbol: 'KIWI',
  //   tokenAddresses: {
  //     97: '',
  //     2000: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  //   isCommunity: false,
  // },
  // {
  //     pid: 6,
  //     lpSymbol: 'KIWI-CHS LP',
  //     lpAddresses: {
  //       97: '',
  //       2000: '0xF5Cfb60d7265f423736cF69b20953AC745d8d223',
  //     },
  //     tokenSymbol: 'KIWI',
  //     tokenAddresses: {
  //       97: '',
  //       2000: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
  //     },
  //     quoteTokenSymbol: QuoteToken.CHS,
  //     quoteTokenAdresses: contracts.chs,
  //   },


]

export default farms
