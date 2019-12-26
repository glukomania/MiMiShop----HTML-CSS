const Feedbacks = () => {

  return <div className="page-feedbacks">
  <div className="feedbacks-wrapper">
    <div className="feedbacks-header">
      <div className="feedback-header__text">Feedbacks</div>
      <div className="feedback-header__add">
        <input type="button" className="feedback-button__desktop" value="WRITE A FEEDBACK" />
      </div>
    </div>
    <div className="feedback-text">I'm a young mummy, but anyway my posts couldn't 
      get as many likes as other instamothers' do. Then I've bought these cute things
    from this shop and now my photos constantly get thousends likes!
    </div>
    <div className="feedbacks-down__wrapper">
      <div className="down-author">
        <div className="down-author__name">Ann Colorson</div>
        <div className="down-author__login">@anncolorson</div>
      </div>
      <div className="down-arrows">
        <div className="arrow">
          <div className="down-arrows__left"></div>
        </div>
        <div className="arrow">
          <div className="down-arrows__right"></div>
        </div>
      </div>
      <input type="button" className="feedback-button__mobile" value="WRITE A FEEDBACK" />
    </div>
  </div>
</div>
};

export default Feedbacks;