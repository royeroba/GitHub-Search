<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-lg font-semibold text-red-600">Error</h2>
      <p class="mt-4 text-gray-700">{{ message }}</p>
      <div class="flex justify-end mt-6 space-x-2">
        <button
          class="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
  visible: boolean;
}>();

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
