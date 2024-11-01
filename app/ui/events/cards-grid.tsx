import { Event } from "@/app/lib/definitions";
import { FC } from "react";
import { EventCard } from "./event-card";

interface CardsGridProps {
  events: Event[];
}

export const CardsGrid: FC<CardsGridProps> = ({ events }) => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
