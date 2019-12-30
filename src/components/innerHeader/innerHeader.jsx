const InnerHeader = (props) => {
  return <div className="catalog-header">
  <div className="catalog-header__wrapper">
    <div className="catalog-header__slogan">
      {props.title}
    </div>
  </div>
</div>
};

export default InnerHeader;