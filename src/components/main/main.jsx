import Menu from '../menu/menu';
import Header from '../header/header';
import Offer from '../offer/offer';
import About from '../about/about';
import Feedbacks from '../feedbacks/feedbacks';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';

import SearchModal from '../search/searchModal';

class Main extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return <div>
    <div className="page-wrapper">
        
      <Menu />

      <Header />

      <SearchModal />

      <Offer />

      <div className="offer-derive"></div>

      <About />

      <Feedbacks />

      <div className="offer-derive"></div>

      <Contacts />
    </div>

    <Footer />

  </div>
  }
}

export default Main;