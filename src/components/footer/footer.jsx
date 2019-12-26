const Footer = () => {

  return <div className="page-footer">
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
};

export default Footer;