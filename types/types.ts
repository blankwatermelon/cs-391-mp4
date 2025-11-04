export interface HarvardObject {
  id: number;
  title: string;
  dated: string;
  classification: string;
  culture: string;
  medium: string;
  primaryimageurl: string;
  people: Array<{
    name: string;
    role: string;
  }>;
}

export interface HarvardAPIResponse {
  info: {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
  };
  records: HarvardObject[];
}