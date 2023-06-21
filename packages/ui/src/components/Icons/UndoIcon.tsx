import { LsdIcon } from "@acid-info/lsd-react";

export const UndoIcon = LsdIcon(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={20}
      height={20}
      {...props}
    >
      <path d="M20,10H7.8149l3.5874-3.5859L10,5,4,11,10,17l1.4023-1.4146L7.8179,12H20a6,6,0,0,1,0,12H12v2h8a8,8,0,0,0,0-16Z" />
    </svg>
  ),
  { filled: true }
);
