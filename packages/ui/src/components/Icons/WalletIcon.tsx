import { LsdIcon } from "@acid-info/lsd-react";

export const WalletIcon = LsdIcon(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={20}
      height={20}
      {...props}
    >
      <rect x="22" y="17" width="2" height="2" />
      <path d="M28,8H4V5H26V3H4A2,2,0,0,0,2,5V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM4,26V10H28v3H20a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h8v3ZM28,15v6H20V15Z" />
    </svg>
  ),
  { filled: true }
);
