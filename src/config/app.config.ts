interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Library Manager', 'Librarian', 'IT Support', 'Library Member'],
  tenantName: 'Client',
  applicationName: 'Library App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View client information'],
  ownerAbilities: ['Manage users', 'Manage clients'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6c744095-5068-41b9-b9b7-6a3683640a15',
};
