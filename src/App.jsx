import "./App.css";
import Header from "./components/Header/Header";
import SpecsSection from "./components/SpecsSection/SpecsSection";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import ModelSelector from "./components/ModelSelectorSection/ModelSelector";
import FooterSection from "./components/FooterSection/FooterSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SpecsSection />
        <DescriptionSection />
        <ModelSelector />
        <FooterSection />
      </main>
    </>
  );
}
