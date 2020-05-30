import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

import playerShapePropz from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShapePropz.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props; 
    removePlayer(player.id);
  };

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props; 
    editAPlayer(player);
  };

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-4">
        <div className="card">
          <img className="card-img-top" src={player.imageUrl} alt="Player Headshot"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn blue-button" onClick={this.editPlayerEvent}><i class="fas fa-edit"></i> Edit</button>
            <button className="btn btn-dark" onClick={this.deletePlayerEvent}><i class="fas fa-trash-alt"></i> Delete</button>
          </div>
        </div>
      </div>
    );
}
}

export default Player;
