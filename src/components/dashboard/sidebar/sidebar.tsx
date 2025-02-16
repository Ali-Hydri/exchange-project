import styled from "styled-components";
import Image from 'next/image'
import Icn from "@/assets/images/_Nav item base.png"
import SideItem from "@/assets/images/Frame 1261154222.png"


const SideBarContainer = styled.div`
  grid-column: 4;
  grid-row: 1 / span 7;
  width: 106px;
  justify-self: end;
  background-color: #101828;
  border-radius: 16px;
  color : white;
  padding-top: 90px;
  text-align: center;

  `;


const SideBarIcn = styled.div`
display: grid;
justify-content: center;
gap: 10px;
    
`





const SideBar = () => {
    return (
        <SideBarContainer>
            <SideBarIcn>
                <Image src={Icn} alt="SideItem" width={30} height={30} />
                <Image src={SideItem} alt="SideItem" width={30} height={400} />
            </SideBarIcn>
        </SideBarContainer>
    );
};

export default SideBar