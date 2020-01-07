const InnerHeader = (props) => {
  return <div className="catalog-header">
  <div className="inner-header__wrapper">
    <div className="inner-header__slogan">
      {props.title}
    </div>
  </div>
  <div class="innerHeader-zigzag"></div>
  }
</div>
};

export default InnerHeader;