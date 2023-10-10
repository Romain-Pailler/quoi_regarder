import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Movies from './component/Movies';
import MoviesDetails from './component/MoviesDetails';
import Navbar from './component/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path="/movie/:id" element={<MoviesDetails/>}/>
      </Routes>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
