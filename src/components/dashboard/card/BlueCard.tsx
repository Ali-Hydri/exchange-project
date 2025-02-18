import styled from "styled-components";
import Image from "next/image";
import card from "@/assets/images/Card 1261154210.png";

const Card = styled.div`
  grid-column: 1;
  grid-row: 5;
  width: 100%;
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 9;
    gap: 15px;
    justify-content: center;
    display: flex;
  }
`;

const BlueCard = () => {
  return (
    <Card>
      <Image src={card} alt="cart" />
    </Card>
  );
};

export default BlueCard;
