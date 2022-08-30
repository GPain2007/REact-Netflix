import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Frame,
  Title,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider
      value={{ toggleState: [toggleShow, setToggleShow] }}
    >
      <Item {...restProps}>{children}</Item>;
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleState } = useContext(ToggleContext);
  const [toggleShow, setToggleShow] = toggleState;

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleState } = useContext(ToggleContext);
  const [toggleShow] = toggleState;

  return toggleShow ? <Body {...restProps}> {children}</Body> : null;
};
