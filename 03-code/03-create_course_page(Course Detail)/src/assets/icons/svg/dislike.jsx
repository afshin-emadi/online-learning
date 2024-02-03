export default function Dislike({
  color = "#000000",
  size = "md",
  isFill = false,
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
    <span>
      {isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14h320q33 0 56.5 23.5T640-760v407q0 16-6.5 30.5T616-297L399-81q-15 14-35.5 17T324-71q-19-10-27.5-28t-3.5-37l45-184H120Zm680-520q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320q-33 0-56.5-23.5T720-400v-360q0-33 23.5-56.5T800-840Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z" />
        </svg>
      )}
    </span>
  );
}
