import type { Route } from "../+types/hobbies";
import { useParams } from "react-router";
import { Link } from "react-router";

const hobbies = [
  { id: "1", title: "Baking", img: "https://picsum.photos/seed/photo/600/400", desc: "I enjoy baking various desserts for my friends and family." },
  { id: "2", title: "Fitness", img: "https://picsum.photos/seed/cycle/600/400", desc: "I've been going to the gym for 5 years now." },
  { id: "3", title: "Cooking", img: "https://picsum.photos/seed/cook/600/400", desc: "I love to cook." },
  { id: "4", title: "Tennis", img: "https://picsum.photos/seed/garden/600/400", desc: "I enjoy playing tennis." },
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Hobby" }];
}

export default function HobbyDetail() {
  const params = useParams();
  const hobby = hobbies.find((h) => h.id === params.id);
  if (!hobby)
    return (
      <main className="container mx-auto p-4">
        <h1>Not found</h1>
        <Link to="/hobbies" className="text-blue-600 underline">
          Back to hobbies
        </Link>
      </main>
    );

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl">{hobby.title}</h1>
      <img src={hobby.img} alt={hobby.title} className="w-full max-w-3xl mt-4 rounded" />
      <p className="mt-4">{hobby.details}</p>
      <Link to="/hobbies" className="text-blue-600 underline mt-4 inline-block">
        Back
      </Link>
    </main>
  );
}
