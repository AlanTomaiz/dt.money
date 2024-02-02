import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";

import logoSvg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />
        <HeaderButton>Nova transação</HeaderButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
