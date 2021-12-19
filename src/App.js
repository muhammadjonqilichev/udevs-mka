import './App.css';
import PAGE_1 from './pages/Page1/page_1';
import PAGE_2 from './pages/Page2/page_2';
import PAGE_3 from './pages/Page3/page_3';
import PAGE_4 from './pages/Page4/page_4';
import PAGE_5 from './pages/Page5/page_5';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Result from './components/Result/Result';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<PAGE_1 />} />
          <Route path='page-2' element={<PAGE_2 />} />
          <Route path='/page-3/' element={<PAGE_3 />} />
        <Route path='/page-4' element={<PAGE_4 />} />
        <Route path='/page-5' element={<PAGE_5 />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/step1' element={<Step1/>}/>
        <Route path='/step2' element={<Step2/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </>
  );
}

export default App;
