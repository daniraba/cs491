import type { Route } from "./+types/hobbies";
import { Link } from "react-router";

const hobbies = [
  { id: "1", title: "Baking", img: "https://picsum.photos/seed/photo/600/400", desc: "I enjoy baking various desserts for my friends and family." },
  { id: "2", title: "Fitness", img: "https://picsum.photos/seed/cycle/600/400", desc: "I've been going to the gym for 5 years now." },
  { id: "3", title: "Cooking", img: "https://picsum.photos/seed/cook/600/400", desc: "I love to cook." },
  { id: "4", title: "Tennis", img: "https://picsum.photos/seed/garden/600/400", desc: "I enjoy playing tennis." },
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Hobbies" }];
}

export default function Hobbies() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((h) => (
          <article key={h.id} className="border rounded shadow p-2">
            <img src={h.img} alt={h.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl mt-2">{h.title}</h2>
            <p className="text-sm text-gray-600">{h.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
