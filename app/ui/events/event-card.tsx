import { Event } from "@/app/lib/definitions";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import moment from "moment";
import { FC } from "react";

interface EventCardProps {
  event: Event;
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="py-4 inline-flex">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {moment(event.date).format("MMMM Do YYYY, h:mm a")}
        </p>
        <small className="text-default-500">{`${event.hostedBy?.address.street} ${event.hostedBy?.address.houseNumber}, ${event.hostedBy?.address.zipIndex} ${event.hostedBy?.address.city}`}</small>
        <h4 className="font-bold text-large">{event.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Event Background Image"
          className="object-cover rounded-xl"
          src={event.image}
          width={270}
          height={270}
        />
        <div className="flex flex-row justify-end gap-3 bottom">
          <Button color="primary" variant="bordered">
            Bookmark
          </Button>
          <Button color="primary">Enroll</Button>
        </div>
      </CardBody>
    </Card>
  );
};
