<template>
<div id="app">
    <component :is="currentComponent" v-bind="params"></component>
</div>
</template>

<script>
import views from './components'

export default {
  name: 'App',
  components: views,
  props: ['view', 'params'],
  computed: {
    currentComponent () {
      return this.view
    }
  }
}
</script>
