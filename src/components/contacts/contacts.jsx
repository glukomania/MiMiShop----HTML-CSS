const Contacts = () => {

  return     <div className="page-contacts">
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
}

export default Contacts;