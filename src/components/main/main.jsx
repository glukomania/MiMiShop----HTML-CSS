import React from 'react';
import Menu from '../menu/menu.jsx';

class Main extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return <div className="page-wrapper">
      
    <Menu />

    <div className="page-header">
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

    <div className="page-offer">
      <div className="offer-wrapper">
        <div className="offer-title">
          <div className="offer-title__name">Nice knitted baskets</div>
          <div className="offer-title__type">OFFER OF THIS WEEK</div>
        </div>
        <div className="offer-detailesPicture__wrapper">
          <div className="offer-detailes">
            <div className="offer-detailes__description">
              Eco wool, handmade. Available with six colors and three sizes.
            </div>
            <div className="offer-detailes__table">
              <div className="detiles-raw">
                <div className="detailes-parameter">
                  Color:
                </div>
                <div className="detailes-value">
                  Tiffany/gray
                </div>
              </div>
              <div className="detiles-raw">
                <div className="detailes-parameter">
                  Diameter:
                </div>
                <div className="detailes-value">
                  25sm
                </div>
              </div>
              <div className="detiles-raw">
                <div className="detailes-parameter">
                  Height:
                </div>
                <div className="detailes-value">
                  15sm
                </div>
              </div>
            </div>
          </div>
          <div className="offer-picture"></div>
        </div>
        <div className="offer-price">
          <div className="offer-price__value">
            Price: 15€
          </div>
          <div className="offer-price__order">
            <input type="submit" className="order__button" value="ORDER NOW" />
          </div>
        </div>
      </div>
    </div>
    <div className="offer-derive"></div>

    <div className="page-about">
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

    <div className="page-feedbacks">
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

    <div className="offer-derive"></div>

    <div className="page-contacts">
      <div className="contacts-wrapper">
        <div className="contacts-details">
          <div className="detailes-header">
            <div className="detailes-header__icon">
              <div className="header-icon"></div>
            </div>
            <div className="detailes-header__text">Contacts</div>
          </div>
          <div className="detailes wrapper">
            <div className="detailes-row">
              <div className="detailes-parameter">
                e-mail:
              </div>
              <div className="detailes-value">
                info@mimishop.com
              </div>
            </div>
            <div className="detailes-row">
              <div className="detailes-parameter">
                address:
              </div>
              <div className="detailes-value">
                Moskevská 272/55, Praha, Vršovice
              </div>
            </div>
          </div>
        </div>
        <div className="contacts-map"></div>
      </div>
      <div className="details-button">
        <input type="button" className="detailes-button_btn" value="WRITE TO US" />
      </div>
    </div>

    <div className="page-footer">
      <div className="footer-logo">
        <div className="footer-logo__image"></div>
      </div>
      <div className="footer-social">
        <div className="footer-social__wrapper">
          <div className="social-icon">
            <i className="fa fa-instagram"></i>
          </div>
          <div className="social-icon">
            <i className="fa fa-facebook-square"></i>
          </div>
          <div className="social-icon">
            <i className="fa fa-twitter-square"></i>
          </div>
        </div>
      </div>
      <div className="footer-derive"></div>
      <div className="footer-author">Made by <a href="mailto:shuvaeva@email.cz">Feel Studio</a></div>
    </div>
  </div>
  }
}

export default Main;