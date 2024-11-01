import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const filePath = "count.txt";

async function mockFetchDate() {
  return new Date();
}

const getDate = createServerFn("GET", () => {
  return mockFetchDate();
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getDate(),
});

function Home() {
  const state = Route.useLoaderData();

  return (
    <div>
      <p>Date is {state.toDateString()}</p>
    </div>
  );
}
