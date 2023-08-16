import HeaderDiv, { HeaderContainer, InsideHeaderDiv } from './HeaderStyles';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
});

export default function Header() {
  return (
    <HeaderContainer className={kanit.className}>
      <HeaderDiv direction="right">
        <InsideHeaderDiv $sidebar="flex-end">
          <h1>LEONARDO LIMA</h1>
        </InsideHeaderDiv>
      </HeaderDiv>
      <HeaderDiv direction="left">
        <InsideHeaderDiv $sidebar="flex-start">
          <h1>FULLSTACK DEVELOPER</h1>
        </InsideHeaderDiv>
      </HeaderDiv>
    </HeaderContainer>
  );
}
