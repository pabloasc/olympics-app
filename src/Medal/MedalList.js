import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

const MedalList = (props) => {
  return (
    <div className="card-deck">
      <CountryCard country={props.medals.NOCMedals} sports={props.medals.SportList} />
    </div>
  );
};

MedalList.defaultProps = {
  medals: {}
};

MedalList.propTypes = {
  Medals: PropTypes.object
};

export default MedalList;
