<template>
  <aside class="h-screen bg-black p-4 text-white position-static">
    <nav>
      <div class="flex flex-col justify-center items-center py-4">
        <g-link to="/">
          <g-image src="~/assets/img/logo_white.svg" class="logo" />
        </g-link>
        <small class="font-light">GAME DESIGN DOCUMENTATION</small>
      </div>
      <ul>
        <li v-for="edge in $static.docs.edges" :key="edge.node.id">
          <g-link
            :to="edge.node.path"
            class="uppercase font-bold hover:text-green-300"
          >{{ edge.node.title }}</g-link>
          <ul>
            <li v-for="heading in edge.node.headings" :key="heading.anchor" class="pl-2">
              <a
                :href="'/' + edge.node.slug + heading.anchor"
                class="font-light hover:text-green-400 hover:underline"
              >{{ heading.value }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<static-query>
query {
  docs: allDoc {
    totalCount
    edges {
      node {
        id
        title
        slug
        timeToRead
        date (format: "MMMM D, YYYY")
        path
        headings {
          value
          anchor
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "sidebar"
};
</script>

<style lang="scss" scoped>
aside {
  min-width: 260px;
  position: sticky;
  top: 0;

  img.logo {
    width: 100%;
    max-width: 230px;
    transition: all 200ms ease-in-out;
    filter: drop-shadow(0 0 0 transparent);

    &:hover {
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.85));
    }
  }
}
</style>