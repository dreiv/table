<script setup lang="ts">
import { DataTable } from "@/ui/common";
</script>

<template>
  <header>
    <h1>Table</h1>
  </header>

  <main :class="$style.main">
    <data-table :class="$style.cover" />
  </main>
</template>

<style lang="scss" module>
@import "@/ui/assets/styles/abstracts";

.main {
  flex: 1;
  position: relative;
  background-color: var(--surface);
}

.cover {
  @include absolute(0, 0);
}
</style>
