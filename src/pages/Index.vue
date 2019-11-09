<template>
  <Layout>
    <div class="w-100 flex justify-center p-24">
      <g-image src="~/assets/img/logo_white.svg" width="1400" class="logo" />
    </div>

    <h1>Game Design Document</h1>

    <p>
      This microsite contains the active design and development documentation for
      <a
        href="https://parabolagame.com"
      >PARABOLA</a>, a first person puzzle game by
      <a href="https://thought-reactor.net">Thought Reactor</a>.
    </p>

    <blockquote>
      <em>
        <strong>Warning!</strong>
        <br />This documentation contains spoilers and information not designed for consumer consumption. If you are interested in playing this game - do not read this documentation unless you are certain you want to be spoiled.
      </em>
    </blockquote>

    <p>
      This site's content are 100% the intellectual property of Thought Reactor and are subject to copyright. It is made public for educational purposes and it's code can be found on
      <a
        href="https://github.com/thoughtreactordm/parabola-gdd"
      >GitHub</a> for anyone interseted in seeing how it was built or wanting to fork the code for their own documentation site.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
