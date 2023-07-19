interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Delivery Driver', 'Customer Service Representative'],
  tenantName: 'Startup',
  applicationName: 'Bistro',
  addOns: ['chat', 'notifications', 'file'],
};
