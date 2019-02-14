<template>
  <q-resource-create v-bind="$attrs">
    <template slot='create' slot-scope="scope">
      <q-text v-model="scope.resource" :attribute="scope.config.getAttribute('name')" :errors="scope.errors"/>
      <q-text v-model="scope.resource" :attribute="scope.config.getAttribute('email')" :errors="scope.errors"/>
      <q-secret v-model="scope.resource" :attribute="scope.config.getAttribute('password')" :errors="scope.errors"/>
    </template>
  </q-resource-create>
</template>