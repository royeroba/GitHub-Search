<script setup lang="ts">
import { ref, watch } from "vue";
import { useRepositoryStore } from "@/stores/repositoryStore";
import SearchInput from "@/components/SearchInput.vue";
import RepositoryList from "@/components/RepositoryList.vue";
import Hero from "@/components/Hero.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import Spinner from "@/components/Spinner.vue";
import SearchHistory from "@/components/SearchHistory.vue";

const repositoryStore = useRepositoryStore();

const isModalVisible = ref(false);

watch(
  () => repositoryStore.errorMessage,
  (newValue) => {
    if (newValue) {
      isModalVisible.value = true;
    }
  }
);

const closeErrorModal = () => {
  isModalVisible.value = false;
  repositoryStore.errorMessage = "";
};

const hasResults = () =>
  repositoryStore.repositories.length > 0 && !repositoryStore.errorMessage;
</script>

<template>
  <div>
    <div class="relative">
      <Hero />
      <div class="absolute inset-0 flex items-center justify-center">
        <SearchInput @search="repositoryStore.fetchRepositories" />
      </div>
    </div>

    <Spinner :visible="repositoryStore.isLoading" />

    <div class="w-full px-6 py-8">
      <div
        v-if="!hasResults()"
        class="bg-white p-4 shadow-md rounded-md flex flex-col"
      >
        <SearchHistory />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
        <div class="bg-white p-4 shadow-md rounded-md w-full">
          <RepositoryList
            v-if="
              !repositoryStore.isLoading &&
              !repositoryStore.errorMessage &&
              repositoryStore.repositories.length
            "
            :repositories="repositoryStore.repositories"
          />
        </div>

        <div class="bg-white p-4 shadow-md rounded-md">
          <SearchHistory />
        </div>
      </div>
    </div>

    <ErrorModal
      :message="repositoryStore.errorMessage"
      :visible="isModalVisible"
      @close="closeErrorModal"
    />
  </div>
</template>
