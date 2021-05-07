import { useState, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import StoreDetailPage from "./Components/main/storeDetail/storeDetailPage";
import MainPage from "./page/mainpage";

export const PostsContext = createContext();

const App = () => {
  const [on, setOn] = useState(false);
  const [detail, setDetail] = useState(false);
  const [storeData, setStoreData] = useState([]);

  return (
    <Tpirates>
      <PostsContext.Provider
        value={{ on, setOn, detail, setDetail, storeData, setStoreData }}
      >
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/:label" component={StoreDetailPage} exact />
        </Switch>
      </PostsContext.Provider>
    </Tpirates>
  );
};

export default App;

const Tpirates = styled.div`
  background-color: white;
`;
