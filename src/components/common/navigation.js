import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact us',
    path: '/contactUs',
  },
  {
    title: 'Login',
    path: '/login',
  },
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <nav className={'site-navigation'}>
      <span className={'menu-title'}>Blog</span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className={'menu-avatar-container'}>
          <Avatar
            src={
              'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
            }
            size={40}
          />
          <span
            className={'menu-avatar-name'}
          >{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      {!menuActive ? (
        <i
          className={'ionicons icon ion-ios-menu'}
          onClick={() => setMenuActive(true)}
        />
      ) : (
        <i
          className={'ionicons icon ion-ios-close'}
          onClick={() => setMenuActive(false)}
        />
      )}
    </nav>
  );
}
