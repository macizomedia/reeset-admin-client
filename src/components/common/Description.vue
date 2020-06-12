<template>
  <v-flex xs12 text-xs-left mb-2 v-html="description"></v-flex>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: String
  }
}
</script>
