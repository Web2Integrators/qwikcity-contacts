import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { prisma } from "~/lib/prisma";

export const useContacts = routeLoader$(async ({ url }) => {
  const search = url.searchParams.get("search");
  const contacts = await prisma.contact.findMany({
    where: search?.trim().length
      ? {
          OR: [
            {
              firstName: {
                contains: search,
              },
            },
            {
              lastName: {
                contains: search,
              },
            },
          ],
        }
      : undefined,
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
  return {
    contacts,
  };
});
export default component$(() => {
  const contactsSignal = useContacts();
  return (
    <div>
      <main>
        <Slot />
      </main>
    </div>
  );
});
