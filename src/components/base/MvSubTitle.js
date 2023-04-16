import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #080808;
`;

const getTitle = (css) =>
  styled(TitleWrapper)`
    ${css}
  `;

export default function MvSubTitle({ children, css }) {
  const Title = css ? getTitle(css) : TitleWrapper;

  return <Title>{children}</Title>;
}
