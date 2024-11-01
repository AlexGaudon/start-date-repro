import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import SuperJSON from "superjson";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    transformer: new SuperJSON(),
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
