import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import Catalog from '../catalog/catalog';
import Order from '../order/order.jsx';
import Search from '../search/search';
import Basket from '../basket/basket';


const App = () => {
  console.log('im in app');
  return <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/order" exact component={Order} />
        <Route path="/search" exact component={Search} />
        <Route path="/basket" exact component={Basket} />
        <Route render={() => <div style={{textAlign: `center`, fontSize: `70px`, padding: `100px 60px`, color: `#ccc`}}>Page not found</div>} />
      </Switch>
    </Router>
}

export default App;