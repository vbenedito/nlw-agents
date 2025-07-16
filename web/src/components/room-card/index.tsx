import { Card } from "../ui/card";
import { RoomCardHeader } from "./room-card-header";
import { RoomCardContent } from "./room-card-content";
import type { GetRoomsAPIResponse } from "@/types";

export function RoomCard({ data }: { data: GetRoomsAPIResponse }) {
  return (
    <Card>
      <RoomCardHeader />
      <RoomCardContent data={data} />
    </Card>
  );
}
