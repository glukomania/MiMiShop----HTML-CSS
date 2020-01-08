import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import Catalog from '../catalog/catalog';
import Order from '../order/order.jsx';


const App = () => {
  return <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/order" exact component={Order} />
      </Switch>
    </Router>
}

export default App;