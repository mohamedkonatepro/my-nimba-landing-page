import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

// Utilisation de getInitialProps
MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  const appProps = await App.getInitialProps(context);
  return { ...appProps };
};
