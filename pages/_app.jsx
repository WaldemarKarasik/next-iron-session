import { SWRConfig } from "swr";
import fetch from "../lib/fetchJson";
import HeaderAndAside from "../components/HeaderAndAside";
import "../styles/global.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <div className="grid-container">
        <HeaderAndAside />
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
