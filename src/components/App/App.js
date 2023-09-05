import React from "react";
import styled from "styled-components/macro";
import { queries } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  /* @media ${queries.laptopAndSmaller} {
    background-color: yellow;
  }
  @media ${queries.tabletAndSmaller} {
    background-color: red;
  }
  @media ${queries.phoneAndSmaller} {
    background-color: fuchsia;
  } */
`;

export default App;
