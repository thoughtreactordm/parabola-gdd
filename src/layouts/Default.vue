<template>
  <div class="flex">
    <sidebar />

    <main class="p-8 text-white bg-gray-900 w-full">
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
