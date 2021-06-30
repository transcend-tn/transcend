import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
