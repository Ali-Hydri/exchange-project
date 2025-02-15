import styled from "styled-components";
import Image from 'next/image'
import warningItem from "@/assets/images/warning-2.png";
import navbarLeft from "@/assets/images/navbarLeft 1261154177.png";
import navLogo from "@/assets/images/Logo.png";
import arrow from "@/assets/images/arrow-swap.png";
import circles from "@/assets/images/Circles.png";
import Icn from "@/assets/images/_Nav item base.png"
import SideItem from "@/assets/images/Frame 1261154222.png"
import card from "@/assets/images/Card 1261154210.png"
import Lvl from "@/assets/images/LvlBox 1261153037.png"
import Grades from "@/assets/images/Emtiazha 1261154275.png"
import Grade from "@/assets/images/Grade 1261154271.png"
import Wallet from "@/assets/images/empty-wallet.png"
import IRN from "@/assets/images/IRN.png"
import BlueLine from "@/assets/images/BlueLine 56.png"
import BigLine from "@/assets/images/BigLine 55.png"
import Line from "@/assets/images/Line 57.png"
import TetherIcn from "@/assets/images/tether.png"
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "@/assets/images/Chart 35.png"
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);




const GridLayout = () => {

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
        <Wrapper>
            <NavBar>
                <NavRight>
                    <NavLogo>
                        <Image src={navLogo} alt="Logo" width={40} height={40} />
                        توبیتکس
                    </NavLogo>
                    <NavRightText>
                        <NavItem>بازار توبیتکس</NavItem>
                        <NavItem>راهنمای استفاده</NavItem>
                        <NavItem>بلاگ</NavItem>
                        <NavItem>درباره ی ما</NavItem>
                        <NavItem>تماس با ما</NavItem>
                        <NavItem>دستیار هوشمند</NavItem>
                    </NavRightText>
                </NavRight>
                <NavLeft>
                    <Image src={navbarLeft} alt="WarningIcn" width={120} height={23} />
                </NavLeft>
            </NavBar>

            <Body>
                <SideBar>
                    <SideBarIcn>
                        <Image src={Icn} alt="NavItem" width={30} height={30} />
                        <Image src={SideItem} alt="NavItem" width={30} height={400} />
                    </SideBarIcn>
                </SideBar>

                <GridContainer>


                    <TopBar>
                        <RightText>
                            <ImageBox>
                                <Image src={warningItem} alt="WarningIcn" width={30} height={30} />
                            </ImageBox>
                            <div>برای بهره مندی از خدمات صرافی لازم است احراز هویت خود را تکمیل کنید!</div>
                        </RightText>
                        <LeftButton>احراز هویت</LeftButton>
                    </TopBar>
                    <FourCurrencies>
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
                            <span>loading...</span>}

                    </FourCurrencies>

                    <ChartBox>
                        <ChartLeftBox>
                            <span style={{ fontWeight: "bold", fontSize: 19 }}>موجودی سهام شما</span>

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
                                        {coins ? coins.slice(0, 6).map((coin: any, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <ChartBoxTableBody><Image src={coin.image} width={22} height={22} alt="ICN" /> {coin.symbol.toUpperCase()} </ChartBoxTableBody>
                                                    <ChartBoxTableBody>8.25%</ChartBoxTableBody>
                                                    <ChartBoxTableBody>{coin.current_price} $</ChartBoxTableBody>
                                                </tr>
                                            )
                                        })
                                            :
                                            <span>loading...</span>
                                        }
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
                                    <Doughnut data={data} options={options} style={{ width: 100, height: 100 }} />
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

                    </ChartBox>

                    <LevelsBox>
                        <LvlBox>
                            <LvlTextBox>
                                <LvlText1>
                                    <span>سطح کاربری</span>
                                </LvlText1>
                                <LvlText2>
                                    <span>ارتقا سطح کاربری </span>
                                </LvlText2>
                            </LvlTextBox>
                            <Item8Img>
                                <Image src={Lvl} alt="level" />
                            </Item8Img>
                        </LvlBox>
                        <GradeBox>
                            <GradeRightBox>
                                <GradeRightBoxText>امتیاز کسب شده شما تا کنون</GradeRightBoxText>
                                <GradeRightBoxImg>
                                    <Image src={Grades} alt="Emtiazha" />
                                </GradeRightBoxImg>
                            </GradeRightBox>
                            <GradeLeftBox>
                                <Image src={Grade} alt="Emtiaz" />
                            </GradeLeftBox>
                        </GradeBox>
                    </LevelsBox>

                    <BlueCard>
                        <Image src={card} alt="cart" />
                    </BlueCard>
                    <LeftBox>
                        <LeftBoxHead>
                            <LeftBoxHeadText1>
                                <span>تعیین قیمت</span>
                                <Image src={BigLine} alt="BigLine" width={200} style={{ margin: '-4px' }} />
                            </LeftBoxHeadText1>
                            <Image src={Line} alt="Line" height={30} style={{ paddingRight: 6 }} />
                            <LeftBoxHeadText2>
                                <span>معامله سریع</span>
                                <Image src={BlueLine} alt="BlueLine" style={{ margin: '-5px' }} />
                            </LeftBoxHeadText2>
                        </LeftBoxHead>
                        <LeftBoxInput1>
                            <LeftBoxInput1Text1>
                                <span>پرداخت میکنم:</span>
                                <LeftBoxInput1Text2>
                                    <span>موجودی: ۲/۵۰۰/۰۰۰ IRT</span>
                                    <Image src={Wallet} alt="Wallet" width={23} height={23} />
                                </LeftBoxInput1Text2>
                            </LeftBoxInput1Text1>

                            <LeftBoxInputDiv>
                                <Image src={IRN} alt="IRN" width={27} height={27} />
                                <LeftBoxInput type="number" placeholder="تومان" />
                            </LeftBoxInputDiv>
                        </LeftBoxInput1>

                        <LeftBoxArrow>
                            <Image src={arrow} alt="arrow" width={30} height={30} />
                        </LeftBoxArrow>

                        <LeftBoxInput2>
                            <LeftBoxInput2Text>
                                <span>دریافت میکنم:</span>
                            </LeftBoxInput2Text>
                            <LeftBoxInputDiv>
                                <Image src={TetherIcn} alt="TetherIcn" width={27} height={27} />
                                <LeftBoxInput type="number" placeholder="تتر" />
                            </LeftBoxInputDiv>
                        </LeftBoxInput2>
                        <LeftBoxButton>معامله</LeftBoxButton>



                        <LeftBoxFooter>
                            <LeftBoxFooterImg>
                                <Image src={circles} alt="3circles" />
                            </LeftBoxFooterImg>
                            <LeftBoxFooterText>
                                <span>معاملات باز</span>
                            </LeftBoxFooterText>
                        </LeftBoxFooter>

                    </LeftBox>

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

                                {coins ? coins.slice(0, 11).map((coin: any, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <ChartBoxTableBody><Image src={coin.image} width={22} height={22} alt="ICN" /> {coin.symbol.toUpperCase()} </ChartBoxTableBody>
                                            <ChartBoxTableBody>{coin.current_price} $</ChartBoxTableBody>
                                            <ChartBoxTableBody>{coin.price_change_percentage_24h}%</ChartBoxTableBody>
                                            <ChartBoxTableBody>تومن</ChartBoxTableBody>
                                            <ChartBoxTableBody>{coin.market_cap_change_24h}</ChartBoxTableBody>
                                            <ChartBoxTableBody><Image src={Chart} alt="Chart" /></ChartBoxTableBody>

                                        </tr>
                                    )
                                })
                                    :
                                    <span>loading...</span>
                                }
                            </tbody>

                        </ChartBoxTable>
                    </ChartList>

                    <ChartBoxFooter>مشاهده همه</ChartBoxFooter>

                </GridContainer>
            </Body>
        </Wrapper>
    );
}

