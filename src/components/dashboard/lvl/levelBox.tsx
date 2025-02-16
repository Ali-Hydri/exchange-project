import styled from "styled-components";
import Image from 'next/image'
import Lvl from "@/assets/images/LvlBox 1261153037.png"



const LvlBoxContainer = styled.div`
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



const LvlBox = () => {

    return (

        <LvlBoxContainer>
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
        </LvlBoxContainer>


    );
};


export default LvlBox