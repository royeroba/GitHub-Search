<template>
  <div class="flex items-center w-full max-w-lg mx-auto">
    <input
      v-model="searchRepository"
      type="text"
      placeholder="Search repositories..."
      class="flex-1 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none"
      @keyup.enter="emitSearch"
    />
    <button
      @click="emitSearch"
      class="px-6 py-3 ml-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
    >
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchRepository = ref("");
const emit = defineEmits(["search"]);

const emitSearch = () => {
  if (searchRepository.value.trim()) {
    emit("search", searchRepository.value.trim());
    searchRepository.value = "";
  }
};
</script>
