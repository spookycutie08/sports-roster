import React from 'react';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  state = {
    playerName: '',
    playerPosition: '',
    playerImageUrl: '',
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

  savePlayer = (e) => {
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

  render() {
    const { playerName, playerPosition, playerImageUrl } = this.state; 
    
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
              placeholder="C for Center, RW for Right Wing, etc..."
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
              value={playerImageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.savePlayer}>Save New Player</button>
        </form>
      </div>
    );
}
}

export default PlayerForm;
