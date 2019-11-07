<template>
  <div class="flex">
    <sidebar />

    <main class="p-8 text-white bg-gray-900">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  height: 100vh;

  main {
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.35em;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.25em;
    }

    h3 {
      font-size: 1.45rem;
      font-weight: 700;
      margin-bottom: 0.2em;
    }

    p {
      margin-bottom: 1em;
    }
  }
}
</style>
