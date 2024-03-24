import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Header />
      <h2>Team Members</h2>
      <ul>
        <li>Devin</li>
        <li>Ian Baguio</li>
        <li>Ricky Zhang</li>
        <li>Habib Rahman</li>
        <li>Hubert Lin</li>
      </ul>
    </div>
  );
}
