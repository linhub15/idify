import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-row min-h-screen h-full">
      <div className="flex w-72 flex-col">
        <Nav />
      </div>
      <div className="bg-slate-50 w-full h-full">
        <Outlet />
      </div>
    </div>  
  ),
});
