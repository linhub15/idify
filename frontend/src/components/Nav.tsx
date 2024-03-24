import { Link } from "@tanstack/react-router";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/license_form", label: "License Form" },
    { to: "/madi_verify", label: "Madi Verify" },
  ];
  return (
    <div className="flex grow gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <div className="text-2xl font-semibold leading-6 text-gray-200 pt-8">
              ID-ify
            </div>
            <ul role="list" className="-mx-2 pt-6 space-y-1.5">
              {links.map((link) => (
                <li>
                  <Link
                    to={link.to}
                    className={classNames(
                      "text-gray-400 hover:text-white hover:bg-gray-800 [&.active]:text-white [&.active]:underline",
                      "group flex gap-x-3 rounded-md p-2 leading-6 font-semibold",
                    )}
                  >
                    <span className="truncate">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
