import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Footer from '../footer/footer';

import SearchModal from '../search/searchModal';
import BasketItem from './basket-item';

import {connect} from 'react-redux';


class Basket extends React.PureComponent {
  constructor(props) {
    super();
  }


  render() {

    const isSelected = (item, array) => {
      for (let i = 0; i < array.length; i++) {
        if (item.id === array[i]) {
          return true;
        }
      }
      return false;
    }
    const selectedItems = this.props.allProducts.filter((item) => isSelected(item, this.props.selectedItems));
    

    return <div className="page-wrapper">
      <Menu />
      <InnerHeader title="Your basket" />
      <SearchModal />
      <div className="basket-container">
        <div className="basket-wrapper">

          <div className="basket-counter">There are {this.props.selectedItems.length} items in your basket:</div>

          {selectedItems.map((item, index) => <BasketItem item={item} key={index}/>)}

          <div className="basket-options">
            <div className="options-price">
              Total price: 1000$
            </div>
            <div className="basket-button">
              <button className="basket-button_btn btn">Pay now</button>
            </div>
          </div>

        </div>
      </div>


      <Footer />
    </div>
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allProducts: state.allProducts,
  selectedItems: state.selectedItems,

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Basket);