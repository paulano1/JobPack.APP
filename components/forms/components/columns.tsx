"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Filter, User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { deleteFilter } from "@/apiInstance";
import React from "react";
import { UserContext } from "@/apiInstance/useAuth";

export const columns: ColumnDef<Filter>[] = [
  
  {
    accessorKey: "keywords",
    header: "Keywords",
  },
  {
    accessorKey: "state",
    header: "City",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
  {
    id: "actions",
    cell: ({ row }) => <RemoveButton data={row.original} />,
  },
];


export const RemoveButton: React.FC<{ data: Filter }> = ({ data }) => {
  const user = React.useContext(UserContext);
  return (
    <button
      onClick={() => {
        deleteFilter(String(user?.uid), String(data.id)).then(() => window.location.reload());
      }}
      className="text-red-500"
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
    </button>
  );
}