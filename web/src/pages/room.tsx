import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Room Page</h1>
    </div>
  );
}
