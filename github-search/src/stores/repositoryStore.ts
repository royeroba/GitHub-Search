import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/lib/axios";
import type { Repository } from "@/types/types";

export const useRepositoryStore = defineStore("repositoryStore", () => {
  const repositories = ref<Repository[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");

  const fetchRepositories = async (query: string) => {
    if (!query.trim()) return;

    isLoading.value = true;
    errorMessage.value = "";

    try {
      const response = await api.get("", {
        params: {
          q: query,
          sort: "stars",
          order: "desc",
          per_page: 10,
          page: 1,
        },
      });

      if (response.data.items.length === 0) {
        errorMessage.value = "No repositories found for your search.";
        return;
      }

      repositories.value = response.data.items;
    } catch (error) {
      errorMessage.value =
        "There was a problem getting the repositories. Try again.";
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { repositories, isLoading, errorMessage, fetchRepositories };
});
