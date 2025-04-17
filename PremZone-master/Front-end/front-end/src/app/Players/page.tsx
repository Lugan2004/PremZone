"use client"; // Ensure this runs on the client side

import { useState, useEffect } from "react";
import { Player, columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchPlayers(): Promise<Player[]> {
  const response = await fetch("http://localhost:8080/api/v1/player");
  return response.json();
}

export default function Page() {
  const [players, setPlayers] = useState<Player[]>([]);

  // Fetch players on component mount
  useEffect(() => {
    fetchPlayers().then(setPlayers);
  }, []);

  async function deletePlayer(playerName: string) {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/player/${playerName}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete player");

      // Update state by filtering out the deleted player
      setPlayers((prevPlayers) => prevPlayers.filter((player) => player.name !== playerName));
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={players.map((player) => ({
          ...player,
          delete: () => deletePlayer(player.name), // Pass delete function
        }))}
      />
    </div>
  );
}
