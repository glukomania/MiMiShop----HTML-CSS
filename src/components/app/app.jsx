import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import Catalog from '../catalog/catalog';


const App = () => {
  return <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" exact component={Catalog} />
      </Switch>
    </Router>
}

export default App;