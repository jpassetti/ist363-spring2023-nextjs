// `pages/_app.js`
import '../sass/global.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}