import efficiencyImg from "./assets/efficiency.jpg";
import styleImg from "./assets/style.jpg";
import techImg from "./assets/tech.jpg";
import suvPEModel from "./assets/suvPE.png";
import suvPEXModel from "./assets/suvPEX.png";
import suvLandModel from "./assets/suvLand.png";
import suvLimitedModel from "./assets/suvLimited.png";

export const CORE_CONCEPTS = [
  {
    image: efficiencyImg,
    title: "Power and efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pellentesque dui. In elit nunc, condimentum at cursus eget, placerat eu dui. In ut orci erat. Donec a fermentum mauris. Suspendisse elementum nec nisl at suscipit. Sed vel suscipit felis. Integer nec ultrices arcu. Aenean lectus mi, sodales pulvinar tellus.",
    button: "Explore Performance",
    order: 1,
  },
  {
    image: styleImg,
    title: "Style and comfort",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pellentesque dui. In elit nunc, condimentum at cursus eget, placerat eu dui. In ut orci erat. Donec a fermentum mauris. Suspendisse elementum nec nisl at suscipit. Sed vel suscipit felis. Integer nec ultrices arcu. Aenean lectus mi, sodales pulvinar tellus.",
    button: "Explore Interior",
    order: 2,
  },
  {
    image: techImg,
    title: "Technology and Safety",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pellentesque dui. In elit nunc, condimentum at cursus eget, placerat eu dui. In ut orci erat. Donec a fermentum mauris. Suspendisse elementum nec nisl at suscipit. Sed vel suscipit felis. Integer nec ultrices arcu. Aenean lectus mi, sodales pulvinar tellus.",
    button: "Explore Technology",
    order: 3,
  },
];

export const SPECS = [
  {
    specLabel: "HORSEPOWER",
    specValue: "203",
  },
  {
    specLabel: "Epa-Est MPG (city/highway)",
    specValue: "Up to 57/35 ",
  },
  {
    specLabel: "ENGINE",
    specValue: "2.6L 6-Cylinder",
  },
  {
    specLabel: "TRANSMISSION",
    specValue: "Automatic",
  },
  {
    specLabel: "DRIVETRAIN",
    specValue: "AWD",
  },
  {
    specLabel: "GROUND CLEARANCE",
    specValue: "Up to 10 Inches",
  },
];

export const MODELS = {
  pe: {
    image: suvPEModel,
    title: "Suv LE",
    price: 30000,
    consumption: "41/38",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a interdum lacus, in viverra ipsum.",
    description2:
      "Duis tempor, nunc non ultrices aliquam, sem tortor pharetra lacus, id fermentum magna sapien laoreet lorem.",
    description3: "Id fermentum magna sapien laoreet lorem.",
  },
  pex: {
    image: suvPEXModel,
    title: "Suv PEX",
    price: 34945,
    consumption: "38/35",
    description1: "Id fermentum magna sapien laoreet lorem.",
    description2:
      "Duis tempor, nunc non ultrices aliquam, sem tortor pharetra lacus, id fermentum magna sapien laoreet lorem.",
    description3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a interdum lacus, in viverra ipsum.",
  },
  greatLand: {
    image: suvLandModel,
    title: "Suv Great Land",
    price: 37385,
    consumption: "45/40",
    description1: "Id fermentum magna sapien laoreet lorem.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a interdum lacus, in viverra ipsum.",
    description3:
      "Duis tempor, nunc non ultrices aliquam, sem tortor pharetra lacus, id fermentum magna sapien laoreet lorem.",
  },
  limited: {
    image: suvLimitedModel,
    title: "Suv Limited",
    price: 40030,
    consumption: "50/42",
    description1:
      "Duis tempor, nunc non ultrices aliquam, sem tortor pharetra lacus, id fermentum magna sapien laoreet lorem.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a interdum lacus, in viverra ipsum.",
    description3: "Id fermentum magna sapien laoreet lorem.",
  },
};
