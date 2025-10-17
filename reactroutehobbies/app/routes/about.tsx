import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }];
}

export default function About() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl mb-2">About Me</h1>
      <p className="mb-2">Daniella Rabayev</p>
      <p className="mb-2">Senior in Computer Science</p>
    </main>
  );
}
