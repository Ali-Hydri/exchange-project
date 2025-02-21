import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartBoxTable = styled.table`
  direction: rtl;
  width: 100%;
  height: 95%;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 100%;
    height: 108px;
    justify-content: center;
    align-items: center;
  }
`;

const ChartBoxTableHead = styled.th`
  height: 40px;
  border-bottom: 2px solid gray;
`;

const ChartBoxContainer = styled.div`
  grid-column: 2 / span 2;
  grid-row: 4;
  border-radius: 16px;
  background-color: #101828;
  display: flex;
  padding: 24px 16px;

  @media (max-width: 768px) {
    height: 100%;
    grid-column: 1;
    grid-row: 4;
    display: grid;
  }
`;

const ChartBoxTableBody = styled.th`
  height: 40px;
`;

const ChartRightBox = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f172a;
  padding: 20px;
  border-radius: 10px;
  color: white;
  max-width: 400px;
  margin: auto;
`;

const ChartTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Amount = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const TetherAmount = styled.p`
  font-size: 16px;
  color: #ccc;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 10px;
`;

const LegendColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) => props.color};
`;

const data = {
  labels: ["بیتکوین", "شیبا", "EOS", "اتریوم", "تتر", "ترون"],
  datasets: [
    {
      data: [20, 15, 15, 20, 15, 15],
      backgroundColor: [
        "#E63946",
        "#F4A261",
        "#E9C46A",
        "#264653",
        "#2A9D8F",
        "#457B9D",
      ],
      borderWidth: 0,
    },
  ],
};

const TheChart = styled.div`
  width: 220px;
  height: 220px;
`;
const options = {
  plugins: {
    legend: { display: false },
  },
  cutout: "70%",
};

const ChartLeftBox = styled.div`
  display: grid;
  width: 40%;
  direction: rtl;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ChartButtonsBox = styled.div`
  display: flex;
  direction: rtl;
  gap: 20px;
  background-color: #101828;
  border: none;
  align-items: end;
  padding-bottom: 10px;
  border-bottom-left-radius: 8px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ChartBoxButton = styled.button`
  display: flex;
  direction: rtl;
  gap: 20px;
  background-color: #0257ea;
  color: #fff;
  border-radius: 8px;
  width: 100px;
  height: 32px;
  justify-content: center;
  border: none;
  padding-top: 6px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #01458e;
  }
`;

const ChartBoxButtonWithdraw = styled(ChartBoxButton)`
  background-color: #101828;
  border: 1px solid #0257ea;
  color: #0257ea;
  &:hover {
    background-color: #1f2737;
  }
`;

const ChartBoxList = styled.div``;

const ChartBox = () => {
  const [coins, setCoins] = useState([]);

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
    <ChartBoxContainer>
      <ChartLeftBox>
        <span style={{ fontWeight: "bold", fontSize: 19 }}>
          موجودی سهام شما
        </span>

        <ChartBoxList>
          <ChartBoxTable>
            <thead>
              <tr>
                <ChartBoxTableHead>نام سهم</ChartBoxTableHead>
                <ChartBoxTableHead>موجودی</ChartBoxTableHead>
                <ChartBoxTableHead>مبلغ</ChartBoxTableHead>
              </tr>
            </thead>
            <tbody>
              {coins ? (
                coins.slice(0, 6).map((coin: CoinType, idx) => {
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
                      <ChartBoxTableBody
                        style={{
                          color:
                            coin.market_cap_change_percentage_24h > 0
                              ? "#00966D"
                              : "#ff0000",
                        }}
                      >
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                        {coin.price_change_24h > 0 ? "▲" : "▼"}
                      </ChartBoxTableBody>
                      <ChartBoxTableBody>
                        {coin.current_price} $
                      </ChartBoxTableBody>
                    </tr>
                  );
                })
              ) : (
                <span>loading...</span>
              )}
            </tbody>
          </ChartBoxTable>
        </ChartBoxList>
        <ChartButtonsBox>
          <ChartBoxButton>واریز</ChartBoxButton>
          <ChartBoxButtonWithdraw>برداشت</ChartBoxButtonWithdraw>
          <ChartBoxButton>کارت هدیه</ChartBoxButton>
        </ChartButtonsBox>
      </ChartLeftBox>
      <ChartRightBox>
        <ChartContainer>
          <ChartTitle>موجودی کل دارایی های شما</ChartTitle>
          <TheChart>
            <Doughnut
              data={data}
              options={options}
              style={{ width: 100, height: 100 }}
            />
          </TheChart>
          <Amount>100/000/000 تومان</Amount>
          <TetherAmount>۲۳۵۴ تتر</TetherAmount>
          <LegendContainer>
            {data.labels.map((label, index) => (
              <LegendItem key={index}>
                <LegendColor color={data.datasets[0].backgroundColor[index]} />
                {label}
              </LegendItem>
            ))}
          </LegendContainer>
        </ChartContainer>
      </ChartRightBox>
    </ChartBoxContainer>
  );
};

export default ChartBox;
