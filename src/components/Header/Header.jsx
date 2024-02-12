import suvHero from "../../assets/suvHero.png";
import NavBar from "./Navbar";
import "./Header.css";

const rav4Description = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Praesentium dolor doloremque aperiam error laudantium, maiores doloribus odit dicta illo.",
  "minus inventore voluptas reiciendis quasi culpa magnam, reprehenderit dolorem nesciunt!",
];

const subTitle = [
  "Nothing can stop you now",
  "Every day is a new Adventure",
  "Discover new ways to drive",
];

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  return (
    <header name="header" className="header">
      <NavBar />
      <div className="navbar-hero">
        <h1>SUV</h1>
        <h2>{subTitle[getRandom(subTitle.length)]}</h2>
        <p>{rav4Description[getRandom(rav4Description.length)]}</p>
        <img id="rav4ModelImg" src={suvHero} alt="Suv" />
      </div>
    </header>
  );
}
