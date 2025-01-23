<template>
  <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="repository in repositories"
      :key="repository.id"
      class="flex flex-col justify-between p-6 bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg"
    >
      <h2 class="text-xl font-semibold text-gray-800 break-words">
        {{ repository.name }}
      </h2>

      <p
        class="mt-2 text-sm text-gray-600 break-words"
        v-if="repository.description"
      >
        {{ repository.description }}
      </p>

      <div
        class="flex flex-col items-start mt-4 space-y-2 text-gray-500 md:flex-row md:items-center md:space-y-0 md:space-x-4"
      >
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
        class="inline-block px-4 py-2 mt-4 text-center text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
