export interface SidenavType {
  isSidenavOpen: boolean;
  intialRenderForAnimation: string;
  setIsSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialRenderForAnimation: React.Dispatch<React.SetStateAction<string>>;
}

export interface GeneraInfoComponentType {
  heading: string;
  details: string;
  position: string;
  backgroundColor: string;
  color: string;
  textAlignment: string;
  detailColor: string;
}
