import { DARK_JUNGLE_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const DrawerIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props?.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DrawerIcon;
