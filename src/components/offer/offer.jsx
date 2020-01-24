import {connect} from 'react-redux';
import {ActionCreator} from '../../store/reducers';

class Offer extends React.PureComponent {

  constructor(props) {
    super();
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder() {
    console.log(`im adding`);
    this.props.addItem(this.props.selectedItems, 8);
  }

  render() {
  return <div className="page-offer">
  <div className="offer-wrapper">
    <div className="offer-title">
      <div className="offer-title__name">Nice knitted baskets</div>
      <div className="offer-title__type">OFFER OF THIS WEEK</div>
    </div>
    <div className="offer-detailesPicture__wrapper">
      <div className="offer-detailes">
        <div className="offer-detailes__description">
          Eco wool, handmade. Available with six colors and three sizes.
        </div>
        <div className="offer-detailes__table">
          <div className="detiles-raw">
            <div className="detailes-parameter">
              Color:
            </div>
            <div className="detailes-value">
              Tiffany/gray
            </div>
          </div>
          <div className="detiles-raw">
            <div className="detailes-parameter">
              Diameter:
            </div>
            <div className="detailes-value">
              25sm
            </div>
          </div>
          <div className="detiles-raw">
            <div className="detailes-parameter">
              Height:
            </div>
            <div className="detailes-value">
              15sm
            </div>
          </div>
        </div>
      </div>
      <div className="offer-picture"></div>
    </div>
    <div className="offer-price">
      <div className="offer-price__value">
        Price: 15€
      </div>
      <div className="offer-price__order">
        <input type="submit" className="order__button" value="ORDER NOW" onClick={this.handleOrder}/>
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
    dispatch(ActionCreator.addItem(basketArray, id));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Offer);