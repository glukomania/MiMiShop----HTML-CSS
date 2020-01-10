import { PureComponent } from "react";

class BasketItem extends PureComponent {
  constructor(props) {
    super();
    this.item = props.item;

    this.state = {
      quantity: 1,
    }
  }

  handleQuantityChange(evt) {
    this.setState({quantity: evt.target.value});
  }

  handlePlusClick() {
    this.setState({quantity: this.state.quantity + 1});
  }

  handleMinusClick() {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
    }
  }

  render() {
    return <div className="basket-item">
    <div className="basItem-image">
      <img className="basItem-image__picture" src={this.props.item.image} />
    </div>
    <div className="basItem-details">
      <div className="basItem-title">
        <div className="basItem-title_header">{this.props.item.title}</div>
        <div className="basItem-title_close"></div>
      </div>
      <div className="basItem-options">
        <div className="basItem-price">Price: {this.props.item.price}</div>
        <div className="basItem-quantity">
          <div className="btn-minus"><button className="btn-minus__btn btn" onClick={this.handleMinusClick.bind(this)}>-</button></div>
          <div><input type="text" className="quantity_input" maxLength="1" value={this.state.quantity} onChange={this.handleQuantityChange.bind(this)}/></div>
          <div className="btn-plus"><button className="btn-plus__btn btn" onClick={this.handlePlusClick.bind(this)}>+</button></div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default BasketItem;