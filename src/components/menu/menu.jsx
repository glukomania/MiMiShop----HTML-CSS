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

  render() {
  return <div className="page-menu">
  <nav className="main-nav">
    <div className="main-nav__wrapper">
      <div className="logo__list">
        <div className="logo-wrapper">
          <div className="logo-wrapper__inner">
            <a href="#">
              <div className="logo"></div>
            </a>
          </div>
        </div>
        <div className="menu-wrapper">
          <div className="menu-wrapper__inner">
            <div className="menu__icon__open" ref={this.menuIconRef} onClick={this.handleMenuClick}></div>
          </div>
        </div>
      </div>
      <ul className="main-nav__list" ref={this.menuUpperListRef}>
        <li><a href="catalog.html">Our products</a></li>
        <li><a href="catalog.html">Knitting by order</a></li>
      </ul>
      <ul className="site__list" ref={this.menuDownListRef}>
        <li><img src="./img/icon_search.png" width="16px"/><a href="catalog.html">&nbsp; &nbsp;Search</a></li>
        <li><img src="./img/icon_basket.png" width="16px"/><a href="catalog.html">&nbsp; &nbsp;Your basket is empty</a></li>
      </ul>
    </div>
  </nav>
  </div>
  }
}

export default Menu;