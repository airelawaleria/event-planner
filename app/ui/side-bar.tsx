"use client";

import { Button } from "@nextui-org/react";
import {
  ArrowLeftRight,
  Calendar,
  CalendarClock,
  CalendarRange,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menus = [
  { title: "Upcoming Events", icon: <Calendar />, link: "/events" },
  { title: "Booked Events", icon: <CalendarClock />, link: "/booked-events" },
  {
    title: "Organised Events",
    icon: <CalendarRange />,
    link: "/organised-events",
  },
  { title: "Setting", icon: <Settings />, link: "/settings" },
];

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-primary h-screen p-5 pt-8 relative duration-300 flex flex-col`}
      >
        <div className="flex gap-x-4 items-center">
          <ul>
            {menus.map(({ title, icon, link }, idx) => (
              <li
                key={idx}
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-white text-sm items-center 
           ${idx === 0 && "bg-light-white"} `}
              >
                <Link
                  href={link}
                  className={`flex flex-row gap-3  border-white rounded-md p-2 align-middle ${
                    pathname === link ? "border-1" : "border-hidden"
                  }`}
                >
                  {icon}
                  <span className={`${!open && "hidden"}`}>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          isIconOnly
          onClick={() => setOpen(!open)}
          className="bg-primary text-white"
        >
          <ArrowLeftRight />
        </Button>
      </div>
    </div>
  );
};
