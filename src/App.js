import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { Table } from "./pages/table/table";
import { Fixtures } from './pages/fixtures/fixtures';
import { Forum } from './pages/forum/forum';
import { About } from './pages/about/about';
import { News } from './pages/news/news';
import { LoginScreen } from './pages/login/login';
import Footer from './components/footer';
function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path="/table" element={<Table />}/>
              <Route path="/fixtures" element={<Fixtures />}/>
              <Route path="/forum"  element={<Forum />}/>
              <Route path="/news" element={<News />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/login" element={<LoginScreen />}/>
            </Routes>
          </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
