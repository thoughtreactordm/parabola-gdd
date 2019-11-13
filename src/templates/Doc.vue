<template>
  <Layout>
    <h1>{{ $page.doc.title }}</h1>
    <div class="mb-1">
      <strong>Last Updated:</strong>
      {{ $page.doc.updated }}
    </div>

    <div class="mb-1">
      <strong>Time to Read:</strong>&nbsp;
      <em>{{ $page.doc.timeToRead }}&nbsp;minutes</em>
    </div>
    <div class="markdown" v-html="$page.doc.content" />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "MMMM D, YYYY")
    updated (format: "MMMM D, YYYY")
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
  padding-bottom: 65vh;
}

span.icon.icon-link {
  &:after {
    content: "#";
    color: rgba(0, 255, 0, 0.5);
    width: 20px;
    padding: 0 3px;
  }
}
</style>