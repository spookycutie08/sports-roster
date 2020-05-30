import React from 'react';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  state = {
    playerName: '',
    playerPosition: '',
    playerImageUrl: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({ playerName: player.name, playerPosition: player.position, playerImageUrl: player.imageUrl, isEditing: true})
    };
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }; 
  
  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  };

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  };

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImageUrl } = this.state;
    const { addPlayer } = this.props;
    const newPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImageUrl,
      uid: authData.getUid(),
    }
    addPlayer(newPlayer);
  };

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImageUrl } = this.state;
    const { putPlayer, player } = this.props;
    const updatedPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImageUrl,
      uid: authData.getUid(),
    }
    putPlayer(player.id, updatedPlayer);
  };

  render() {
    const { playerName, playerPosition, playerImageUrl, isEditing } = this.state; 
    
    return (
      <div className="PlayerForm">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="player-name">Player Name</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="Wayne Gretzky"
              value={playerName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="Center, Right Wing, etc."
              value={playerPosition}
              onChange={this.positionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-image-url">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="player-image-url"
              placeholder="link to a nice headshot"
              value={playerImageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          {
            isEditing
            ? <button className="btn blue-button" onClick={this.updatePlayerEvent}><i class="fas fa-check-circle"></i> Update Player</button>
            : <button className="btn blue-button" onClick={this.savePlayerEvent}><i class="fas fa-check-circle"></i> Save New Player</button>
          }
        </form>
      </div>
    );
}
}

export default PlayerForm;
