import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = ()=> {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={Home} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notification' />
        <HeaderOption
          avatar='https://s.gravatar.com/avatar/324df82758d68f1c0ef32545105f04c2?size=496&default=retro'
          title='me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
