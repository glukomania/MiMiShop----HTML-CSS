import Menu from '../menu/menu';
import Header from '../header/header';
import Offer from '../offer/offer';
import About from '../about/about';
import Feedbacks from '../feedbacks/feedbacks';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';

class Main extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return <div className="page-wrapper">
      
    <Menu />

    <Header />

    <Offer />

    <div className="offer-derive"></div>

    <About />

    <Feedbacks />

    <div className="offer-derive"></div>

    <Contacts />

    <Footer />

  </div>
  }
}

export default Main;