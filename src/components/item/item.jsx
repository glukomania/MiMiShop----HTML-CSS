const Item = (props) => {
  return <div className="item">
  <div className="item-picture">
    <img className="item-picture_img"src={props.product.image} />
  </div>
  <div className="item-details">
    <div className="item-details__wrapper">
      <div className="item-details-description">
        <div className="item-details-description__title">{props.product.title}</div>
        <div className="item-details-description__parameters">{props.product.parameters}</div>
      </div>
      <div className="item-detailes-options">
        <div className="item-detailes-option__price">
          Price: {props.product.price}
        </div>
        <div className="item-detailes-option__icon">
          <div className="item-detailes-option__basket"></div>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Item;