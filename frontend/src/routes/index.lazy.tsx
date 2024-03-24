import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Team />
    </div>
  );
}

function Team() {
  const people = [
    {
      name: "Devin MacGillivray",
      imageUrl: "https://avatars.githubusercontent.com/u/52307383?v=4",
      role: "",
    },
    {
      name: "Ian Baguio",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQG3vfvMrPbxbQ/profile-displayphoto-shrink_800_800/0/1517094766495?e=1717027200&v=beta&t=5reeDCpEseoHu81jZgp7mFXrrtXD_lBqD7CTLiIoCiM",
      role: "",
    },
    { name: "Ricky Zhang", imageUrl: "", role: "" },
    {
      name: "Habib Rahman",
      imageUrl: "https://avatars.githubusercontent.com/u/7229873?v=4",
      role: "",
    },
    {
      name: "Hubert Lin",
      imageUrl: "https://avatars.githubusercontent.com/u/10420994?v=4",
      role: "",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're building an auto-fill web component to make filling forms more
            accesible, especially for social workers and healthcare
            professionals filling out forms for their patients and clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
