import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/lib/axios";
import type { Repository } from "@/types/types";

export const useRepositoryStore = defineStore("repositoryStore", () => {
  const repositories = ref<Repository[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");
  const searchHistory = ref<string[]>([]);
  const currentPage = ref(1);
  const totalResults = ref(0);
  const query = ref("");

  const loadHistory = () => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      searchHistory.value = JSON.parse(savedHistory);
    }
  };

  const saveHistory = () => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory.value));
  };

  const addToHistory = (searchQuery: string) => {
    if (!searchHistory.value.includes(searchQuery)) {
      searchHistory.value.unshift(searchQuery);
      if (searchHistory.value.length > 5) {
        searchHistory.value.pop();
      }
      saveHistory();
    }
  };

  const fetchRepositories = async (searchQuery: string, page = 1) => {
    if (!searchQuery.trim()) return;

    isLoading.value = true;
    errorMessage.value = "";
    query.value = searchQuery;
    currentPage.value = page;

    try {
      const response = await api.get("", {
        params: {
          q: searchQuery,
          sort: "stars",
          order: "desc",
          per_page: 10,
          page,
        },
      });

      if (response.data.items.length === 0) {
        errorMessage.value = "No repositories found for your search.";
        return;
      }

      repositories.value = response.data.items;
      totalResults.value = response.data.total_count;
      addToHistory(searchQuery);
    } catch (error) {
      errorMessage.value =
        "There was a problem getting the repositories. Try again.";
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  loadHistory();

  return {
    repositories,
    isLoading,
    errorMessage,
    searchHistory,
    currentPage,
    totalResults,
    fetchRepositories,
  };
});
