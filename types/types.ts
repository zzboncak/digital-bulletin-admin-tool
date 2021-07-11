export type ServiceElemetTypes =
  | "song"
  | "liturgy"
  | "hymn"
  | "sermon"
  | "announcement"
  | "scripture";

export interface ServiceElement {
  _id?: string;
  title: string;
  isExpandable: boolean;
  type: ServiceElemetTypes;
  content: string;
  createdAt: Date;
}

export interface Subsection {
  _id?: string;
  title: string;
  subtext: string;
  serviceElements: string[];
}
