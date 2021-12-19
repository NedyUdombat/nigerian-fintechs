const DEFAULT_STATE = {
  isLoading: false,
  error: {},
  companies: [
    {
      id: '1',
      name: '03Cards',
      website: 'https://www.google.com/',
      logo: '',
      sector: 'Lending',
      profile:
        '03Cards are used as a delivery channel to offer benefits to both debit and credit card holders via its mobile application',
    },
    {
      id: '2',
      name: 'Accountinghub',
      website: 'https://www.google.com/',
      logo: '',
      sector: 'Financial management',
      profile:
        'Accountinghub delivers services such as bookkeeping, tax, payroll, financial models and process improvement',
    },
    {
      id: '3',
      name: 'Boost Technology',
      website: 'https://www.google.com/',
      logo: '',
      sector: 'Other',
      profile:
        'Boost Technology helps small businesses to thrive by allowing them to order and receive stock swiftly',
    },
    {
      id: '4',
      name: 'Globasure Technologies',
      website: 'https://www.google.com/',
      logo: '',
      sector: 'Software solutions',
      profile:
        'Globasure Technologies develops and provides effective end-to-end payments solutions to fintechs, banks and telcos',
    },
    {
      id: '5',
      name: 'Secapay',
      website: 'https://www.google.com/',
      logo: '',
      sector: 'Payments',
      profile:
        'Secapay is an online payments platform helping individuals and businesses',
    },
  ],
};

export const companiesReducer = (
  state = DEFAULT_STATE,
  action?: { payload: unknown; type: string },
) => {
  switch (action?.type) {
    default:
      return state;
  }
};
