import shantaImg from "../assets/Project-Images/Shanta Complex Solar/shanta complex.jpg";
import britanniaImg from "../assets/Project-Images/Britannia Rooftop/Britannia.jpg";
import daburImg from "../assets/Project-Images/Dabur Nepal/dabur.jpg";
import sunmaiImg from "../assets/Project-Images/Sunmai water rooftop/sunmai.png";
import vishnuSadanImg from "../assets/Project-Images/Vishnu Sadan Solar PV/VISNU SADAN.png";

export const projects = [
  {
    id: "shanta-complex",
    name: "Shanta Complex PV Plant",
    org: "commercial",
    location: "Putalisadak, Kathmandu",
    capacity: "Capacity: 50.7 kWp",
    status: "Completed",
    year: "2024",
    summary:
      "A dense urban rooftop build on roughly 392 sq. ft., generating about 73.81 MWh annually for a commercial building.",
    image: shantaImg,
    specs: [
      { label: "Rooftop Area", value: "~392 sq. ft." },
      { label: "Annual Generation", value: "~73.81 MWh" },
      { label: "10-Yr Savings", value: "~NPR 811,800" },
    ],
  },
  {
    id: "britannia",
    name: "Britannia Nepal Solar PV Project",
    org: "industrial",
    location: "Jeetpur Simara",
    capacity: "Capacity: 300 kWp",
    status: "Completed",
    year: "2026",
    summary:
      "A rooftop industrial solar system of 489 modules (615 Wp each) paired with two string inverters totaling 250 kW, supplying three-phase power to the facility's distribution system and reducing dependence on grid electricity.",
    image: britanniaImg,
    specs: [
      { label: "Panels / Equipment", value: "489 × 615 Wp Solar Modules" },
      { label: "Inverter", value: "2 String Inverters (250 kW total)" },
      { label: "Modules", value: "489 units" },
      { label: "Owner / Client", value: "Britannia Nepal" },
    ],
  },
  {
    id: "dabur-nepal",
    name: "Dabur Nepal Pvt. Ltd.",
    org: "industrial",
    location: "Jeetpur Simara",
    capacity: "Capacity: 976 kWp",
    status: "Completed",
    year: "2025–26",
    summary:
      "A 736 kWp rooftop system plus a 240 kWp ground-mounted array, together generating around 1,010 MWh a year for the plant.",
    image: daburImg,
    specs: [
      { label: "Rooftop Area", value: "~7,416 sq. ft." },
      { label: "Annual Generation", value: "~1,010 MWh" },
      { label: "Monthly Savings", value: "~NPR 700,000" },
      { label: "10-Yr Savings", value: "~NPR 84M" },
    ],
  },
  {
    id: "sunmai-water",
    name: "Sunmai Water Solar PV Project",
    org: "industrial",
    location: "Budhashanti, Jhapa",
    capacity: "Capacity: 50.73 kWp",
    status: "Completed",
    year: "2024",
    summary:
      "114 modules feeding a 40 kW string inverter, supplying 3-phase power straight into the facility's distribution system.",
    image: sunmaiImg,
    specs: [
      { label: "Rooftop Area", value: "~6,000 sq. ft." },
      { label: "Modules", value: "114 × 445 Wp" },
      { label: "Inverter", value: "40 kW string" },
    ],
  },
  {
    id: "vishnu-sadan",
    name: "Vishnu Sadan Solar PV Project",
    org: "commercial",
    location: "Pingalasthan Road, Kathmandu",
    capacity: "Capacity: 50.7 kWp",
    status: "Completed",
    year: "2024",
    summary:
      "A rooftop system on around 392 sq. ft. of roof space, producing roughly 73.81 MWh of clean power a year.",
    image: vishnuSadanImg,
    specs: [
      { label: "Rooftop Area", value: "~392 sq. ft." },
      { label: "Annual Generation", value: "~73.81 MWh" },
      { label: "10-Yr Savings", value: "~NPR 811,800" },
    ],
  },
];

export const filters = [
  { key: "all", label: "All Projects" },
  { key: "commercial", label: "Commercial" },
  { key: "industrial", label: "Industrial" },
];