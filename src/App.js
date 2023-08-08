import Header from './Components/Header';
import Pesquisa from './Components/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(180deg, #41d8bf 15%, #2f89b3);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
