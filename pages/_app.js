import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContextProvider";
import DataContextProvider from "../context/DataContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <div className="text-xl  w-100  ">
          <Component {...pageProps} />
        </div>
      </DataContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
