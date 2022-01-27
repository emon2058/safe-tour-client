import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import Book from './Pages/Book/Book';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import AddServices from './Pages/AddServices/AddServices';
import AllBookings from './Pages/AllBookings/AllBookings';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import AddBlog from './Pages/AddBlog/AddBlog';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/blogs/:id">
            <SingleBlog></SingleBlog>
          </PrivateRoute>
          <PrivateRoute path="/addBlog">
            <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/allBooking">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/addService">
            <AddServices></AddServices>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
