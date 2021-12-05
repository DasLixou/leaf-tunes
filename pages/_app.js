import { Provider as JotaiProvider } from "jotai";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <JotaiProvider>
      <Component {...pageProps} />
    </JotaiProvider>
  );
};

export default MyApp;
