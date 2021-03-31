import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Gallery from './Gallery';
import Footer from './Footer';
import FoodDetails from './FoodDetails';
import Cart from './Cart';
import Signin from './Signin';
import Register from './Register';
import Shipping from './Shipping';
import Payment from './Payment';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/payment'>
            <Header />
            <Payment />
            <Footer />
            </Route>
        <Route path='/shipping'>
            <Header />
            <Shipping />
            <Footer />
            </Route>
        <Route path='/register'>
            <Header />
            <Register />
            <Footer />
            </Route>
        <Route path='/signin'>
            <Header />
            <Signin />
            <Footer/>
          </Route>
        <Route path='/cart/:id?'>
            <Header />
            <Cart />
            <Footer/>
          </Route>
        <Route path='/food/:category/:id'>
            <Header />
            <FoodDetails />
            <Footer/>
          </Route>
          <Route exact path='/'>
            <Header />
            <Content />
            <Gallery />
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
