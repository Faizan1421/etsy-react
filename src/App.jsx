import "./App.css";
import HeroSection from "./components/HeroSection";
import OccasianalCatSection from "./components/OccasianalCatSection";
import PopularCatSection from "./components/PopularCatSection";

import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <HeroSection />
      <PopularCatSection/>
      <OccasianalCatSection/>
    </Layout>
  );
}

export default App;
