export default function Bookmark({
  customClasses = "",
  color = "#000000",
  size = "md",
  isFill = false,
  type = "BOOKMARK",
}) {
  let BookmarkSVG = null;
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
  switch (type) {
    case "BOOKMARK_ADD":
      BookmarkSVG = isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M680-680h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600q-17 0-28.5-11.5T680-640v-40ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h225q18 0 27 16t1 33q-7 17-10 34t-3 37q0 72 45.5 127T680-524q12 2 21.5 2.5t18.5.5q17 0 28.5 10.5T760-484v243q0 43-36 66.5t-76 6.5l-168-72Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h200q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760H280v518l200-86 200 86v-238q0-17 11.5-28.5T720-520q17 0 28.5 11.5T760-480v239q0 43-36 66.5t-76 6.5l-168-72Zm0-520H280h240-40Zm200 80h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600q-17 0-28.5-11.5T680-640v-40Z" />
        </svg>
      );
      break;
    case "BOOKMARK_ADDED":
      BookmarkSVG = isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m713-713 113-113q12-12 28.5-12t28.5 12q12 12 12 28.5T883-769L741-628q-12 12-28 12t-28-12l-57-57q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l28 28ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h225q18 0 27 16t1 33q-7 17-10 34t-3 37q0 72 45.5 127T680-524q12 2 21.5 2.5t18.5.5q17 0 28.5 10.5T760-484v243q0 43-36 66.5t-76 6.5l-168-72Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m713-713 113-113q12-12 28.5-12t28.5 12q12 12 12 28.5T883-769L741-628q-12 12-28 12t-28-12l-57-57q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l28 28ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h200q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760H280v518l200-86 200 86v-238q0-17 11.5-28.5T720-520q17 0 28.5 11.5T760-480v239q0 43-36 66.5t-76 6.5l-168-72Zm0-520H280h240-40Z" />
        </svg>
      );
      break;
    case "BOOKMARK_REMOVE":
      BookmarkSVG = isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M640-680q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h225q18 0 27 16t1 33q-7 17-10 34t-3 37q0 72 45.5 127T680-524q12 2 21.5 2.5t18.5.5q17 0 28.5 10.5T760-484v243q0 43-36 66.5t-76 6.5l-168-72Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="M640-680q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h200q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760H280v518l200-86 200 86v-238q0-17 11.5-28.5T720-520q17 0 28.5 11.5T760-480v239q0 43-36 66.5t-76 6.5l-168-72Zm0-520H280h240-40Z" />
        </svg>
      );
      break;
    default:
      BookmarkSVG = isFill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSize * 1.77}
          viewBox="0 -960 960 960"
          width={iconSize}
          fill={color}
        >
          <path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z" />
        </svg>
      );
  }

  return (
    <span className={customClasses}>
      {BookmarkSVG}
    </span>
  );
}
