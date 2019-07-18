import React from 'react'

import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social">
          <a title="twitter" href="https://twitter.com/IsabelRiosE">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com/isabel4rios/">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
