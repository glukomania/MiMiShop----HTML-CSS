import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Item from '../item/item';
import Footer from '../footer/footer';


class Catalog extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return <div className="page-wrapper">
      <Menu />
      <InnerHeader title={`Catalog of our production`} />

      <div className="items-list">
        <div className="list-wrapper">
          <Item />
        </div>
      </div>

      <Footer />   
    </div>
  }
}

export default Catalog;