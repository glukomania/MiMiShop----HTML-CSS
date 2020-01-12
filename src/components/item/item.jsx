import {connect} from 'react-redux'; 
import {ActionCreator} from '../../store/reducers';


class Item extends React.PureComponent{

  constructor (props) {
    super();
    this.handleBasketClick = this.handleBasketClick.bind(this);
  }

  handleBasketClick() {
    this.props.addItem(this.props.selectedItems, this.props.product.id);
    console.log(this.props.selectedItems);
  }

  render() {
    console.log(this.props.selectedItems)
  return <div className="item">
  <div className="item-picture">
    <img className="item-picture_img"src={this.props.product.image} />
  </div>
  <div className="item-details">
    <div className="item-details__wrapper">
      <div className="item-details-description">
        <div className="item-details-description__title">{this.props.product.title}</div>
        <div className="item-details-description__parameters">{this.props.product.parameters}</div>
      </div>
      <div className="item-detailes-options">
        <div className="item-detailes-option__price">
          Price: {this.props.product.price}
        </div>
        <div className="item-detailes-option__icon">
          <div className="item-detailes-option__basket" onClick={this.handleBasketClick}></div>
        </div>
      </div>
    </div>
  </div>
</div>
}
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  selectedItems: state.selectedItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (basketArray, id) => {
    dispatch(ActionCreator.selectItem(basketArray, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);