import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: #111;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />
            <FeaturedProducts />
            <Footer />
        </>
    );
}

export default App;
