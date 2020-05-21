import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShapePropz.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-4">
        <div className="card">
          <img className="card-img-top" src={player.imageUrl} alt="Player Headshot"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
          </div>
        </div>
      </div>
    );
}
}

export default Player;
