import { Component as ReactComponent, FC } from 'react';

export interface Checker {
  message: string;
  validatorFunction: (value: string) => boolean;
}

export interface WithValidation {
  value: string;
//   Component: FC | ReactComponent;
  Component: any;
  checker: Checker;
}

export interface InputProps {
  value: string;
  checker?: Checker;
  pageTitleChange? : boolean
}
