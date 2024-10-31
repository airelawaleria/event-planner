import { Event } from "@/app/lib/definitions";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface EventCardProps {
  event: Event;
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{event.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Event Background Image"
          className="object-cover rounded-xl"
          src={event.image}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
