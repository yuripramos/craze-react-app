import React from "react";
import { string } from "prop-types";
/*eslint-disable*/

import { Span } from "./styles";

export const icons = {
  AppleLogo: require("./AppleLogo").default,
  AndroidLogo: require("./AndroidLogo").default,
  MicrosoftLogo: require("./MicrosoftLogo").default
};

function Icon({ type, color, width, height, ...props }) {
  const IconSvg = icons[type];
  if (IconSvg) {
    return (
      <Span color={color} width={width} height={height} {...props}>
        <IconSvg />
      </Span>
    );
  }
  return null;
}

Icon.defaultProps = {
  color: null,
  height: null,
  width: null
};

Icon.propTypes = {
  color: string,
  height: string,
  width: string,
  type: string.isRequired // eslint-disable-line react/no-typos
};

export default Icon;
