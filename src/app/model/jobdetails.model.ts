import { DatePipe } from "@angular/common";

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