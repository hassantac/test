import { ReactNode } from 'react';

export interface IMainProps {
  content: Function;
  setPage: Function;
  page?: Number;
}
export interface IFooterProps {
  leftText: string;
  rightText: string;
}
