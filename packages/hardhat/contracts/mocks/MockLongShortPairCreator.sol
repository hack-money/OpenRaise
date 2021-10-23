pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../interfaces/ILongShortPair.sol";

contract MockLongShortPairCreator is ILongShortPairCreator {

    /**
     * @notice Creates a longShortPair contract and associated long and short tokens.
     * @dev The caller must approve this contract to transfer `prepaidProposerReward` amount of collateral.
     * @param params Constructor params used to initialize the LSP. Key-valued object with the following structure:
     *    pairName: Name of the long short pair contract.
     *     expirationTimestamp: unix timestamp of when the contract will expire.
     *     collateralPerPair: how many units of collateral are required to mint one pair of synthetic tokens.
     *     priceIdentifier: registered in the DVM for the synthetic.
     *     longSynthName: Name of the long synthetic tokens to be created.
     *     longSynthSymbol: Symbol of the long synthetic tokens to be created.
     *     shortSynthName: Name of the short synthetic tokens to be created.
     *     shortSynthSymbol: Symbol of the short synthetic tokens to be created.
     *     collateralToken: ERC20 token used as collateral in the LSP.
     *     financialProductLibrary: Contract providing settlement payout logic.
     *     customAncillaryData: Custom ancillary data to be passed along with the price request. If not needed, this
     *                             should be left as a 0-length bytes array.
     *     prepaidProposerReward: Proposal reward forwarded to the created LSP to incentivize price proposals.
     *     optimisticOracleLivenessTime: Optimistic oracle liveness time for price requests.
           optimisticOracleProposerBond: optimistic oracle proposer bond for price requests.
     * @return lspAddress the deployed address of the new long short pair contract.
     * @notice Created LSP is not registered within the registry as the LSP uses the Optimistic Oracle for settlement.
     * @notice The LSP constructor does a number of validations on input params. These are not repeated here.
     */
    function createLongShortPair(CreatorParams memory params) external override returns (ILongShortPair) {
      ILongShortPair lsp = new LongShortPair(params);
    }
}