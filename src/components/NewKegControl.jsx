import React from 'react';
import AgeVerification from './AgeVerification';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
    this.handleAgeVerification = this.handleAgeVerification.bind(this);
  }

  handleAgeVerification(ageValid) {
    if(ageValid === 1){
      this.setState({ formVisibleOnPage: 1 });
    } else if(ageValid === 2){
      this.setState({ formVisibleOnPage: 2 });
    }
    
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage === 1) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
    } else if(this.state.formVisibleOnPage === 0) {
      currentlyVisibleContent = <AgeVerification onAgeVerification={this.handleAgeVerification} />;
    } else if(this.state.formVisibleOnPage === 2){
      currentlyVisibleContent = <div>
        <p>Thank you for visiting, but you are not old enough to interact with this website.</p>
        <p>Please leave now. Feel free to return once you are 21 years or older!</p>
      </div>;
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