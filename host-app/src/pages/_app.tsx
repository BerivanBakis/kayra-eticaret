import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppHeader from '@/components/layout/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  );
}
