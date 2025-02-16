import styled from "styled-components"

const Header = () => {

    const Wrapper = styled.div`
        height: 95px;
        background-color: #F23;
        direction: rtl;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    `

    const RightItems = styled.div`
        display: flex;
    `
    const LeftItems = styled.div``

    const LinksBox = styled.div`
        background-color: #f2f;
    `


    return (
        <Wrapper>
            <RightItems>
                <div>Icon and text</div>
                <LinksBox>links</LinksBox>
            </RightItems>
            <LeftItems>buttons</LeftItems>
        </Wrapper>
    )
}

export default Header