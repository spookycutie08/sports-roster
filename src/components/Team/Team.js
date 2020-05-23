import React from 'react';
// import PropTypes from 'prop-types';

import './Team.scss';
import playerShapePropz from '../../helpers/propz/playerShape';

import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

class Team extends React.Component {
  static propTypes = {
    player: playerShapePropz.playerShape,
  }

  state = {
    players: [],
  }

  getInfo = () => {
    playersData.getPlayersByUid(authData.getUid())
    .then((players) => this.setState({ players }))
    .catch((err) => console.error('unable to get all players: ', err));
  };

  componentDidMount() {
    this.getInfo();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getInfo())
      .catch((err) => console.error('could not delete player:', err));
  };

  render() {
    const { players } = this.state;
    const makePlayers = players.map((singlePlayer) => (
      <Player key={singlePlayer.id} player={singlePlayer} removePlayer={this.removePlayer}/>
    ))

    return (
      <div className="TeamContainer d-flex row-wrap">
        {makePlayers}
      </div>
    );
  }
}

export default Team;
