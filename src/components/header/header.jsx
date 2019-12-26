const Header = () => {

  return     <div className="page-header">
  <div className="header-wrapper">
    <div className="header-slogan">
      Cute hand-made things for your home
    </div>
  </div>
  <div className="header-categories">
    <div className="categories-wrapper">
      <div className="categories">
        <div className="category-text__wrapper">
          <div className="category-text">
            Interior decoration
          </div>
        </div>
        <div className="category-icon__wrapper">
          <div className="category-icon interior"></div>
        </div>
      </div>
      <div className="categories">
        <div className="category-text__wrapper">
          <div className="category-text">
            Toys for children
          </div>
        </div>

        <div className="category-icon__wrapper ">
          <div className="category-icon toys"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-zigzag"></div>
</div>
}

export default Header;