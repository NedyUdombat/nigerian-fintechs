import React from 'react';

/** Component(s) */
import Sidebar from '../../components/Sidebar';
import Companies from '../../components/Companies';

const Index = (): JSX.Element => (
  <section className="content">
    <Sidebar />
    <main className="main">
      {/* Header component
        Should consist of

        Search bar

      */}

      {/* Results Section */}

      <Companies />
    </main>
  </section>
);

export default Index;
