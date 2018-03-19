import React, { Component } from 'react';
import Service from '../service/Service';
import MedalList from './MedalList';

export default class Medals extends Component {

  constructor() {
    super();

    this.state = {
      medal: []
    };
  }

  componentWillMount() {
    this.setState(() => ({
      medal: Service.getMedals()
    }));
  }

  render() {
    return (
      <div>
        <MedalList medals={this.state.medal} />
      </div>
    );
  }
}
