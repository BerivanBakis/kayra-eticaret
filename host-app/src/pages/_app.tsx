import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppHeader from '@/components/layout/Header';
import { Provider } from 'react-redux';
import { store } from '../../shared/store/store';

export default function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <AppHeader/>
      <Component {...pageProps} />
    </Provider>
  );
}
