import { Key } from "react";

export default async function NameList(){
    const data = await fetch("http://localhost:8080/api/v1/player");
    const players = await data.json();

    return (
        <ul>
            {players.map((player: { name: Key | null | undefined; }) =>(
                <li key={player.name}>{player.name}</li>
            ))}
        </ul>
    )
}
