import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <Form action={signIn}>
      <input type="hidden" name="providerId" value="credentials" />
      <input type="hidden" name="options.callbackUrl" value="/dashboard" />
      <button>Sign In</button>
    </Form>
  );
});
