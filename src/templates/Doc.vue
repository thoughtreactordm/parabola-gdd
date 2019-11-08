<template>
  <Layout>
    <h1>{{ $page.doc.title }}</h1>
    <div class="markdown" v-html="$page.doc.content" />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.doc.description
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.markdown {
  padding-bottom: 50vh;
}

span.icon.icon-link {
  &:after {
    content: "#";
    color: rgba(0, 255, 0, 0.5);
    width: 20px;
    padding: 0 3px;
    margin-right: 3px;
  }
}
</style>