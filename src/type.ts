export interface ICustomer {
  id?: string;
  companyName: string;
  contactTitle: string;
  address: {
    city: string;
    country: string;
  };
}
