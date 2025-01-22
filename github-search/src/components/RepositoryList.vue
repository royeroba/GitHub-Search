<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="repository in repositories"
      :key="repository.id"
      class="p-6 bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg"
    >
      <h2 class="text-xl font-semibold text-gray-800">{{ repository.name }}</h2>
      <p class="mt-2 text-sm text-gray-600" v-if="repository.description">
        {{ repository.description }}
      </p>
      <div class="flex items-center mt-4 space-x-4 text-gray-500">
        <div class="flex items-center space-x-1">
          <span>⭐</span>
          <span>{{ repository.stargazers_count }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span>🍴</span>
          <span>{{ repository.forks_count }}</span>
        </div>
      </div>
      <a
        :href="repository.html_url"
        target="_blank"
        class="inline-block px-4 py-2 mt-4 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        View on GitHub
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Repository } from "@/types/types";

defineProps<{ repositories: Repository[] }>();
</script>
