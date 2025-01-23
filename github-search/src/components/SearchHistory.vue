<template>
  <div>
    <h3 class="mb-4 text-lg font-semibold text-gray-700">Search History</h3>
    <ul class="divide-y divide-gray-300">
      <li
        v-for="(query, index) in repositoryStore.searchHistory"
        :key="index"
        class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-gray-100"
        @click="searchFromHistory(query)"
      >
        <img src="/history.svg" alt="History icon" class="w-5 h-5" />

        <span class="text-gray-800">{{ query }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRepositoryStore } from "@/stores/repositoryStore";

const repositoryStore = useRepositoryStore();

const searchFromHistory = (query: string) => {
  repositoryStore.fetchRepositories(query);
};
</script>
