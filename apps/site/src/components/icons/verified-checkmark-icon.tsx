import { SvgIcon, SvgIconProps } from "@mui/material";
import { FunctionComponent } from "react";

export const VerifiedCheckmarkIcon: FunctionComponent<SvgIconProps> = (
  props,
) => {
  return (
    <SvgIcon
      {...props}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5263 2.04932H12.5919C13.4181 2.04932 14.1172 2.74843 14.1172 3.57465V5.64019L15.5472 7.10196C16.1509 7.67395 16.1509 8.65906 15.5472 9.23105L14.1172 10.6928V12.7266C14.1172 13.5846 13.4181 14.2519 12.5919 14.2519H10.5263L9.06455 15.7137C8.49255 16.3174 7.50745 16.3174 6.93545 15.7137L5.47368 14.2519H3.43992C2.58193 14.2519 1.9146 13.5846 1.9146 12.7266V10.6928L0.45283 9.23105C-0.150943 8.65906 -0.150943 7.67395 0.45283 7.10196L1.9146 5.64019V3.57465C1.9146 2.74843 2.58193 2.04932 3.43992 2.04932H5.47368L6.93545 0.619334C7.50745 0.0155605 8.49255 0.0155605 9.06455 0.619334L10.5263 2.04932Z"
        fill="#8D68F8"
      />
      <path
        d="M11.3828 5.99391C11.5886 6.18774 11.5886 6.52694 11.3828 6.72077L7.3304 10.8558C7.14045 11.0658 6.80802 11.0658 6.61806 10.8558L4.59184 8.78828C4.38605 8.59445 4.38605 8.25525 4.59184 8.06142C4.7818 7.85144 5.11423 7.85144 5.30418 8.06142L6.96632 9.75743L10.6705 5.99391C10.8605 5.78393 11.1929 5.78393 11.3828 5.99391Z"
        fill="#FFF"
      />
    </SvgIcon>
  );
};