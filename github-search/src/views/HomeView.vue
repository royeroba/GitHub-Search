<script setup lang="ts">
import { useRepositoryStore } from "@/stores/repositoryStore";
import SearchInput from "@/components/SearchInput.vue";
import RepositoryList from "@/components/RepositoryList.vue";

// Usa el store de Pinia
const repositoryStore = useRepositoryStore();
</script>

<template>
  <div class="p-6">
    <h1 class="mb-4 text-2xl font-bold text-center text-gray-800">
      GitHub Repository Search
    </h1>

    <!-- Componente de búsqueda -->
    <SearchInput @search="repositoryStore.fetchRepositories" />

    <!-- Indicador de carga -->
    <div
      v-if="repositoryStore.isLoading"
      class="mt-4 text-center text-blue-500"
    >
      Loading...
    </div>

    <!-- Mensaje de error -->
    <div
      v-if="repositoryStore.errorMessage"
      class="mt-4 text-center text-red-500"
    >
      {{ repositoryStore.errorMessage }}
    </div>

    <!-- Lista de repositorios -->
    <RepositoryList
      v-if="
        !repositoryStore.isLoading &&
        !repositoryStore.errorMessage &&
        repositoryStore.repositories.length
      "
      :repositories="repositoryStore.repositories"
    />

    <!-- Mensaje si no hay resultados -->
    <div
      v-else-if="
        !repositoryStore.isLoading &&
        !repositoryStore.errorMessage &&
        repositoryStore.repositories.length === 0
      "
      class="mt-4 text-center text-gray-500"
    >
      No repositories found.
    </div>
  </div>
</template>
