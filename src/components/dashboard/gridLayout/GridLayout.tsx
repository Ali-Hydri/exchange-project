import styled from "styled-components";
import NavBar from "../navbar/navbar";
import React from "react";
import ChartBox from "@/components/dashboard/chart/chartBox";
import Chart from "@/components/dashboard/chart/chartList";
import FourCurrencies from "@/components/dashboard/fourCurrencies/fourCurrencies";
import LvlBox from "@/components/dashboard/lvl/levelBox";
import GradeBox from "../grade/gradeBox";
import BlueCard from "../card/BlueCard";
import TradeBox from "../trade/tradeBox";
import TopBar from "@/components/dashboard/topbar/topbar";
import SideBar from "../sidebar/sidebar";
const GridLayout = () => {
  return (
    <>
      <NavBar />
      <GridContainer>
        <Chart />
        <ChartBox />
        <FourCurrencies />
        <LvlBox />
        <GradeBox />
        <BlueCard />
        <TradeBox />
        <TopBar />
        <SideBar />
      </GridContainer>
    </>
  );
};

export default GridLayout;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: 70px auto 170px 500px 205px 917px;
  grid-template-columns: auto auto auto min-content;
  color: white;
  background-color: #000b1d;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    display: grid;
    gap: 60px;
    width: 100%;
    padding: 10px 50px;
  }
`;
