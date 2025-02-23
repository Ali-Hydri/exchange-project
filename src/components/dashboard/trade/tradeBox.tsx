import styled from "styled-components";
import Image from "next/image";
import Wallet from "@/assets/images/empty-wallet.png";
import IRN from "@/assets/images/IRN.png";
import BlueLine from "@/assets/images/BlueLine 56.png";
import BigLine from "@/assets/images/BigLine 55.png";
import Line from "@/assets/images/Line 57.png";
import TetherIcn from "@/assets/images/tether.png";
import arrow from "@/assets/images/arrow-swap.png";
import circles from "@/assets/images/Circles.png";
import Trade from "@/components/services/tradeData";

const TradeBox = () => {
  return (
    <LeftBox>
      <LeftBoxHead>
        <LeftBoxHeadText1>
          <span>تعیین قیمت</span>
          <Image
            src={BigLine}
            alt="BigLine"
            width={200}
            style={{ margin: "-4px" }}
          />
        </LeftBoxHeadText1>
        <Image src={Line} alt="Line" height={30} style={{ paddingRight: 6 }} />
        <LeftBoxHeadText2>
          <span>معامله سریع</span>
          <Image src={BlueLine} alt="BlueLine" style={{ margin: "-5px" }} />
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
      <LeftBoxButton onClick={Trade}>معامله</LeftBoxButton>

      <LeftBoxFooter>
        <LeftBoxFooterImg>
          <Image src={circles} alt="3circles" />
        </LeftBoxFooterImg>
        <LeftBoxFooterText>
          <span>معاملات باز</span>
        </LeftBoxFooterText>
      </LeftBoxFooter>
    </LeftBox>
  );
};

export default TradeBox;


const LeftBox = styled.div`
  grid-column: 1;
  grid-row: 3 / span 2;
  background-color: #101828;
  border-radius: 16px;
  text-align: center;
  padding: 20px;
  font-size: 30px;
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    height: 100%;
    grid-column: 1;
    grid-row: 8;
  }
`;

const LeftBoxHead = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LeftBoxHeadText1 = styled.div`
  display: grid;
  font-size: 30px;
  gap: 14px;
`;

const LeftBoxHeadText2 = styled.div`
  display: grid;
  font-size: 30px;
  gap: 14px;
`;

const LeftBoxInput1 = styled.div`
  display: grid;
  text-align: right;
  direction: rtl;
  color: #cfd4d2;
`;

const LeftBoxInput1Text1 = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 19px;
  align-items: center;
`;
const LeftBoxInput = styled.input`
  background: none;
  border-radius: 8px;
  border: 1px solid #707070;
  height: 48px;
  font-size: 18px;
  padding-right: 8px;
  color: #fff;
  border: none;
  width: 90%;
  border: none;
  outline: none;
  box-shadow: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
const LeftBoxInputDiv = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-radius: 8px;
  padding-right: 10px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const LeftBoxInput1Text2 = styled.div`
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LeftBoxArrow = styled.div`
  justify-content: center;
`;

const LeftBoxInput2 = styled.div`
  display: grid;
  text-align: right;
  color: #cfd4d2;
  direction: rtl;
`;

const LeftBoxButton = styled.button`
  background-color: #0257ea;
  border: none;
  border-radius: 8px;
  height: 50px;
  color: #fff;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    background-color: #01458e;
  }
`;

const LeftBoxInput2Text = styled.div`
  font-size: 19px;
`;

const LeftBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftBoxFooterImg = styled.div``;
const LeftBoxFooterText = styled.div`
  font-size: 25px;
`;
