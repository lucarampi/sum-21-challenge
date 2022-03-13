import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import  HeaderBootstrap from "../components/HeaderBootstrap";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
