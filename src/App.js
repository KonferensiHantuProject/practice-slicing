import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="p-14 bg-secondary">
      <div className="flex flex-col min-h-screen justify-between bg-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
