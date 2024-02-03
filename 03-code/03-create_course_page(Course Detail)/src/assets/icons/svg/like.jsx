export default function Like({
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
          <path d="M840-640q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14H400q-33 0-56.5-23.5T320-200v-407q0-16 6.5-30.5T344-663l217-216q15-14 35.5-17t39.5 7q19 10 27.5 28t3.5 37l-45 184h218ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640q33 0 56.5 23.5T240-560v360q0 33-23.5 56.5T160-120Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M840-640q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14H280v-520l240-238q15-15 35.5-17.5T595-888q19 10 28 28t4 37l-45 183h258Zm-480 34v406h360l120-280v-80H480l54-220-174 174ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640h120v80H160v360h120v80H160Zm200-80v-406 406Z" />
        </svg>
      )}
    </span>
  );
}