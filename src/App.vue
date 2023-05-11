<script setup lang="ts">
import { DefaultLayout } from "@/ui/layouts";
import { Dashboard } from "@/ui/views";
</script>

<template>
  <component :is="DefaultLayout">
    <Dashboard />
  </component>
</template>
