import { SPECS } from "../../data";
import "./SpecsSection.css";

export default function SpecsSection() {
  function SpecsList({ specLabel, specValue }) {
    return (
      <div className="specs-wrapper">
        <h4>{specLabel}</h4>
        <p>{specValue}</p>
      </div>
    );
  }
  return (
    <section name="specs" className="specs-section">
      <div className="specs-header">
        <h3>Suv Specs</h3>
        <button className="btn specs-btn">See All Specs</button>
      </div>

      <div className="specs-details">
        <SpecsList {...SPECS[0]} />
        <SpecsList {...SPECS[1]} />
        <SpecsList {...SPECS[2]} />
        <SpecsList {...SPECS[3]} />
        <SpecsList {...SPECS[4]} />
        <SpecsList {...SPECS[5]} />
      </div>
    </section>
  );
}
