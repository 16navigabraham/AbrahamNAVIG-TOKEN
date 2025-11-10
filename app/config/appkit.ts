import { createAppkit } from '@reown/appkit'

export const appkit = createAppkit({
  chains: ['baseSepolia', 'base', 'mainnet', 'sepolia'],
  walletOptions: {
    defaultChain: 'baseSepolia',
    autoConnect: true,
  },
})

export type AppkitType = typeof appkit