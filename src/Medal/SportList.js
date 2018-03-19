import React from 'react';
import PropTypes from 'prop-types';
import Participant from './Participant';

const SportList = (props) => (
  <div className='Sport_list'>
    <span className="Title">{ props.sportName.c_Name }</span>
    
    { props.goldMedals.length > 0 ?
      <ol className="Gold_Medals">
        { props.goldMedals.map(function(participant) {
          return <Participant key={participant.Participant.n_PersonID + participant.Event.n_ID} participant={ participant }></Participant>;
        })}
      </ol>
    : ""} 

    { props.silverMedals.length > 0 ?
      <ol className="Silver_Medals">
        { props.silverMedals.map(function(participant) {
          return <Participant key={participant.Participant.n_PersonID + participant.Event.n_ID} participant={ participant }></Participant>;
        })}
      </ol>
    : ""}

    { props.bronzeMedals.length > 0 ?
      <ol className="Bronze_Medals">
        { props.bronzeMedals.map(function(participant) {
          return <Participant key={participant.Participant.n_PersonID + participant.Event.n_ID} participant={ participant }></Participant>;
        })}
      </ol>
    : ""}
    
  </div>
);

SportList.defaultProps = {
  sportName: {},
  goldMedals: [],
  silverMedals: [],
  bronzeMedals: []
};

SportList.propTypes = {
  sportName: PropTypes.object,
  goldMedals: PropTypes.array,
  silverMedals: PropTypes.array,
  bronzeMedals: PropTypes.array
};

export default SportList;
