import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Footer from '../footer/footer';
import SearchModal from '../search/searchModal';

class Order extends React.PureComponent {

  render() {
    return <div>
      <Menu />
      <InnerHeader title="Knitting by order"/>

      <SearchModal />

    <div className="form">
    <div className="form-wrapper">
      <div className="form-top_title">
        We are happy to implement your ideas to life! Describe as full as possible your vision of the product you want,
        and we'll provide you our drafts as soon as possible. <br />
        Please fill in the form and we'll contact you for more details.
      </div>
      <div className="form-title">
        <div className="form-title__header">
          TYPE
        </div>
        <div className="form-line__wrapper">
          <div className="form-line"></div>
        </div>
      </div>
      <div className="form-parameters">
        
        <label className="radioButton label"> Accessoir for an interier
          <input type="radio" name="radio" />
          <span className="radio_mark"></span>
        </label>
        
        <label className="radioButton label"> Toy for children
          <input type="radio" name="radio" />
          <span className="radio_mark"></span>
        </label>
      </div>
    </div>

    <div className="form-wrapper oddBlock">
      <div className="form-title">
        <div className="form-title__header">
          COLOR
        </div>
        <div className="form-line__wrapper">
          <div className="form-line"></div>
        </div>
      </div>
      <div className="form-parameters colors">
        <label className="checkbox-container label">White
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="checkbox-container label">Black
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="checkbox-container label">Grey
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="checkbox-container label">Pink
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="checkbox-container label">Tiffany
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="checkbox-container label">Corall
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>

    <div className="form-wrapper">
      <div className="form-title">
        <div className="form-title__header">
          PERSON
        </div>
        <div className="form-line__wrapper">
          <div className="form-line"></div>
        </div>
      </div>
      <div className="form-parameters">
        <label htmlFor="name" className="label parameters_input">
          <div className="person__label">First name:</div>
          <div className="form-input__wrapper">
            <input className="form_input" type="input" id="name" name="person" placeholder="Type your first name" />
          </div>  
        </label>
        

        <label htmlFor="lastName" className="label parameters_input">
          <div className="person__label">Last name:</div>
          <div className="form-input__wrapper">
            <input className="form_input" type="input" id="lastName" name="person" placeholder="Type your last name" />
          </div>
        </label>
        
      </div>
    </div>

    <div className="form-wrapper oddBlock">
      <div className="form-title">
        <div className="form-title__header">
          CONTACTS
        </div>
        <div className="form-line__wrapper">
          <div className="form-line"></div>
        </div>
      </div>
      <div className="form-parameters">
        <div className="form-parameters__wrapper">
          <input className="person_input" type="input" id="phone" placeholder="+420 111 222 333" name="contacts" />
          <div className="form-parameters_icon"></div>
        </div>
        <div className="form-parameters__wrapper">
          <input className="person_input" type="input" id="email" placeholder="Your email" name="contacts" />
          <div className="form-parameters_icon"></div>
        </div>
      </div>
    </div>

    <div className="form-wrapper">
      <div className="form-title">
        <div className="form-title__header">
          DETAILS
        </div>
        <div className="form-line__wrapper">
          <div className="form-line"></div>
        </div>
      </div>
      <div className="form-parameters">
        <textarea className="details-textarea" rows="5" placeholder="Describe your wishes here" name="details"></textarea>
        <div className="options__wrapper">
          <div className="order-btn__wrapper">
            <button className="order_btn" type="submit">Submit your order</button>
          </div>
          <div className="note">*These fields are required to fill</div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
  </div>

  }

}


export default Order;

