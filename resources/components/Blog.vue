<template>
    <div id="blog">
        <h1>Blog</h1>
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <div>{{ post.content }}</div>
            <hr/>
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
    div#blog > h1 {
        color: $color;
    }
</style>
