import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ChartImg from "@/assets/images/Chart 35.png";

const ChartBoxTable = styled.table`
  direction: rtl;
  width: 100%;
  height: 95%;
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
    height: 100%;
    grid-column: 1;
    grid-row: 10;
    display: grid;
    font-size: 18px;
  }
`;

const Chart = () => {
  const [coins, setCoins] = useState([]);

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
        // alert("خطا در ارتباط با شبکه")
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
              coins.slice(0, 11).map((coin: any, idx) => {
                return (
                  <tr key={idx}>
                    <ChartBoxTableBody>
                      <Image
                        src={coin.image}
                        width={22}
                        height={22}
                        alt="ICN"
                      />{" "}
                      {coin.symbol.toUpperCase()}{" "}
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>
                      {coin.current_price} $
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>
                      {coin.price_change_percentage_24h}%
                    </ChartBoxTableBody>
                    <ChartBoxTableBody>تومن</ChartBoxTableBody>
                    <ChartBoxTableBody>
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
        </ChartBoxTable>
      </ChartList>
    </>
  );
};

export default Chart;
