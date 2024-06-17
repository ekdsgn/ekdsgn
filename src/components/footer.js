import logo from '../assets/images/react-logo.png'


const Footer = (props) => {
  return (
    <footer className="footer">
    <p><img src={logo} alt="logo" height="40px" /></p>
    
    <p>Copyright 2024 - Juno and Ice</p>

  </footer>
  )
}

export default Footer;