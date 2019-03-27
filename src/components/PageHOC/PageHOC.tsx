import * as React from 'react';
import { cn } from '@bem-react/classname';

// components
import { List } from '../containers';
import Header from '../Header/Header';

// styles
import './PageHOC.scss';

const PageHOC = (PassedComponent: any): JSX.Element => {
  const page = cn('Page');

  return (
    <div className={page()}>
      <div className={page('Section', { right: true })}>
        <Header />
        <PassedComponent />
      </div>
      <div className={page('Section')}>
        <List />
      </div>
    </div>
  );
};
export default PageHOC;
