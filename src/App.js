import './App.css';
import { Footer } from './components/Footer/Footer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Main } from './components/Main/Main';


function App(props) {
  //console.log(props.store.getState())
  return (
    <div className='app-block'>
      <HeaderContainer store={props.store}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
