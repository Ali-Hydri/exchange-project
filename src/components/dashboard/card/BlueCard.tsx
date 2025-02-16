import styled from "styled-components";
import Image from 'next/image'
import card from "@/assets/images/Card 1261154210.png"

const Card = styled.div`
  grid-column: 1 ;
  grid-row: 5;
  width: 100%;
`


const BlueCard = () => {
    return (

        <Card>
            <Image src={card} alt="cart" />
        </Card>

    );
};

export default BlueCard