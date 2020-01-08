import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/reducers';

class Menu extends React.PureComponent {
  constructor() {
    super();
    this.menuIconRef = React.createRef();
    this.menuUpperListRef = React.createRef();
    this.menuDownListRef = React.createRef();

    this.state = {
      isOpened: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handlerSearchModal = this.handlerSearchModal.bind(this);
  }

  handleMenuClick() {
    if (this.state.isOpened) {
      this.menuIconRef.current.classList.remove('menu__icon');
      this.menuIconRef.current.classList.add('menu__icon__open');
      this.menuUpperListRef.current.style.display = `none`;
      this.menuDownListRef.current.style.display = `none`;
      this.setState({isOpened: false});
    } else {
      this.menuIconRef.current.classList.remove('menu__icon__open');
      this.menuIconRef.current.classList.add('menu__icon');
      this.menuUpperListRef.current.style.display = `block`;
      this.menuDownListRef.current.style.display = `block`;
      this.setState({isOpened: true});
    }
  }

  handlerSearchModal() {
    this.props.openSearchModal();
  }

  render() {
  return <div className="page-menu">
  <nav className="main-nav">
    <div className="main-nav__wrapper">
      <div className="logo__list">
        <div className="logo-wrapper">
          <div className="logo-wrapper__inner">
            <Link to="/">
              <div className="logo"></div>
            </Link>
          </div>
        </div>
        <div className="menu-wrapper">
          <div className="menu-wrapper__inner">
            <div className="menu__icon__open" ref={this.menuIconRef} onClick={this.handleMenuClick}></div>
          </div>
        </div>
      </div>
      <ul className="main-nav__list" ref={this.menuUpperListRef}>
        <li><Link to="/catalog">Our products</Link></li>
        <li><Link to="/Order">Knitting by order</Link></li>
      </ul>
      <ul className="site__list" ref={this.menuDownListRef}>
        <li onClick={this.handlerSearchModal}><img src="./img/icon_search.png" width="16px"/>&nbsp; &nbsp;Search</li>
        <li><img src="./img/icon_basket.png" width="16px"/>&nbsp; &nbsp;Your basket is empty</li>
      </ul>
    </div>
  </nav>
  </div>
  }
}

const mapStateToDispatch = (state, ownProps) => Object.assign({}, ownProps, {
  isSearchVisible: state.isSearchVisible,
});

const mapDispatchToProps = (dispatch) => ({
  openSearchModal: () => {
    dispatch(ActionCreator.openSearchModal());
  }
});

export default connect(mapStateToDispatch, mapDispatchToProps)(Menu);