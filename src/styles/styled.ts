import styled from 'styled-components';

// HEADER
export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // background-color: white;
  height: 80px;
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1280px;
  border: 1px solid red;
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
  & :hover {
    color: grey;
    cursor: pointer;
  }

  & li {
    margin: 0 5px 0 5px;
  }
`;

export const NavButton = styled.button`
  border: none;
  background: transparent;
  margin-left: 5px;
  text-transform: uppercase;
  outline: none;
`;

// MAIN
export const Main = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: lightgrey;
`;

// HOME
export const HomeImg = styled.div`
  width: 200px;
  margin: auto;

  & img {
    max-width: 100%;
  }
`;

// debería ser ul si lo uso también para elephantList
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 60px;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 40px;
`;

export const Caption = styled.p`
  text-align: right;
  grid-column: 2/ 4;
  font-style: italic;
`;

// PREVIEW
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardText = styled.div`
  text-align: left;
  padding: 30px;
  & :nth-child(n) {
    padding-bottom: 8px;
  }
`;

// export const Aside = styled.aside`
//    {
//     border-left: black 1px solid;
//     background-color: lightgrey;
//     & :nth-child(n) {
//       padding-top: 10px;
//     }
//   }
// `;
