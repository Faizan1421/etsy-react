import "./App.css";
import HeroSection from "./components/HeroSection";
import PopularCatSection from "./components/PopularCatSection";

import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <HeroSection />
      <PopularCatSection/>
    </Layout>
  );
}

export default App;
