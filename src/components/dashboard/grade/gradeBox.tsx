import styled from "styled-components";
import Image from 'next/image'
import Grades from "@/assets/images/Emtiazha 1261154275.png"
import Grade from "@/assets/images/Grade 1261154271.png"


const GradeBoxContainer = styled.div`
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



const GradeBox = () => {
    return(


        <GradeBoxContainer>
        <GradeRightBox>
            <GradeRightBoxText>امتیاز کسب شده شما تا کنون</GradeRightBoxText>
            <GradeRightBoxImg>
                <Image src={Grades} alt="Emtiazha" />
            </GradeRightBoxImg>
        </GradeRightBox>
        <GradeLeftBox>
            <Image src={Grade} alt="Emtiaz" />
        </GradeLeftBox>
    </GradeBoxContainer>

    );
};

export default GradeBox