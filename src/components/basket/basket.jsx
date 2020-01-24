import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Footer from '../footer/footer';

import SearchModal from '../search/searchModal';
import BasketItem from './basket-item';

import {connect} from 'react-redux';


class Basket extends React.PureComponent {
  constructor(props) {
    super();
    this._countTotalPrice = this._countTotalPrice.bind(this);

    this.selectedItems = props.allProducts.filter((item) => this._isSelected(item, props.selectedItems));
  }


  render() {


    

    return <div className="page-wrapper">
      <Menu />
      <InnerHeader title="Your basket" />
      <SearchModal />
      <div className="basket-container">
        <div className="basket-wrapper">

  <div className="basket-counter">{this.props.selectedItems.length > 0 ? `There are ${this.props.selectedItems.length} items in your basket:` : `There's nothing in your basket yet.`}</div>

          {this.selectedItems.map((item, index) => <BasketItem item={item} key={index}/>)}

          <div className="basket-options">
            <div className="options-price">
              {this.props.selectedItems.length > 0 ? `Total price: ${this._countTotalPrice()} €` : ``}
              
            </div>
            <div className="basket-button">
            {this.props.selectedItems.length > 0 ? <button className="basket-button_btn btn">Pay now</button> : <div></div>}
              
            </div>
          </div>

        </div>
      </div>


      <Footer />
    </div>
  }

  _isSelected(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (item.id === array[i]) {
        return true;
      }
    }
    return false;
  }

  _countTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.selectedItems.length; i++) {
      console.log(totalPrice);
      console.log(this.selectedItems);
      console.log(this.selectedItems[1]);
      totalPrice  = totalPrice + this.selectedItems[i].price;
      console.log(totalPrice);
    }
    
    return totalPrice;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allProducts: state.allProducts,
  selectedItems: state.selectedItems,

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Basket);