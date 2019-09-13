import React from 'react';
import AgeVerification from './AgeVerification';
import AgeRestricted from './AgeRestricted';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
    this.handleAgeVerification = this.handleAgeVerification.bind(this);
    this.handleAgeRestricted = this.handleAgeRestricted.bind(this);
  }

  handleAgeVerification() {
    this.setState({ formVisibleOnPage: 1 });
  }

  handleAgeRestricted() {
    this.setState({ formVisibleOnPage: 2 });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage === 1) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
    } else if(this.state.formVisibleOnPage === 0) {
      currentlyVisibleContent = <AgeVerification onAgeVerification={this.handleAgeVerification} />;
    } else if(this.state.formVisibleOnPage === 2){
      currentlyVisibleContent = <AgeRestricted onAgeRestricted={this.handleAgeRestricted} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }

}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;