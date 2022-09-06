import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/Footer";
import { FaqsContainer } from "../containers/faqs";

import { HeaderContainer } from "../containers/header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}