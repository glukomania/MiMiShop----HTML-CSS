import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/reducers';

import Main from '../main/main.jsx';
import Catalog from '../catalog/catalog';
import Order from '../order/order.jsx';
import Search from '../search/search';
import Basket from '../basket/basket';


class App extends React.PureComponent {

  render() {
  this.props.saveAllProducts(this.props.products);

  return <BrowserRouter basename="/MiMiShop----HTML-CSS" >
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/order" exact component={Order} />
        <Route path="/search" exact component={Search} />
        <Route path="/basket" exact component={Basket} />
        <Route render={() => <div style={{textAlign: `center`, fontSize: `70px`, padding: `100px 60px`, color: `#ccc`}}>Page not found</div>} />
      </Switch>
    </BrowserRouter>

  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allProducts: state.allProducts,

});

const mapDispatchToProps = (dispatch) => ({
  saveAllProducts: (products) => {
    dispatch(ActionCreator.saveAllProducts(products));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);