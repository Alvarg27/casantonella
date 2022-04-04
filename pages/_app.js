import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const template = {
    primaryColor: "",
    secondaryColor: "",
    backgroundColor: "",
    textColor: "",
    secondaryTextColor: "",
    BorderColor: "",
  };
  return <Component {...pageProps} template={template} />;
}

export default MyApp;
