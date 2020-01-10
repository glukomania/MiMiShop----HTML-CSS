import { PureComponent } from "react";

import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Footer from '../footer/footer';

import {mockProducts} from '../../mockdata';
import SearchModal from '../search/searchModal';
import BasketItem from './basket-item';

class Basket extends PureComponent {
  constructor(props) {
    super();
  }


  render() {
    return <div className="page-wrapper">
      <Menu />
      <InnerHeader title="Your basket" />
      <SearchModal />
      <div className="basket-container">
        <div className="basket-wrapper">

          <div className="basket-counter">There are N items in your basket:</div>

          {mockProducts.map((item, index) => <BasketItem item={item} key={index}/>)}

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


export default Basket;