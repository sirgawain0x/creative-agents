declare module "@unlock-protocol/paywall" {
  export interface PaywallConfig {
    locks: {
      [address: string]: {
        network: number;
      };
    };
    title?: string;
    pessimistic?: boolean;
    [key: string]: any;
  }

  export interface PaywallResponse {
    hash?: string;
    [key: string]: any;
  }

  export interface NetworkConfig {
    provider: string;
    unlockAddress: string;
    [key: string]: any;
  }

  export interface NetworkConfigs {
    [networkId: string]: NetworkConfig;
  }

  export class Paywall {
    constructor(networkConfigs: NetworkConfigs);
    loadCheckoutModal(config: PaywallConfig): Promise<PaywallResponse>;
    // Add other methods as needed
  }
}
