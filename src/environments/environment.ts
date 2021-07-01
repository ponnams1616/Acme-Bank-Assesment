const BASE_URL = 'http://localhost:8080/api';
export const environment = {
  production: false,
  global: {
    company_name: 'Acme Bank'
  },
  api: {
    accounts: `${BASE_URL}/accounts`
  },
  assets: '/assets'
};

