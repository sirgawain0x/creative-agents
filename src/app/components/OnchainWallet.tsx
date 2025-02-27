"use client";

import {
  ConnectWallet,
  Wallet,
  WalletAdvanced,
  WalletAdvancedAddressDetails,
  WalletAdvancedTokenHoldings,
  WalletAdvancedTransactionActions,
  WalletAdvancedWalletActions,
} from "@coinbase/onchainkit/wallet";
import { Avatar, Name } from "@coinbase/onchainkit/identity";

interface OnchainWalletProps {
  className?: string;
  buttonClassName?: string;
}

export default function OnchainWallet({
  className,
  buttonClassName,
}: OnchainWalletProps) {
  return (
    <div className={className}>
      <Wallet>
        <ConnectWallet>
          <Avatar className="w-6 h-6 mr-2" />
          <Name />
        </ConnectWallet>
        <WalletAdvanced>
          <WalletAdvancedWalletActions />
          <WalletAdvancedAddressDetails />
          <WalletAdvancedTransactionActions />
          <WalletAdvancedTokenHoldings />
        </WalletAdvanced>
      </Wallet>
    </div>
  );
}
