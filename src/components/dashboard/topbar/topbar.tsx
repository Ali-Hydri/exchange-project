import styled from "styled-components";
import Image from "next/image";
import warningItem from "@/assets/images/warning-2.png";

const TopBarContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2;
  direction: rtl;
  padding: 20px;
  font-size: 30px;
  margin-right: 113px;
  border-radius: 16px;
  background-color: #101828;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 108px;
    grid-column: 1;
    grid-row: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: auto;
    margin-top: 70px;
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
`;
const ImageBox = styled.div`
  padding-left: 5px;
`;
const LeftButton = styled.div`
  background-color: #0257ea;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  width: 103px;
  height: 23px;
  cursor: pointer;
  &:hover {
    background-color: #01458e;
  }
  text-align: center;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <RightText>
        <ImageBox>
          <Image src={warningItem} alt="WarningIcn" width={30} height={30} />
        </ImageBox>
        <div>
          برای بهره مندی از خدمات صرافی لازم است احراز هویت خود را تکمیل کنید!
        </div>
      </RightText>
      <LeftButton>احراز هویت</LeftButton>
    </TopBarContainer>
  );
};

export default TopBar;
