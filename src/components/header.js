import logo from '../assets/images/react-logo.png'
import MobileHeader from './Mobile Components/mobileHeader';
import PCHeader from '../PC Components/pcHeader';



const Header = (props) => {

  return (
    <>
      <div className="mView">
        <MobileHeader />
      </div>

      <div className='pView'>
        <PCHeader />
      </div>
    </>
  )
}

export default Header;