export default GridLayout;




const Wrapper = styled.div``
const Body = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
`


const GridContainer = styled.div`
  /* display: grid; */
  gap: 10px;
  /* grid-template-rows: 70px auto 170px 500px 205px 917px ; */
  /* grid-template-columns: auto auto auto min-content; */
  color : white;
  padding-top: 80px;
  padding-right: 60px;
`;


const LevelsBox = styled.div`
    display: flex;
    gap: 10px;
margin: 10px 0;
`

const NavBar = styled.div`
        background-color: #101828;
        direction: rtl;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color : white;
        position :fixed ;
        height: 70px;  
        border: 5px solid #000B1D;

        `

const NavRight = styled.div`
        display: flex;
        align-items: center;
    `
const NavLeft = styled.div`
padding-left: 15px;
`

const NavLogo = styled.div`
text-align: center;
padding-right: 25px;
font-size: 24px;
display: flex;
gap: 5px;
font-weight: bold;
align-items: center;
    `
const NavRightText = styled.div`
display: flex;
gap: 20px;
font-size: 14px;
color: #fff;
padding-right: 65px;
cursor: pointer;

    `
const NavItem = styled.div`&:hover {color: #c2c2c2;}`

const SideBar = styled.div`
  width: 106px;
  background-color: #101828;
  border-radius: 16px;
  color : white;
  padding-top: 90px;
  `;


const SideBarIcn = styled.div`
display: grid;
justify-content: center;
gap: 10px;
`


const LeftBox = styled.div`
    grid-column: 1 ;
    grid-row: 3 / span 2;
    background-color: #101828;
    border-radius: 16px;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    display: grid;
    gap: 20px;
  `;

const LeftBoxHead = styled.div`
display: flex;
justify-content: center;
width: 100%;
  `

const LeftBoxHeadText1 = styled.div`
display: grid ;
font-size: 30px;
gap: 14px;

  `

const LeftBoxHeadText2 = styled.div`
display: grid ;
font-size: 30px;
gap: 14px;
  `




const LeftBoxInput1 = styled.div`
    display: grid ;
    text-align: right;
    direction: rtl;
    color: #CFD4D2;
`

const LeftBoxInput1Text1 = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    `
const LeftBoxInput = styled.input`
background: none;
border-radius: 8px;
border: 1px solid #707070;
height: 48px;
font-size: 18px;
padding-right: 8px;
color: #fff;
border: none;

`
const LeftBoxInputDiv = styled.div`
    width: 100%;
    border: 1px solid gray;
    border-radius: 8px;
    padding-top: 10px ;
    padding-right: 10px;
`

const LeftBoxInput1Text2 = styled.div`
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px; 

    `

const LeftBoxArrow = styled.div`
        justify-content: center;
    `


const LeftBoxInput2 = styled.div`
    display: grid ;
    text-align: right;
    color: #CFD4D2;
    direction: rtl;
`

const LeftBoxButton = styled.button`
        background-color: #0257EA;
        border: none;
        border-radius: 8px;
        height: 40px;
        color: #fff;
        cursor: pointer;
        &:hover {background-color: #01458e;}
    `

const LeftBoxInput2Text = styled.div`
    font-size: 14px;
    `


const LeftBoxFooter = styled.div`
display: flex;
justify-content: space-between;

`
const LeftBoxFooterImg = styled.div``
const LeftBoxFooterText = styled.div`
font-size: 20px;
`







const FourCurrencies = styled.div`
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


const ChartBox = styled.div`
  grid-column: 2 / span 2;
  grid-row: 4;  
  border-radius: 16px;
  background-color: #101828;
  display: flex;
  padding: 24px 16px;
  
  `


const ChartRightBox = styled.div`
width: 60%;
height: 100%;
`
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
            backgroundColor: ["#E63946", "#F4A261", "#E9C46A", "#264653", "#2A9D8F", "#457B9D"],
            borderWidth: 0,
        },
    ],
};

