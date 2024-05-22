import Navbar from './(components)/navbar'
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Footer from './(components)/Footer';
import SignUp from './(components)/SignUp';
import PrivateComponent from './(components)/PrivateComponent';
import Login from './(components)/Login';
import AddProduct from './(components)/AddProduct';
import ProductList from './(components)/ProductList';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>} />
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/update" element={<h1>Update Products Page</h1>} />
      <Route path="/logout" element={<h1>Logout Products Page</h1>} />
      <Route path="/profile" element={<h1>Profile Products Page</h1>} />
    </Route>

      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  );
}

export default App;
