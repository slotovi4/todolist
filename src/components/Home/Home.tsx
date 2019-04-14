import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

// styles
import './Home.scss';

const Home = () => {
  const home = cn('Home');

  return (
    <section className={home()}>
      <h1 className={home('Title')}>Get started with TODO</h1>
      <Link className={home('Button')} to='/create'>
        create
      </Link>
    </section>
  );
};

export default Home;
