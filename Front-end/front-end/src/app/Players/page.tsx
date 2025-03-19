import { Player, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Player[]> {
  // Fetch data from your API here.
    const data = await fetch("http://localhost:8080/api/v1/player");
    const playerStats = data.json();

    return playerStats
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
