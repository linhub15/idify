import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { LicenceProvider } from "../idify/context/IdContext";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-row min-h-screen h-full">
      <Nav />
      <LicenceProvider>
        <div className="bg-slate-50 w-full h-full">
          <Outlet />
        </div>
      </LicenceProvider>
    </div>
  ),
});
