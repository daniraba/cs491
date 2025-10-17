import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/hobbies", "routes/hobbies.tsx"),
	route("/hobbies/:id", "routes/hobbies/$id.tsx"),
	route("/about", "routes/about.tsx"),
] satisfies RouteConfig;
