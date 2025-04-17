"use client"

import { ColumnDef } from "@tanstack/react-table";

export type Player ={
    name: string
    nation: string
    pos: string
    age: number
    mp: number
    starts: number
    min: number
    gls: number
    ast: number
    crdy: number
    crdr: number
    xg: number
    npxg: number
    xag: number
    team: string
}

async function deletePlayer(playerName: string) {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/player/${playerName}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete player");
      }
  
      // Refresh the page or re-fetch data after deletion
      window.location.reload();
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

export const columns: ColumnDef<Player>[] =[
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "nation",
        header: "Nation",
    },
    {
        accessorKey: "pos",
        header: "Pos",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        accessorKey: "mp",
        header: "MP",
    },
    {
        accessorKey: "starts",
        header: "Starts",
    },
    {
        accessorKey: "min",
        header: "Mins",
    },
    {
        accessorKey: "gls",
        header: "Gls",
    },
    {
        accessorKey: "ast",
        header: "Ast",
    },
    {
        accessorKey: "pk",
        header: "PK",
    },
    {
        accessorKey: "crdy",
        header: "crdY",
    },
    {
        accessorKey: "crdr",
        header: "crdR",
    },
    {
        accessorKey: "xg",
        header: "XG",
    },
    {
        accessorKey: "npxg",
        header: "NPXG",
    },
    {
        accessorKey: "xag",
        header: "Xag",
    },
    {
        accessorKey: "team",
        header: "Team",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <button
            onClick={() => deletePlayer(row.original.name)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        )},

]