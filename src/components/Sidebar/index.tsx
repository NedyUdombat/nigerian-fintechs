import React from 'react';

const index = () => {
  return (
    <aside className="sidebar">
      <div className="title-section">
        <h1 className="logo-title">Nigerian Fintechs</h1>
      </div>

      <section className="filter-section">
        <p className="filter-section-title">Filter</p>

        {/* 
        Should consist
        1. filter by the letter compnany start with 
        2. Date created
        3. Sector

        4. partial text search in name or bio
        */}
      </section>
    </aside>
  );
};

export default index;