const TheChart = styled.div`
    width: 220px;
    height: 220px;
`
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
`


const ChartButtonsBox = styled.div`
display: flex;
direction: rtl;
gap: 20px;
background-color: #101828;
border: none;
align-items:end ;
padding-bottom: 10px;
border-bottom-left-radius: 8px;
width: 80%;


`


const ChartBoxButton = styled.button`
display: flex;
direction: rtl;
gap: 20px;
background-color: #0257EA;
color: #fff;
border-radius: 8px;
width: 100px;
height: 32px;
justify-content: center;
border: none;
padding-top: 6px;
font-size: 14px;
cursor: pointer;
&:hover {background-color: #01458e;}
`

const ChartBoxButtonWithdraw = styled(ChartBoxButton)`
    background-color: #101828;
    border: 1px solid #0257EA;
    color: #0257EA;
    &:hover {background-color: #1f2737;}
`


const ChartBoxList = styled.div`
`





const TopBar = styled.div`
  direction: rtl;
  padding: 20px;
  font-size: 30px;
  border-radius: 16px;
  background-color: #101828;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const RightText = styled.div`
display: flex;
align-items: center;

`
const ImageBox = styled.div`
padding-left: 5px;
`
const LeftButton = styled.div`
  background-color: #0257EA;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  width: 103px;
  height: 23px;
  cursor: pointer;
  &:hover {background-color: #01458e;}
text-align: center;
`


const BlueCard = styled.div`
  grid-column: 1 ;
  grid-row: 5;
  width: 100%;
`

const LvlBox = styled.div`
  grid-column: 2 ;
  grid-row: 5;
  border-radius: 16px;
  background-color: #101828;
  text-align: center;
  display: grid;
  gap: 40px;
  padding-top: 20px;
  width: 100%;
`

const LvlTextBox = styled.div`
display:flex;
text-align: center;
justify-content: center;
justify-content: space-between;
direction: rtl;
background-color: #101828;
`
const LvlText1 = styled.div`
font-size: 20px;
padding-right: 20px;
color: #fff;
background-color: #101828;

`
const LvlText2 = styled.div`
font-size: 14px;
padding-left: 20px;
padding-top: 7px;
color: #E7E9E8;
background-color: #101828;

`
const Item8Img = styled.div``


const GradeBox = styled.div`
  grid-column: 3 ;
  grid-row: 5;
  width: 100%;
  border-radius: 16px;
  background-color: #101828;
  display: flex;
  direction: rtl;
  justify-content: space-between;
`

const GradeRightBox = styled.div`
gap: 80px;
padding-top: 20px;
padding-right: 10px;
display: grid;`
const GradeRightBoxText = styled.div``
const GradeRightBoxImg = styled.div`
`
const GradeLeftBox = styled.div`
padding-top: 100px;
padding-left: 30px;
`


const ChartBoxTable = styled.table`
    direction: rtl;
    width: 100%;
    height: 95%;
    `

const ChartBoxTableHead = styled.th`
height: 40px;
border-bottom: 2px solid gray;
`

const ChartListTableHead = styled.th`
height: 40px;
border-bottom: 2px solid gray;
`

const ChartBoxTableBody = styled.th`
height: 40px;
`



const ChartList = styled.div`
  grid-column: 1 / span 3;
  grid-row: 6;
  background-color: #101828;
  border-radius: 16px;
  direction: rtl;
  font-size: 24px;
    padding: 20px;

  `

const ChartBoxFooter = styled.div`
    text-align: center;
    color: #0257EA;
    font-size: 32px;
    padding: 10px 0px;
  `
