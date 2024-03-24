import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>ID-ify</h3>
      <p>Hackathon 2024</p>
      <ul>
        <li>hello</li>
      </ul>
    </div>
  );
}
