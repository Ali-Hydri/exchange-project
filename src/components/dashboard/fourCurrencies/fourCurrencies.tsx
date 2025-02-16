import styled from "styled-components";
import Image from 'next/image'
import { useEffect, useState } from "react";
import axios from "axios";





const FourCurrenciesContainer = styled.div`
    grid-column: 2 / span 2;
    grid-row: 3 ;
    border-radius: 16px;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    display: grid;
    display: flex;
    gap: 20px;

`
const Coins = styled.div`
    background-color: #101828;
    width: 100%;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    gap: 8px;
    font-size: 24px;
`





const FourCurrencies = () => {
    const [coins, setCoins] = useState([])



    useEffect(() => {
        const getCoins = async () => {

            const coinGeekoUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
            const coinsRes = await axios.get(coinGeekoUrl)

            setCoins(coinsRes.data)
        }
        getCoins()
    }, [])



    return (


<FourCurrenciesContainer>

{coins ? coins.slice(0, 4).map((coin: any, idx) => {
    return (
        <Coins key={idx}>
            <tr>
                <Coins><Image src={coin.image} width={50} height={50} alt="ICN" /> {coin.symbol.toUpperCase()} </Coins>
                <Coins>{coin.current_price} $</Coins>
            </tr>
        </Coins>
    )
})
    :
    <span>loading...</span>
}

</FourCurrenciesContainer>

    );
};

export default FourCurrencies