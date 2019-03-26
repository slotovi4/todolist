import * as React from 'react';

// components
import { List } from '../containers';

const PageHOC = (PassedComponent: any): JSX.Element => (
  <div className="page">
    <PassedComponent />
    <List />
  </div>
);

export default PageHOC;
