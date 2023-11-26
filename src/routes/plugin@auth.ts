import { serverAuth$ } from "@builder.io/qwik-auth";
import Credentials from "@auth/core/providers/credentials";
import type { Provider } from "@auth/core/providers";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Credentials({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async authorize(credentials, req): Promise<any> {
          const user = {
            id: 1,
            name: "Mike",
            email: "mike@example.com",
          };

          return user;
        },
      }),
    ] as Provider[],
  }));
