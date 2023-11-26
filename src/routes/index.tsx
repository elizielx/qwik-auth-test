import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Login from "../components/login";

export default component$(() => {
  return (
    <>
      <div class="container">
        <h1>Hello, world!</h1>
        <br />
        <Login />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
