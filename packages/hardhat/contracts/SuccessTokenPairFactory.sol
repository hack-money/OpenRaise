pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "./interfaces/ILongShortPairCreator.sol";
import "./interfaces/ISuccessTokenLongShortPairFinancialProductLibrary.sol";

import "./FixedPoint.sol";

contract SuccessTokenPairFactory {
  using FixedPoint for FixedPoint.Unsigned;

  ILongShortPairCreator public immutable pairCreator;
  ISuccessTokenLongShortPairFinancialProductLibrary public immutable successTokenFPL;

  constructor(ILongShortPairCreator pairCreator_, ISuccessTokenLongShortPairFinancialProductLibrary successTokenFPL_) {
    pairCreator = pairCreator_;
    successTokenFPL = successTokenFPL_;
  }

  function createLongShortPair(ILongShortPairCreator.CreatorParams calldata params, uint256 strikePrice, uint256 basePercentage) public returns (ILongShortPair) {
    ILongShortPair lsPair = pairCreator.createLongShortPair(params);
    successTokenFPL.setLongShortPairParameters(address(lsPair), strikePrice, basePercentage);

    return lsPair;
  }

  function createLongShortPairAndMint(ILongShortPairCreator.CreatorParams calldata params, uint256 strikePrice, uint256 basePercentage, uint256 tokensToCreate) external returns (ILongShortPair) {
    ILongShortPair lsPair = createLongShortPair(params, strikePrice, basePercentage);

    uint256 collateralUsed = FixedPoint.Unsigned(tokensToCreate).mulCeil(FixedPoint.Unsigned(params.collateralPerPair)).rawValue;
    params.collateralToken.transferFrom(msg.sender, address(this), collateralUsed);
    params.collateralToken.approve(address(lsPair), collateralUsed);

    lsPair.create(tokensToCreate);

    lsPair.longToken().transfer(msg.sender, tokensToCreate);
    lsPair.shortToken().transfer(msg.sender, tokensToCreate);

    return lsPair;
  }
}
