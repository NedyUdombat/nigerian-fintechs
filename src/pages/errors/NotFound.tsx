import React from 'react';
import { Link } from 'react-router-dom';

/** Util(s) */
import { ROUTE_URLS } from '../../routes/RouteUrls';

const NotFound = (): JSX.Element => (
  <section>
    <nav>
      <Link to={ROUTE_URLS.HOME_URL}>HOME</Link>
    </nav>
    <main>
      <div>
        <h1>404</h1>
        <p>Something went wrong. We can’t find the page you are looking for</p>
        <Link to={ROUTE_URLS.HOME_URL}>Go back</Link>
      </div>
    </main>
  </section>
);

export default NotFound;
