import logo from './logo.svg';
import Navbar from './(compunents)/navbar'
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Footer from './(compunents)/Footer';
import SignUp from './(compunents)/SignUp';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<h1>Products Page</h1>} />
      <Route path="/add" element={<h1>Add Products Page</h1>} />
      <Route path="/update" element={<h1>Update Products Page</h1>} />
      <Route path="/logout" element={<h1>Logout Products Page</h1>} />
      <Route path="/profile" element={<h1>Profile Products Page</h1>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  );
}

export default App;
