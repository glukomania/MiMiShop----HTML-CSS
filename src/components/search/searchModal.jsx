import {connect} from 'react-redux';
import { ActionCreator } from '../../store/reducers';
import { withRouter } from 'react-router-dom'; //allows to use history in this component like a prop


class SearchModal extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: ``,
    }

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleEscKeydown = this.handleEscKeydown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleCloseClick() {
    this.props.closeSearchModal();
  }

  handleEscKeydown(evt) {
    if (evt.keyCode === 27) {
      this.props.closeSearchModal();
    }
  }

  handleSearchButtonClick() {
    if (this.state.input.length !== 0) {
      this.props.closeSearchModal();
      this.props.history.push(`/search`);
    }
  }

  handleInputChange(evt) {
    this.setState({input: evt.target.value});
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
            <input type="text" value={this.state.input} onChange={this.handleInputChange}></input>
            <div className="modal-input__icon"></div>
          </div>
          <div className="modal-btn__wrapper">
            <button className="modal-btn" onClick={this.handleSearchButtonClick}>SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this.handleEscKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.handleEscKeydown);
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

export default connect(mapStateToDispatch, mapDispatchToProps)(withRouter(SearchModal));