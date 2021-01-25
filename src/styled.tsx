import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: pink;
  padding: 0 100px 0 100px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
`;

export const LogoImg = styled.img`
  width: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  & li {
    margin-left: 15px;
    & :link,
    :visited,
    :active {
      text-decoration: none;
    }
    & :hover {
      color: grey;
    }
  }
`;

export const Main = styled.div`
  padding: 0 150px 0 150px;
`;

export const MainImg = styled.div`
  width: 200px;
  height: auto;
  margin: auto;

  & img {
    max-width: 100%;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(10px, 1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
`;

export const Item = styled.div`
  width: 150px;
  height: auto;
  margin: auto;

  & img {
    max-width: 100%;
  }
`;

export const GridContainer = styled.div`
   {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
  }
`;
export const Aside = styled.aside`
   {
    border-left: black 1px solid;
    background-color: lightgrey;
    & :nth-child(n) {
      padding-top: 10px;
    }
  }
`;
