import React, { useState } from 'react';
import StyledGlassLayer from './GlassLayerStyles';
import Logo from '../Logo';
import LogoContainer from '../Logo/LogoStyles';
import LogoProfile from '../LogoProfile';
import ArticleDiv from '../ArticleDiv';
import DownButton from '../Buttons/ButtonDown';

export default function GlassLayer() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <StyledGlassLayer>
      <div>
        {!isClicked ? (
          <LogoContainer onClick={(e) => handleClick(e)}>
            <Logo />
          </LogoContainer>
        ) : (
          <>
            <LogoContainer>
              <ArticleDiv
                align="flex-start"
                justify="flex-start"
                textAlign="left"
              >
                Saudações! Sou um desenvolvedor entusiasta do Brasil com um amor
                pelo xadrez, programação e leitura. Eu me destaco nos desafios
                emocionantes que a programação apresenta, assim como faço em
                cada jogada estratégica em uma partida de xadrez. Quando não
                estou mergulhando em linhas de código, frequentemente me
                encontrará absorto em um bom livro, explorando novos mundos e
                ideias.
              </ArticleDiv>
              <LogoProfile />
              <ArticleDiv align="flex-end" justify="flex-end" textAlign="right">
                Minha jornada pelo mundo do desenvolvimento tem sido cativante,
                marcada por uma variedade de projetos e tecnologias. Seja
                criando interfaces de usuário intuitivas, explorando as
                complexidades de bancos de dados ou oferecendo suporte a
                projetos globais, estou dedicado a trazer inovação e eficiência
                para tudo que faço.
              </ArticleDiv>
            </LogoContainer>
          </>
        )}
      </div>
    </StyledGlassLayer>
  );
}
