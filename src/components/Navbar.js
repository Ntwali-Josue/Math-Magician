import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Calculator',
    path: '/calculator',
  },
  {
    id: 3,
    name: 'Qoute',
    path: '/quote',
  },
];

const Navbar = () => (
  <nav className="nav">
    <h1>Math Magician</h1>
    <ul>
      {Links.map((link) => (
        <NavLink to={link.path} key={link.id} className="links">{link.name}</NavLink>
      ))}
    </ul>
  </nav>
);

export default Navbar;
