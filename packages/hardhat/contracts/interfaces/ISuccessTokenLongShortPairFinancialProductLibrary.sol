pragma solidity >=0.8.0 <0.9.0;

interface ISuccessTokenLongShortPairFinancialProductLibrary {
    struct SuccessTokenLongShortPairParameters {
        uint256 strikePrice;
        uint256 basePercentage;
    }

    /**
     * @notice Enables any address to set the strike price for an associated LSP.
     * @param longShortPair address of the LSP.
     * @param strikePrice the strike price for the covered call for the associated LSP.
     * @param basePercentage the base percentage of collateral per pair paid out to long tokens, expressed
     * with 1e18 decimals. E.g., a 50% base percentage should be expressed 500000000000000000, or 0.5 with
     * 1e18 decimals. The base percentage cannot be set to 0.
     * @dev Note: a) Any address can set the initial strike price b) A strike price cannot be 0.
     * c) A strike price can only be set once to prevent the deployer from changing the strike after the fact.
     * d) For safety, a strike price should be set before depositing any synthetic tokens in a liquidity pool.
     * e) longShortPair must expose an expirationTimestamp method to validate it is correctly deployed.
     */
    function setLongShortPairParameters(
        address longShortPair,
        uint256 strikePrice,
        uint256 basePercentage
    ) external;
}