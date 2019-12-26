const About = () => {

  return     <div className="page-about">
  <div className="about-wrapper">
    <div className="about-title">
      Shortly about us
    </div>
    <div className="about-points__wrapper">
      <div className="points-row">
        <div className="points-left">
          <div className="point-icon eco"></div>
          <div className="point-text">Eco-friendly materials</div>
        </div>
        <div className="points-right">
          <div className="point-icon ball"></div>
          <div className="point-text">Knitted by hands with love and kindness</div>
        </div>
      </div>

      <div className="points-row">
        <div className="points-left">
          <div className="point-icon money"></div>
          <div className="point-text">Scandy style with local prices</div>
        </div>
        <div className="points-right">
          <div className="point-icon rocket"></div>
          <div className="point-text">Support of local producers</div>
        </div>
      </div>

      <div className="points-row">
        <div className="points-left">
          <div className="point-icon love"></div>
          <div className="point-text">Increase likes in your social networks</div>
        </div>
        <div className="points-right">
          <div className="point-icon gift"></div>
          <div className="point-text">Delivered in a gift package</div>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default About;