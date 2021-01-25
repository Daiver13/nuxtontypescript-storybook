<template>
  <div
    @click="handle"
  >
    My components title: {{ comTitle }}

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class TestComponent extends Vue {
  @Prop({ default: 'string' }) data: string
}

</script>

<style lang="scss">

</style>
