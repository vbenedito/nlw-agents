import { Link } from "react-router-dom";

export function CreateRoom() {
  return (
    <div>
      <h1>Create a new room</h1>

      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
