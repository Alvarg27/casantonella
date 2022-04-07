import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const template = {
    primaryColor: "#622726",
    secondaryColor: "#f4f2df",
    altColor: "white",
    backgroundColor: "#111214",
    secondaryBackgroundColor: "#f0f0f0",
    altBackgroundColor: "#24272a",
    textColor: "lightgray",
    secondaryTextColor: "gray",
    borderColor: "#24272a",
  };
  return <Component {...pageProps} template={template} />;
}

export default MyApp;
