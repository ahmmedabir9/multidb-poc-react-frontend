import { getApi, postApi, postFormData } from "./api/index";

export const GetOrgDetailsByDomain = (url) =>
  getApi(`api/org-settings/get-org-token/${url}`);

export const GetAllCustomers = () => getApi("api/customer/get-all-customers");

export const CreateCustomer = (data) =>
  postApi("api/customer/create-customer", data);
