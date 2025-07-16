import { RoomCard } from "@/components/room-card";
import { useRooms } from "@/http/use-rooms";

export function CreateRoom() {
  const { data } = useRooms();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="m-auto max-w-4xl">
        <div className="grid gap-8 grid-cols-2 items-start">
          <RoomCard data={data} />
        </div>
      </div>
    </div>
  );
}
