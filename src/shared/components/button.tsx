import React from "react";
import { classNames } from "../utils/handleClassNames";

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  form?: string;
  type?: string;
  tabIndex?: number;
}> = ({ children, className, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={classNames(
      `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${className}`
    )}
  >
    {children}
  </button>
);
