import React from 'react';
import PropTypes from 'prop-types';

import './TeamContainer.scss';
import playerShapePropz from '../../helpers/propz/playerShape';

import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

class TeamContainer extends React.Component {
  static propTypes = {
    player: playerShapePropz.playerShape,
  }

  state = {
    players: [],
  }

  componentDidMount() {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((singlePlayer) => (
      <Player key={singlePlayer.id} player={singlePlayer} />
    ))

    return (
      <div className="TeamContainer d-flex row-wrap">
        {makePlayers}
      </div>
    );
  }
}

export default TeamContainer;
