import React from 'react'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import footer_logo from '../Assets/logo_big.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer_linkes'>
        <li>Company</li>
        <li>Producs</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_icons_container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icons_container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icons_container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
