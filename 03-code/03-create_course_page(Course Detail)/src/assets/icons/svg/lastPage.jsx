export default function LastPage({
  color = "#000000",
  size = "md",
  weight = 400,
}) {
  let iconSize = "";
  switch (size) {
    case "xs":
      iconSize = "16";
      break;
    case "sm":
      iconSize = "20";
      break;
    case "md":
      iconSize = "24";
      break;
    case "lg":
      iconSize = "28";
      break;
    case "xl":
      iconSize = "32";
      break;
    case "2xl":
      iconSize = "36";
      break;
    case "3xl":
      iconSize = "40";
      break;
    case "4xl":
      iconSize = "48";
      break;
    default:
      iconSize = "24";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={iconSize}
      viewBox="0 -960 960 960"
      width={iconSize}
      fill={color}
    >
      <path d="M376-480 236-620q-18-18-18-44t18-44q18-18 44-18t44 18l183 183q9 9 14 21t5 24q0 12-5 24t-14 21L324-252q-18 18-44 18t-44-18q-18-18-18-44t18-44l140-140Zm304-272q26 0 44.5 18.5T743-689v418q0 26-18.5 44.5T680-208q-26 0-44.5-18.5T617-271v-418q0-26 18.5-44.5T680-752Z" />
    </svg>
  );
}
