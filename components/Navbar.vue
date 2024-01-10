<script setup>
import { useI18n } from "#imports";

const { t } = useI18n();
const colorMode = useColorMode();
const links = [
  {
    label: t("navbar.home"),
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: t("navbar.recipes"),
    icon: "i-heroicons-building-storefront",
    to: "/recipes",
  },
  {
    label: t("navbar.favorites"),
    icon: "i-heroicons-heart",
    to: "/favorites",
  },
  {
    label: t("navbar.news"),
    icon: "i-heroicons-newspaper",
    to: "/about",
  },
  {
    label: t("navbar.account"),
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    to: "/profile",
  },
  {
    label: "",
    icon: "i-heroicons-moon",
    onClick: () => {
      colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
    },
    class: "mt-auto ms-auto me-2 mb-2 !w-fit",
  },
];
</script>

<template>
  <UVerticalNavigation
    :links="links"
    class="flex flex-col shadow-[0_35px_30px_-15px] shadow-current"
  >
    <template #default="{ link }">
      <span class="group-hover:text-primary truncate relative hidden lg:flex">{{ link.label }}</span>
    </template>
  </UVerticalNavigation>
</template>
