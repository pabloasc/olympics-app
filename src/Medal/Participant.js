import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Participant = (props) => {
	return (
    <li> 
      <span className="Participant">
        { props.participant.Participant.c_Participant } <small><i>{ props.participant.Event.c_Name }</i></small>
      </span>
    </li>
  );
};

Participant.defaultProps = {
  participant: {}
};

Participant.propTypes = {
  participant: PropTypes.object
};

export default Participant;