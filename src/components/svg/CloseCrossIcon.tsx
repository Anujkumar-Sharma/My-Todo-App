import { BLACK_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const CloseCrossIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ??"14"}
      height={props?.width ?? "15"}
      viewBox="0 0 14 15"
      fill="none"
    >
      <g clipPath="url(#clip0_5_3343)">
        <path
          d="M1.4 14.5L0 13.1L5.6 7.5L0 1.9L1.4 0.5L7 6.1L12.6 0.5L14 1.9L8.4 7.5L14 13.1L12.6 14.5L7 8.9L1.4 14.5Z"
          fill={props?.fill ?? BLACK_100_1}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_3343">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseCrossIcon;
