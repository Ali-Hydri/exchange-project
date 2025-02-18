import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

type CoinType = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  ath_date: string;
  atl_date: string;
  roi: null;
  last_updated: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  atl: number;
  atl_change_percentage: number;
};

const FourCurrenciesContainer = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3;
  border-radius: 16px;
  text-align: center;
  /* padding: 20px; */
  font-size: 30px;
  display: flex;
  gap: 20px;
  height: 130px;
  /* margin-top: 30px; */
  @media (max-width: 768px) {
    height: 100%;
    grid-column: 1;
    grid-row: 3;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const Coins = styled.div`
  background-color: #101828;
  width: 100%;
  border-radius: 8px;
  display: grid;
  justify-content: center;
  font-size: 24px;
  margin-top: 20px;
  height: 140px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const CoinIcon = styled.div`
  margin-top: -25px;
`;
const FourCurrencies = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getCoins = async () => {
      try {
        const coinGeekoUrl =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
        const coinsRes = await axios.get(coinGeekoUrl);

        setCoins(coinsRes.data);
      } catch (err) {
        console.log(err);
        // alert("خطا در ارتباط با شبکه")
      }
    };
    getCoins();
  }, []);

  return (
    <FourCurrenciesContainer>
      {coins ? (
        coins.slice(0, 4).map((coin: CoinType, idx) => {
          return (
            <Coins key={idx}>
              <CoinIcon>
                <Image src={coin.image} width={50} height={50} alt="ICN" />{" "}
              </CoinIcon>
              {coin.symbol.toUpperCase()}
              <span>{coin.current_price} $</span>
            </Coins>
          );
        })
      ) : (
        <span>loading...</span>
      )}
    </FourCurrenciesContainer>
  );
};

export default FourCurrencies;
