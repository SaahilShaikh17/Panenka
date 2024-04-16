// App.js
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
import CreatePost from './pages/forum/CreatePost'; // Import as default
import Profile from './pages/forum/profile';
import Footer from './components/footer';
import RegisterForm from './pages/register/register';
import SinglePostView from './pages/forum/SinglePostView';

function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/table" element={<Table />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/dashboard"  element={<Forum />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/create-post" element={<CreatePost />} /> {/* Corrected path */}
              <Route path="/posts/:postId" element={<SinglePostView/>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
