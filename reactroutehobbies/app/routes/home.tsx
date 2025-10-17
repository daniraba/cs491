import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniella Rabayev" },
    { name: "description", content: "ReactRouteHobbies - Homepage" },
  ];
}

const MY_NAME = "Daniella Rabayev";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Daniella Rabayev</h1>
      <h2 className="text-2xl font-semibold mb-4">CS 491</h2>
      <p className="mb-4">Home</p>
    </main>
  );
}