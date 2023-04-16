import React from "react";
import styled from "styled-components";

const RowLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
`;

const getCustomLayout = (css) =>
  styled(RowLayout)`
    ${css}
  `;

export default function MvRow({ css, children }) {
  const Row = css ? getCustomLayout(css) : RowLayout;

  return <Row>{children}</Row>;
}
