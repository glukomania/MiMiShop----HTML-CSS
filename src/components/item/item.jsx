const Item = () => {
  return <div className="item">
  <div className="item-picture">
    <img src="../img/photo-1-desktop.jpg" />
  </div>
  <div className="item-details">
    <div className="item-details__wrapper">
      <div className="item-details-description">
        <div className="item-details-description__title">The Rabbit Bob</div>
        <div className="item-details-description__parameters">Height 30cm, weight 200g</div>
      </div>
      <div className="item-detailes-options">
        <div className="item-detailes-option__price">
          Price: 15€
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