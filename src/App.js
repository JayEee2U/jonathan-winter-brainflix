import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Page from './pages/Page/Page';



function App() {
  return (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/pages' element={<Pages />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
