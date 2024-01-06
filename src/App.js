import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Component/Body/Body';
import Page from './pages/Page/Page';
import Upload from './pages/Upload/Upload';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/video/:videoId' element={<Body />}/>
        <Route path='/upload' element={<Upload />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
