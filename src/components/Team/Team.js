import React from 'react';
// import PropTypes from 'prop-types';

import './Team.scss';
import playerShapePropz from '../../helpers/propz/playerShape';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

class Team extends React.Component {
  static propTypes = {
    player: playerShapePropz.playerShape,
  }

  state = {
    players: [],
    editedPlayer: {},
    formOpen: false,
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

  addPlayer = (playerObject) => {
    playersData.addPlayer(playerObject)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false });
      })
  };

  putPlayer = (playerId, playerObject) => {
    playersData.updatePlayer(playerId, playerObject)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false, editedPlayer: {} });
      })
  };

  editAPlayer = (player) => {
    this.setState({ formOpen: true, editedPlayer: player });
  };

  render() {
    const { players, formOpen, editedPlayer } = this.state;
    const makePlayers = players.map((singlePlayer) => (
      <Player key={singlePlayer.id} player={singlePlayer} removePlayer={this.removePlayer} editAPlayer={this.editAPlayer}/>
    ))

    return (
      <div className="TeamContainer">
        <button className="btn btn-primary col-6" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus-circle"></i> Add New Player</button>
        { formOpen ? <PlayerForm addPlayer={this.addPlayer} player={editedPlayer} putPlayer={this.putPlayer}/> : ''}
        <div className="d-flex row-wrap">
          {makePlayers}
        </div>
      </div>
     
    );
  }
}

export default Team;
