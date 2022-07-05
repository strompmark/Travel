import Content from './components/Content';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header/>
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/search' element={<Content/>}/>
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;