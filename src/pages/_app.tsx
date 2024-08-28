// src/pages/_app.tsx

import { useRouter } from 'next/router';
import '@/app/globals.css';
import Navbar from '../components/component/Navbar';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const is404Page = router.pathname === '/404';

  return (
    <>
      {!is404Page && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;