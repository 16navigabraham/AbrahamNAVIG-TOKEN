import { AppKit } from '@reown/appkit'

export const appkit = new AppKit({
  sdkVersion: 'react-universal-1.0.0',
  networks: [{
    id: 84532,
    name: 'Base Sepolia',
    rpcUrls: {
      default: { http: ['https://sepolia.base.org'] },
      public: { http: ['https://sepolia.base.org'] }
    },
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18
    }
  }],
  projectId: 'AbrahamNAVIG-TOKEN'
})

export type AppkitType = typeof appkit