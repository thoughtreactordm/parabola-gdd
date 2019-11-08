<template>
  <aside class="h-screen bg-black p-4 text-white position-static">
    <nav>
      <div class="flex flex-col justify-center items-center py-4">
        <g-link to="/">
          <g-image src="~/assets/img/logo_white.svg" width="800" class="logo" />
        </g-link>
        <small class="font-light">GAME DESIGN DOCUMENTATION</small>
      </div>
      <ul>
        <li v-for="edge in $static.docs.edges" :key="edge.node.id">
          <g-link
            :to="edge.node.path"
            class="topic uppercase font-bold hover:text-green-300"
          >{{ edge.node.title }}</g-link>
          <ul>
            <li v-for="heading in edge.node.headings" :key="heading.anchor" class="pl-6">
              <a
                :href="'/' + edge.node.slug + heading.anchor"
                class="sub-topic font-light hover:text-green-400 hover:underline text-gray-100"
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
import throttle from "lodash/throttle";

export default {
  name: "sidebar",

  methods: {
    sidebarScroll: function() {
      let mainNavLinks = document.querySelectorAll(
        ".topic.active + ul .sub-topic"
      );
      let fromTop = window.scrollY;
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        let allCurrent = document.querySelectorAll(".current"),
          i;
        if (section.offsetTop <= fromTop) {
          for (i = 0; i < allCurrent.length; ++i) {
            allCurrent[i].classList.remove("current");
          }
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    }
  },

  mounted() {
    window.addEventListener("scroll", throttle(this.sidebarScroll, 50));
  }
};
</script>

<style lang="scss" scoped>
aside {
  min-width: 300px;
  position: sticky;
  top: 0;
  overflow: auto;

  img.logo {
    width: 100%;
    max-width: 230px;
    transition: all 200ms ease-in-out;
    filter: drop-shadow(0 0 0 transparent);

    &:hover {
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.85));
    }
  }

  a.topic {
    &.active {
      color: lime;
      text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
    }
  }

  a.sub-topic {
    transition: all 150ms ease-in-out;
    position: relative;

    &:after {
      content: "";
      transition: opacity 0.15s ease-in-out;
      width: 6px;
      height: 6px;
      background: lime;
      box-shadow: 0 0 8px rgba(0, 255, 0, 0.9);
      border-radius: 100%;
      display: block;
      opacity: 0;
      position: absolute;
      top: 7px;
      left: -15px;
    }

    &.current {
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>