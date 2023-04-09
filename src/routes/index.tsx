import { type DocumentHead } from "@builder.io/qwik-city";

<section class="min-h-screen grid place-items-center">
  <div class="max-w-md w-full mx-auto text-center flex flex-col space-y-4">
    <img
      src="https://kit.svelte.dev/favicon.png"
      class="w-16 h-16 mx-auto"
      loading="lazy"
      alt=""
    />

    <div class="text-gray-500">
      <p>This is a demo for Sveltekit</p>
      <p>
        Check out the docs at{" "}
        <a href="https://kit.svelte.dev/" target="_blank" class="text-blue-500">
          https://kit.svelte.dev
        </a>
      </p>
    </div>
  </div>
</section>;

export const head: DocumentHead = {
  title: "Contacts | Qwikcity",
};
