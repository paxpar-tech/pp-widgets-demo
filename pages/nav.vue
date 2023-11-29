<script setup>
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]
</script>

<template>
  <UBreadcrumb :links="links" />

  <UButton color="primary">Documents</UButton>
  <UButton color="primary" variant="ghost">Craftforms</UButton>
  <UButton color="primary" variant="ghost">Checklist</UButton>

</template>

