import { SideBar } from "../ui/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 m-8">{children}</div>
    </div>
  );
}
