import * as React from 'react';

// components
import { List } from '../containers';

const PageHOC = (PassedComponent: any): JSX.Element => (
  <div className="page">
    <List />
    <PassedComponent />
  </div>
);

export default PageHOC;
