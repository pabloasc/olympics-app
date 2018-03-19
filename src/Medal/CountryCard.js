import React from 'react';
import PropTypes from 'prop-types';
import SportList from './SportList';

const CountryCard = (props) => (
  <div className='card'>
    <div className='card-body'>
      <img id='myImage' src={'./img/flags/' + props.country.NOC.c_Name.toLowerCase() + '.jpg'}/>
      <span className="Title">{props.country.NOC.c_Name}</span>
    </div>
    <div className="card-footer">
      Medals
      <div className="Flex_container">
        <div><img src="gold.png" /> {props.country.Medals.n_Gold}</div>
        <div><img src="silver.png" /> {props.country.Medals.n_Silver}</div>
        <div><img src="bronze.png" /> {props.country.Medals.n_Bronze}</div>
      </div>
      <div>Total: {props.country.Medals.n_Total}</div>
    </div>
    <div className="Sport_list">
      <h4>Sports</h4>
      { props.sports.map(function(sports){
        return <SportList key={sports.Sport.n_ID} sportName={ sports.Sport } goldMedals={ sports.GoldMedalList } silverMedals={ sports.SilverMedalList } bronzeMedals={ sports.BronzeMedalList } />;
      })}
      </div>
    </div>
);

CountryCard.defaultProps = {
  country: {},
  sports: []
};

CountryCard.propTypes = {
  country: PropTypes.object,
  sports: PropTypes.array
};

export default CountryCard;
