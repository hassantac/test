export interface IMainProps {
  content: Function;
}
export interface IFooterProps {
  leftText: string;
  rightText: string;
}

export interface IPurchase {
  purchases: string[];
}

export interface IDataHOCState {
  data: { ID: string; Title: string }[];
}
