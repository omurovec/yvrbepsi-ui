interface Config {
  PREFERRED_TOKEN: string;
  RECEIVER_ADDRESS: string;
  NATIVE_CHAIN_ID: number;
  MAX_FEE: number;
  MAX_PRICE_IMPACT: number;
  ORDER: "RECOMMENDED" | "CHEAPEST";
  NATIVE_TOKENS: `0x${string}`[];
  SOLANA_TREASURY_ADDRESS: string;
  TARGET_CHAIN: number;
  TARGET_TOKEN: string;
}

const config: Config = {
  PREFERRED_TOKEN: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI (Polygon)
  RECEIVER_ADDRESS: "0xdcFec2D0A98160ed5E4D10b6e1e21469d0B5e609",
  NATIVE_CHAIN_ID: 137, // Polygon
  MAX_FEE: 0.05,
  MAX_PRICE_IMPACT: 0.05,
  ORDER: "RECOMMENDED",
  NATIVE_TOKENS: [
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC (Polygon)
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT (Polygon)
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI (Polygon)
    "0x0000000000000000000000000000000000001010", // MATIC (Polygon)
  ],
  SOLANA_TREASURY_ADDRESS: "3LdYWARn2sHc7EDgtxfbfTCjeqB988VFWAQkzmGoAZAc",
  TARGET_CHAIN: 137, // Polygon
  TARGET_TOKEN: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // DAI (Polygon)
};

export default config;
