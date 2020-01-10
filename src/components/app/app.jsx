import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import Catalog from '../catalog/catalog';
import Order from '../order/order.jsx';
import Search from '../search/search';
import Basket from '../basket/basket';


const App = () => {
  return <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/order" exact component={Order} />
        <Route path="/search" exact component={Search} />
        <Route path="/basket" exact component={Basket} />
      </Switch>
    </Router>
}

export default App;