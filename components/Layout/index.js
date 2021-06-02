import Head from 'next/head';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>imthinhvu.dev</title>
        <meta property="og:title" content="imthinhvu.dev" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-w-1/4 max-w-2xl h-screen mx-auto flex flex-col p-8">
        <Header />
        <Body>{children}</Body>
        <Footer />
      </div>
    </>
  );
}
