<template>
<div class="blog">
    Blog:
    <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <hr>
    </div>
</div>
</template>

<script>
export default {
  name: 'Blog',
  props: ['posts']
}
</script>

<style lang="scss">
    $color: red;
    div {
        color: $color;
    }
</style>
