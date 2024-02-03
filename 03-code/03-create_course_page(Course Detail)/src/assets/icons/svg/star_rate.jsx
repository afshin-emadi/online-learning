export default function RateStar({
  color = "#000000",
  size = "md",
  isFill = false,
  isHalf = false,
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
      {isHalf ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M480-604v236l96 74-36-122 90-64H518l-38-124Zm0 336L332-155q-11 9-24 8.5t-23-7.5q-10-7-15.5-19t-.5-26l57-185-145-103q-12-8-15-21t1-24q4-11 14-19.5t24-8.5h179l58-192q5-14 15.5-21.5T480-781q12 0 22.5 7.5T518-752l58 192h179q14 0 24 8.5t14 19.5q4 11 1 24t-15 21L634-384l57 185q5 14-.5 26T675-154q-10 7-23 7.5t-24-8.5L480-268Z" />
        </svg>
      ) : isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M480-268 332-155q-11 9-24 8.5t-23-7.5q-10-7-15.5-19t-.5-26l57-185-145-103q-12-8-15-21t1-24q4-11 14-19.5t24-8.5h179l58-192q5-14 15.5-21.5T480-781q12 0 22.5 7.5T518-752l58 192h179q14 0 24 8.5t14 19.5q4 11 1 24t-15 21L634-384l57 185q5 14-.5 26T675-154q-10 7-23 7.5t-24-8.5L480-268Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Zm96 26L332-155q-11 9-24 8.5t-23-7.5q-10-7-15.5-19t-.5-26l57-185-145-103q-12-8-15-21t1-24q4-11 14-19.5t24-8.5h179l58-192q5-14 15.5-21.5T480-781q12 0 22.5 7.5T518-752l58 192h179q14 0 24 8.5t14 19.5q4 11 1 24t-15 21L634-384l57 185q5 14-.5 26T675-154q-10 7-23 7.5t-24-8.5L480-268Zm0-181Z" />
        </svg>
      )}
    </span>
  );
}
