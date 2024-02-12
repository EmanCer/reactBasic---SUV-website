import { CORE_CONCEPTS } from "../../data";
import "./DescriptionSection.css";

function CoreConcept({ title, description, button, image, order }) {
  return order % 2 === 0 ? (
    <li className="core-concept-item core-concept-item-b">
      <div className="core-concept-item-img">
        <img src={image} alt={title} />
      </div>
      <div className="core-concept-item-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">{button}</button>
      </div>
    </li>
  ) : (
    <li className="core-concept-item">
      <div className="core-concept-item-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">{button}</button>
      </div>
      <div className="core-concept-item-img">
        <img src={image} alt={title} />
      </div>
    </li>
  );
}

export default function DescriptionSection() {
  return (
    <section name="features" className="core-model section">
      <div className="core-model-intro">
        <h3>The Journey starts here</h3>
        <p>Discover SUV</p>
      </div>
      <ul className="core-concept-list">
        {CORE_CONCEPTS.map((el) => (
          <CoreConcept key={el.title} {...el} />
        ))}
      </ul>
    </section>
  );
}
