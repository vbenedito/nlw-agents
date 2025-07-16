import { Card } from "../ui/card";
import type { GetRoomsAPIResponse } from "@/pages/create-room";
import { RoomCardHeader } from "./room-card-header";
import { RoomCardContent } from "./room-card-content";

export function RoomCard({ data }: { data: GetRoomsAPIResponse }) {
  return (
    <Card>
      <RoomCardHeader />
      <RoomCardContent data={data} />
    </Card>
  );
}
