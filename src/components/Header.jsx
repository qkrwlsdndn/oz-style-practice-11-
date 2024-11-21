import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  width: 100%;
`;

const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>OZ코딩스쿨</Title>
      <MenuContainer>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
        <MenuItem>내클래스</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
}
