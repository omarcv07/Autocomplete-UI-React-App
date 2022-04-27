
import { getSearchData } from "./Services/Services";
import AutoComplete from "./Components/AutoComplete";
import MainContainer from "./Containers/MainContainer";

const App = () => {
  return (
    <MainContainer>
      <AutoComplete getSearchData={getSearchData} />
    </MainContainer>
  );
}

export default App;
