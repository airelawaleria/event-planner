"use client";

import { Button } from "@nextui-org/react";
import { link } from "fs";
import {
  ArrowLeftRight,
  Calendar,
  CalendarClock,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menus = [
  { title: "Upcoming Events", icon: <Calendar />, link: "/events" },
  { title: "Booked Events", icon: <CalendarClock />, link: "/booked-events" },
  { title: "Setting", icon: <Settings />, link: "/settings" },
];

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-tertiary h-screen p-5 pt-8 relative duration-300 flex flex-col`}
      >
        <div className="flex gap-x-4 items-center">
          <ul className="pt-6">
            {menus.map(({ title, icon, link }, idx) => (
              <li
                key={idx}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-powder-white text-sm items-center gap-x-4 
          "mt-2" ${idx === 0 && "bg-light-white"} `}
              >
                <Link href={link} className="flex flex-row gap-3">
                  {icon}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          isIconOnly
          onClick={() => setOpen(!open)}
          className="bg-tertiary text-powder-white"
        >
          <ArrowLeftRight />
        </Button>
      </div>
    </div>
  );
};
