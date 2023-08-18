import SlideAnimation from '../SlideDivAnim';
import ParagraphContainer, { AboutLayer } from './AboutStyles';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
});

export default function About() {
  return (
    <AboutLayer>
      <section>
        <article>
          <SlideAnimation>
            <ParagraphContainer
              background="/div-bg-01.svg"
              textAlign="left"
              className={kanit.className}
            >
              <p>
                Tenho uma trajetória diversificada e enriquecedora como
                desenvolvedor fullstack, abrangendo experiências em várias
                tecnologias e projetos desafiadores.
              </p>
            </ParagraphContainer>
          </SlideAnimation>
          <ParagraphContainer
            background="/div-bg-01.svg"
            textAlign="right"
            className={kanit.className}
          >
            <p>
              Em uma startup de ensino, atuei como Peer Coach da biblioteca
              ReactJS com Typescript, Axios, Redux, ContextAPI e Webpack. Meu
              papel envolvia orientar alunos no aprendizado do framework,
              realizar correções de projetos e conduzir revisões de código
              diariamente.
            </p>
          </ParagraphContainer>
          <ParagraphContainer
            background="/div-bg-02.svg"
            textAlign="left"
            className={kanit.className}
          >
            <p>
              Na CI&T, contribuí como Front-end em um projeto para a Coca-Cola
              North America, desenvolvendo uma plataforma web para dicas de
              consumo alimentar. Utilizei VueJS 3.0, Composition API, GraphQL
              API, AWS, AEM (Adobe Experience Manager), Less e Webpack para
              entregar um produto de alta qualidade. Assumi a posição de
              desenvolvedor referência em um projeto interno de gestão de OKRs,
              liderando estagiários. Aqui, trabalhei com Vue 3.0 (Composition
              API + Setup Script), Vite, Typescript, NodeJS, TypeORM, MySQL,
              Firebase, Sass, Jest (testes unitários) e Cypress.io (testes E2E).
              Além disso, contribuí em um projeto paralelo da empresa,
              oferecendo suporte técnico utilizando ReactJS, NextJS e NestJS.
            </p>
          </ParagraphContainer>
          <ParagraphContainer
            background="/div-bg-03.svg"
            textAlign="right"
            className={kanit.className}
          >
            <p>
              Minha experiência também inclui um período na Kabum como Fullstack
              Developer, onde desenvolvi CRUDs para a área interna do setor
              comercial, utilizando Perl e aprendendo conceitos de Java
              simultaneamente.
            </p>
          </ParagraphContainer>
          <ParagraphContainer
            background="/div-bg-04.svg"
            textAlign="left"
            className={kanit.className}
          >
            <p>
              Na ZDZCODE, atuei como Fullstack, sendo responsável por aplicações
              em VUE3 e .NET CORE, utilizando EF CORE e MySQL Server, além de
              desenvolver Razor Pages em C#. Minha abordagem é humilde, porém
              técnica, buscando constantemente desafios para expandir minhas
              habilidades e entregar soluções de alto padrão.
            </p>
          </ParagraphContainer>
        </article>
      </section>
    </AboutLayer>
  );
}
