// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A personal website for Bao Nguyen, a web developer, showcasing his projects, resume, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baoopn.com" />
        <meta property="og:title" content="All About Bao!" />
        <meta property="og:description" content="A personal website for Bao Nguyen the web developer showcasing his projects, resume, and more." />
        <meta property="og:image" content="https://cdn.baoopn.com/data/img/Bao_cover.jpg" />
        <meta property="og:image:alt" content="Og Image Alt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://baoopn.com" />
        <meta name="twitter:title" content="All About Bao!" />
        <meta name="twitter:description" content="A personal website for Bao Nguyen the web developer showcasing his projects, resume, and more." />
        <meta name="twitter:image" content="https://cdn.baoopn.com/data/img/Bao_cover.jpg" />
        <meta name="twitter:image:alt" content="Twitter Image Alt" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}