import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header/>
        <Routes >
          <Route path='*' element={<Error/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Search' element={<Content/>}/>
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;