// This is details page data base on selected id
export interface Jobdetails {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;
    location: string;
    industries: string[];
    types: string[];
    description: string;
    publishDate: Date;
  }