import { useState } from "react";
import { MODELS } from "../../data";
import ModelTabButton from "./ModelTabButton";

import "./ModelSelector.css";

export default function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState();

  function handleSelect(selectedButton) {
    setSelectedModel(selectedButton);
  }

  let tabContent = (
    <div className="model-selector-cards">
      <div className="model-card">
        <h4 className="model-card-title">
          Select a model to discover Features and Performance
        </h4>
      </div>
    </div>
  );

  if (selectedModel) {
    tabContent = (
      <div className="model-selector-cards">
        <div className="model-card">
          <h4 className="model-card-title">{MODELS[selectedModel].title}</h4>
          <img
            src={MODELS[selectedModel].image}
            alt={MODELS[selectedModel].title}
          ></img>
          <div className="model-card-price-consume">
            <h4>${MODELS[selectedModel].price}</h4>
            <h4>{MODELS[selectedModel].consumption}</h4>
            <p>Base MSRP</p>
            <p>Est. MPG</p>
          </div>
          <div className="model-card-description">
            <p>{MODELS[selectedModel].description1}</p>
            <p>{MODELS[selectedModel].description2}</p>
            <p>{MODELS[selectedModel].description3}</p>
          </div>
          <div className="model-card-cta">
            <a href="...">See More Features</a>
            <a href="...">Build</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section name="models" className="model-selector-section section">
      <div className="model-selector-header">
        <h3>The choice is yours</h3>
        <p>4 unique grades to choose from:</p>
      </div>
      <menu className="model-selector-list">
        <ModelTabButton
          isSelected={selectedModel === "pe"}
          onSelect={() => handleSelect("pe")}
        >
          Suv PE
        </ModelTabButton>
        <ModelTabButton
          isSelected={selectedModel === "pex"}
          onSelect={() => handleSelect("pex")}
        >
          Suv PEX
        </ModelTabButton>
        <ModelTabButton
          isSelected={selectedModel === "greatLand"}
          onSelect={() => handleSelect("greatLand")}
        >
          Suv Great Land
        </ModelTabButton>
        <ModelTabButton
          isSelected={selectedModel === "limited"}
          onSelect={() => handleSelect("limited")}
        >
          Suv Limited
        </ModelTabButton>
      </menu>
      {tabContent}
    </section>
  );
}
