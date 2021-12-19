import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

/** Component(s) */
import CompanyCard from '../CompanyCard';

/** Type(s) */
import { Company } from '../../@types/company.type';
import { RootState } from '../../store/rootReducer';

const index = () => {
  const companies = useSelector((state: RootState) => state.company.companies);

  useEffect(() => {
    console.log('companies', companies);
  }, [companies]);
  return (
    <div className="companies-grid">
      {companies.length > 0 &&
        companies.map((company: Company) => (
          <CompanyCard company={company} key={company.id} />
        ))}
    </div>
  );
};

export default index;
