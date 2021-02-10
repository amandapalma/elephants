import styled from 'styled-components';

// HEADER
export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 80px;
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1280px;
  padding: 0 10px 0 10px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  text-transform: uppercase;
`;

export const LogoImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  & :nth-child(n) {
    margin: 0 2px 0 2px;
  }
`;

export const NavButton = styled.button`
  border: none;
  background: transparent;
  outline: none;

  & :hover {
    color: grey;
    cursor: pointer;
  }

  & :nth-child(n) {
    display: flex;
    align-items: center;
  }
`;

export const MoreButton = styled(NavButton)`
  color: DarkTurquoise;
  & :nth-child(n) {
    font-weight: 900;
  }
`;

// MAIN
export const Main = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 20px;
`;

// HOME
export const HomeImg = styled.div`
  width: 200px;
  margin: auto;

  & img {
    max-width: 100%;
  }
`;

// LIST - HOME
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-gap: 60px;
  justify-content: center;
  margin-top: 40px;
`;

export const GridItem = styled.div`
  width: 100%;
`;

export const Caption = styled.p`
  margin-top: 40px;
  font-style: italic;
`;

// PREVIEW
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const CardText = styled.div`
  text-align: left;
  padding: 30px;
  & :nth-child(n) {
    padding-bottom: 8px;
  }
`;

//FOOTER
export const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  border-top: 1px solid silver;
  padding: 10px;

  & :nth-child(n) {
    font-size: 9px;
  }
`;
