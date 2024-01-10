<script setup>
import { useI18n } from "#imports";

const { t } = useI18n();

const items = [
  {
    key: "new",
    label: t("home.tab_new_recipes"),
    description: "Make changes to your account here. Click save when you're done.",
  },
  {
    key: "popular",
    label: t("home.tab_popular_recipes"),
    description: "Change your password here. After saving, you'll be logged out.",
  },
  {
    key: "atypical",
    label: t("home.tab_atypical_recipes"),
    description: "Change your password here. After saving, you'll be logged out.",
  },
];

const route = useRoute();
const router = useRouter();

const selected = computed({
  get() {
    let index = items.findIndex((item) => item.label === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: items[value].label },
      // hash: "#control-the-selected-index",
    });
  },
});

</script>

<template>
  <UTabs v-model="selected" :items="items" class="w-full">
    <template #item="{ item }">
      <div v-if="item.key === 'new'" class="grid grid-cols-4 gap-4">
        <div v-for="item in 30" class="p-4 shadow-gray-400 rounded-md shadow-md">content 1</div>
      </div>
    </template>
  </UTabs>
</template>
