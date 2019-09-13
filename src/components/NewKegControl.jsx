import React from 'react';
import AgeVerification from './AgeVerification';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';
import AgeRestricted from './AgeRestricted';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
    this.handleAgeVerification = this.handleAgeVerification.bind(this);
  }

  handleAgeVerification() {
    this.setState({ formVisibleOnPage: 1 });
  }

  handleAgeRestricted() {
    this.setState({ formVisibleOnPage: -1 });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage === 1) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
    } else if(this.state.formVisibleOnPage === 0) {
      currentlyVisibleContent = <AgeVerification onAgeVerification={this.handleAgeVerification} />;
    } else {
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