export default defineComponent({
  setup() {
    const colorMode = useColorMode();
    const links = [
      {
        label: 'Accueil',
        icon: 'i-heroicons-home',
        to: '/'
      },
      {
        label: 'Recettes',
        icon: 'i-heroicons-building-storefront',
        to: '/recipes'
      },
      {
        label: 'Favoris',
        icon: 'i-heroicons-heart',
        to: '/favorites',
      },
      {
        label: 'Actualités',
        icon: 'i-heroicons-newspaper',
        to: '/about'
      },
      {
        label: 'Mon compte',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        },
        to: '/profile',
      },
      {
        label: '',
        icon: 'i-heroicons-moon',
        onClick: () => {
          colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
        },
        class: 'mt-auto ms-auto me-2 mb-2 !w-fit'
      }
    ];
    return () => <UVerticalNavigation links={links} class='flex flex-col shadow shadow-current' ui={{ label: "hidden lg:flex"}} />;
  }
});
