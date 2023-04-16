import React from "react";
import styled from "styled-components";

const SmallWrapper = styled.div`
  font-size: 10px;
  color: #888;
`;

const getSmall = (css) =>
  styled(SmallWrapper)`
    ${css}
  `;

export default function MvSmall({ children, css }) {
  const Small = css ? getSmall(css) : SmallWrapper;

  return <Small>{children}</Small>;
}
