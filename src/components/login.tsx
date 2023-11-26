import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <Form class="login-form" action={signIn}>
      <input type="hidden" name="providerId" value="credentials" />
      <input type="hidden" name="options.callbackUrl" value="/dashboard" />
      <input type="text" name="options.email" placeholder="Email" />
      <input type="password" name="options.password" placeholder="Password" />
      <button>Sign In</button>
    </Form>
  );
});
