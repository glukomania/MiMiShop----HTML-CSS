import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Item from '../item/item';
import Footer from '../footer/footer';
import SearchModal from '../search/searchModal';

import {connect} from 'react-redux';


class Catalog extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {

    return <div className="page-wrapper">
      <Menu />
      <InnerHeader title={`Catalog of our production`} />

      <SearchModal />

      <div className="items-list">
        <div className="list-wrapper">
          {this.props.allProducts.map((item, index) => <Item key={index} product={item}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);