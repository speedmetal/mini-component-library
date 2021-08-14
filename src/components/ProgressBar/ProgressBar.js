/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value = 0, size }) => {
  return (
    <Wrapper>
      <Bar style={{ "--width": value + "%" }}></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15}
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 12px;
  display: "flex";
  items-align: "center";
  justify-content: "center";
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
