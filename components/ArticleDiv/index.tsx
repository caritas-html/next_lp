import StyledArticle from './StyledArticle';
import { Roboto } from 'next/font/google';

interface ArticleDivProps {
  children: React.ReactNode;
  align: string;
  justify: string;
  textAlign: string;
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function ArticleDiv({
  children,
  align,
  textAlign,
  justify,
}: ArticleDivProps) {
  return (
    <>
      <StyledArticle
        align={align}
        justify={justify}
        textAlign={textAlign}
        className={roboto.className}
      >
        <p>{children}</p>
      </StyledArticle>
    </>
  );
}
