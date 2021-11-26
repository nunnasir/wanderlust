import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/Services/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ManageOrders from './Pages/Orders/ManageOrders/ManageOrders';
import MyOrder from './Pages/Orders/MyOrder/MyOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
