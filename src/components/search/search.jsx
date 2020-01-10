import Menu from '../menu/menu';
import InnerHeader from '../innerHeader/innerHeader';
import Footer from '../footer/footer';
import SearchModal from '../search/searchModal';

class Search extends React.PureComponent {

  render() {
    return <div class="page-wrapper">
    <Menu />
    <InnerHeader title="Search results"/>

    <SearchModal />

    <div className="search__wrapper">
      <div className="search-container">
        Nothig has been found
      </div>
    </div>

    <Footer />
  </div>

  }

}


export default Search;

