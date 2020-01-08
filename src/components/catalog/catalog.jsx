import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Item from '../item/item';
import Footer from '../footer/footer';
import {mockProducts} from '../../mockdata';


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
          {mockProducts.map((item, index) => <Item key={index} product={item}/>)}
        </div>
      </div>

      <Footer />   
    </div>
  }
}

export default Catalog;