import Menu from '../menu/menu';
import Footer from '../footer/footer';

class Catalog extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return <div className="page-wrapper">
      <Menu />

      <Footer />   
    </div>
  }
}

export default Catalog;