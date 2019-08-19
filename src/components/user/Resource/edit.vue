<template>
  <q-resource-edit v-bind="$attrs">
    <template slot='edit' slot-scope="scope">
      <q-attr-text v-model="scope.resource" :attribute="scope.config.getAttribute('name')" :errors="scope.errors"/>
      <q-attr-text v-model="scope.resource" :attribute="scope.config.getAttribute('email')" :errors="scope.errors"/>
      <q-secret v-model="scope.resource" :attribute="scope.config.getAttribute('password')" :errors="scope.errors"/>
    </template>
  </q-resource-edit>
</template>