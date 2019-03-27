import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

// styles
import './Header.scss';

const Header = () => {
  const header = cn('Header');

  return (
    <section className={header()}>
      <Link to="/" className={header('Logo')}>
        Todo
      </Link>
      <span className={header('Login')}>Log In</span>
    </section>
  );
};

export default Header;
