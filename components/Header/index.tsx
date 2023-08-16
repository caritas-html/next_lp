import HeaderDiv, { HeaderContainer, InsideHeaderDiv } from './HeaderStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderDiv direction="right">
        <InsideHeaderDiv $sidebar="flex-end">
          <h1>Leonardo Lima</h1>
        </InsideHeaderDiv>
      </HeaderDiv>
      <HeaderDiv direction="left">
        <InsideHeaderDiv $sidebar="flex-start">
          <h1>FullStack Developer</h1>
        </InsideHeaderDiv>
      </HeaderDiv>
    </HeaderContainer>
  );
}
