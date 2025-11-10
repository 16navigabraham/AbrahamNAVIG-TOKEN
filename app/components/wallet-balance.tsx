"use client"

import { useAppKit, utils } from "@reown/appkit"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { RefreshCw } from "lucide-react"

const ERC20_ABI = [
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
] as const

interface WalletBalanceProps {
  contractAddress: string
  walletAddress?: `0x${string}`
}

export default function WalletBalance({ contractAddress, walletAddress }: WalletBalanceProps) {
  const { erc20 } = useAppKit()
  const {
    balance,
    decimals,
    symbol,
    isLoading
  } = erc20.useToken(contractAddress, walletAddress)

  const formattedBalance = balance ? utils.formatUnits(balance, decimals || 18) : "0"

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">👛</span>
          Your Balance
        </CardTitle>
        <Button
          onClick={() => erc20.refresh(contractAddress)}
          variant="outline"
          size="sm"
          className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-32 mx-auto bg-white/20" />
              <Skeleton className="h-4 w-16 mx-auto bg-white/20" />
            </div>
          ) : (
            <>
              <p className="text-3xl font-bold text-white mb-2">
                {Number(formattedBalance).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 6,
                })}
              </p>
              <p className="text-blue-200">{symbol || "TOKEN"}</p>
            </>
          )}
        </div>

        <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
          <p className="text-sm text-blue-200 mb-1">Wallet Address</p>
          <p className="font-mono text-xs text-white break-all">{walletAddress || "Not connected"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
