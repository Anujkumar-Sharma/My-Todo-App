import { BLACK_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const PlusIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props?.height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M9.16667 10.8333H0V9.16667H9.16667V0H10.8333V9.16667H20V10.8333H10.8333V20H9.16667V10.8333Z"
        fill={props?.fill ?? BLACK_100_1}
      />
    </svg>
  );
};

export default PlusIcon;
