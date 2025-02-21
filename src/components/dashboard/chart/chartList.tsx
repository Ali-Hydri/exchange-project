import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ChartImg from "@/assets/images/Chart 35.png";

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

const ChartBoxTable = styled.table`
  direction: rtl;
  width: 100%;
  height: 92%;
  
  @media (max-width: 768px) {
    th:nth-child(n + 4),
    td:nth-child(n + 4) {
      display: none;
    }
  }
`;

const ChartListTableHead = styled.th`
  height: 40px;
  border-bottom: 2px solid gray;
  
`;

const ChartBoxTableBody = styled.th`
  height: 40px;
`;

const ChartList = styled.div`
  grid-column: 1 / span 3;
  grid-row: 6;
  background-color: #101828;
  border-radius: 16px;
  direction: rtl;
  font-size: 24px;
  padding: 20px;
  @media (max-width: 768px) {
    height: auto;
    grid-column: 1;
    grid-row: 10;
    display: grid;
    font-size: 18px;
  }
`;

const AllCoins = styled.div`
  text-align: center;
  color: #0257ea;
  font-size: 24px;
  margin-bottom: 5px;
`;

const Chart = () => {
  const [coins, setCoins] = useState([]);
  const exchangeRate = 90000;

  console.log(coins);

  useEffect(() => {
    const getCoins = async () => {
      const coinGeekoUrl =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
      try {
        const coinsRes = await axios.get(coinGeekoUrl);
        setCoins(coinsRes.data);
      } catch (err) {
        console.log(err);
        alert("خطا در ارتباط با شبکه");
      }
    };
    getCoins();
  }, []);

  return (
    <>
      <ChartList>
        <span>آخرین تراکنش ها</span>
        <br />
        <br />

        <ChartBoxTable>
          <thead>
            <tr>
              <ChartListTableHead>نام</ChartListTableHead>
              <ChartListTableHead>آخرین قیمت</ChartListTableHead>
              <ChartListTableHead>24h</ChartListTableHead>
              <ChartListTableHead>قیمت به تومن</ChartListTableHead>
              <ChartListTableHead>مقدار 24h</ChartListTableHead>
              <ChartListTableHead>7 روز گذشته</ChartListTableHead>
            </tr>
          </thead>
          <tbody>
            {coins ? (
              coins.slice(0, 11).map((coin: CoinType, idx) => {
                return (
                  <tr key={idx}>
                    <ChartBoxTableBody>
                      <Image
                        src={coin.image}
                        width={28}
                        height={28}
                        alt="ICN"
                      />{" "}
                      {coin.symbol.toUpperCase()}{" "}
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>
                      {coin.current_price} $
                    </ChartBoxTableBody>
                    <ChartBoxTableBody
                      style={{
                        color:
                          coin.market_cap_change_percentage_24h > 0
                            ? "#00966D"
                            : "#ff0000",
                      }}
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                      {coin.price_change_24h > 0 ? "▲" : "▼"}
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>
                      {coin.current_price * exchangeRate} تومن
                    </ChartBoxTableBody>
                    <ChartBoxTableBody style={{ direction: "ltr" }}>
                      {coin.market_cap_change_24h}
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>
                      <Image src={ChartImg} alt="Chart" />
                    </ChartBoxTableBody>
                  </tr>
                );
              })
            ) : (
              <span>loading...</span>
            )}
          </tbody>
          {/* <br /> */}
        </ChartBoxTable>
        <AllCoins>مشاهده همه</AllCoins>
      </ChartList>
    </>
  );
};

export default Chart;
