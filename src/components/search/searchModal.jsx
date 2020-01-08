import {connect} from 'react-redux';
import { ActionCreator } from '../../store/reducers';

class SearchModal extends React.Component {
  constructor(props) {
    super();
    
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.props.closeSearchModal();
  }

  render() {
    if (!this.props.isSearchVisible) {
      return null;
    }

    return <div>
      <div className="modal">
        <div className="modal-container">
          <div className="model-close__wrapper">
            <div className="model-close_icon" onClick={this.handleCloseClick}></div>
          </div>
          <div className="modal-title">Search in our catalog</div>
          <div className="modal-input__wrapper">
            <input type="text"></input>
            <div className="modal-input__icon"></div>
          </div>
          <div className="modal-btn__wrapper">
            <button className="modal-btn">SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToDispatch = (state, ownProps) => Object.assign({}, ownProps, {
  isSearchVisible: state.isSearchVisible,
});

const mapDispatchToProps = (dispatch) => ({
  closeSearchModal: () => {
    dispatch(ActionCreator.closeSearchModal());
  }
});

export default connect(mapStateToDispatch, mapDispatchToProps)(SearchModal);