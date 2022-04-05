import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const template = {
    primaryColor: "#622726",
    secondaryColor: "#f4f2df",
    altColor: "white",
    backgroundColor: "white",
    secondaryBackgroundColor: "#f0f0f0",
    textColor: "#303030",
    secondaryTextColor: "gray",
    BorderColor: "lightgray",
  };
  return <Component {...pageProps} template={template} />;
}

export default MyApp;
