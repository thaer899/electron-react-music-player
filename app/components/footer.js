import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Love from <img src="public/img/scotch-logo.png" className="logo"/>
        & <img src="public/img/soundcloud.jpeg" className="soundcloud"/>
        </p>
      </div>
    );  
  }
}
