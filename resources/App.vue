<template>
    <div id="app">
        Root:
        <router-view v-bind="params"></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: ['params']
}
</script>
