import React from "react";
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
  };
const ListboxWrapper = ({children}: Props) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
export default ListboxWrapper;