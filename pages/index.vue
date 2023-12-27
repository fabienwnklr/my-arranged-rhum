<script setup>
import { useI18n } from "#imports";

const { t } = useI18n();

const items = [
  {
    label: t("home_tab_1"),
    icon: "i-heroicons-bell-alert",
    iconClass: " text-red-600",
    content: "This is the content shown for Tab1",
  },
  {
    label: t("home_tab_2"),
    icon: "i-heroicons-check-badge",
    iconClass: " text-green-600",
    content: "And, this is the content for Tab2",
  },
  {
    label: t("home_tab_3"),
    icon: "i-heroicons-exclamation-triangle",
    iconClass: " text-orange-600",
    content: "Finally, this is the content for Tab3",
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
  <h1 class="text-2xl mb-3 text-center">{{ $t("home_title") }}</h1>
  <UTabs v-model="selected" :items="items">
    <template #default="{ item, index, selected }">
      <div class="flex items-center gap-2 relative truncate">
        <UIcon :name="item.icon" :class="'w-4 h-4 flex-shrink-0' + item.iconClass" />

        <span class="truncate">{{ item.label }}</span>

        <span
          v-if="selected"
          class="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
        />
      </div>
    </template>
  </UTabs>
</template>
