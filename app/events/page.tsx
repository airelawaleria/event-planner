import { events } from "../lib/data";
import { CardsGrid } from "../ui/events/cards-grid";

export default function Page() {
  return (
    <div>
      <CardsGrid events={events} />
    </div>
  );
}
