import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Movies from './component/Movies';
import MoviesDetails from './component/MoviesDetails';
import Navbar from './component/Navbar';
import QuizzGladiator from './component/QuizzGladiator';
import QuizzPrestige from './component/QuizzPrestige';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path="/movie/:id" element={<MoviesDetails/>}/>
        <Route path="/quizzGladiator" element={<QuizzGladiator/>}/>
        <Route path="/quizzLePrestige" element={<QuizzPrestige/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
