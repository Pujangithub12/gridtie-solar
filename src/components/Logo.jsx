import logoSrc from "../assets/company-logo/gridtie-logo.png";

export default function Logo({ className = "h-9 w-9" }) {
  return (
    <img
      src={logoSrc}
      alt="Gridtie Solar logo"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}