import styled, { ThemeProvider } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;
`;

const theme = {
  colors: {
    tag: "#d7fa00",
    gray: "rgb(160, 160, 160)",
    background: "#121212",
    text: "white",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Section>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </Section>
      </Main>
    </ThemeProvider>
  );
}

export default App;
