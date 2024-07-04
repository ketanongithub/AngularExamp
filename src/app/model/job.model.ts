//This is used for display JOBS data interface
export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  types: string[];
  industries: string[];
  publishDate: string;
  location: string;
  reference: string;
  description: string;
}