import { GRAY_100_1, WHITE_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const InformationIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.75532" cy="8.52503" r="7.97749" fill={GRAY_100_1} />
      <rect
        x="7.42554"
        y="6.75226"
        width="2.65916"
        height="7.09109"
        rx="1.32958"
        fill={props?.fill ?? WHITE_100_1}
      />
      <rect
        x="7.42554"
        y="3.2067"
        width="2.65916"
        height="2.65916"
        rx="1.32958"
        fill={props?.fill ?? WHITE_100_1}
      />
    </svg>
  );
};

export default InformationIcon;
