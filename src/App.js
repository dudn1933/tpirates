import styled from "styled-components";
import Header from "./Components/header/header";
import RollingBanner from "./Components/rollingBanner/rollingBanner";
import SelectFilter from "./Components/selectFilter/selectFilter";

const App = () => {
  return (
    <Tpirates>
      <Header />
      <RollingBanner />
      <SelectFilter />
    </Tpirates>
  );
};

export default App;

const Tpirates = styled.div`
  background-color: white;
`;
