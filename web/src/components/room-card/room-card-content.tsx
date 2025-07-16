import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { dayjs } from "@/lib/format-relative-date";
import { CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import type { GetRoomsAPIResponse } from "@/http/types";

export function RoomCardContent({ data }: { data: GetRoomsAPIResponse }) {
  return (
    <CardContent className="flex flex-col gap-3">
      {data?.map((room) => {
        return (
          <Link
            key={room.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50"
            to={`/rooms/${room.id}`}
          >
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="font-medium">{room.name}</h3>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {dayjs(room.createdAt).toNow()}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {room.questionCount} pergunta(s)
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-2 text-sm">
              Entrar
              <ArrowRight className="size-3" />
            </span>
          </Link>
        );
      })}
    </CardContent>
  );
}
