import * as React from 'react';
import { cn } from '@bem-react/classname';

// components
import { List } from '../containers';

// styles
import './PageHOC.scss';

const PageHOC = (PassedComponent: any): JSX.Element => {
  const page = cn('Page');

  return (
    <div className={page()}>
      <PassedComponent />
      <List />
    </div>
  );
};
export default PageHOC;
