<script setup lang="ts">
import { ref, watch } from "vue";
import { useRepositoryStore } from "@/stores/repositoryStore";
import SearchInput from "@/components/SearchInput.vue";
import RepositoryList from "@/components/RepositoryList.vue";
import Hero from "@/components/Hero.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import Spinner from "@/components/Spinner.vue";

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

    <div class="p-6">
      <RepositoryList
        v-if="
          !repositoryStore.isLoading &&
          !repositoryStore.errorMessage &&
          repositoryStore.repositories.length
        "
        :repositories="repositoryStore.repositories"
        class="mt-6"
      />
    </div>

    <ErrorModal
      :message="repositoryStore.errorMessage"
      :visible="isModalVisible"
      @close="closeErrorModal"
    />
  </div>
</template>
