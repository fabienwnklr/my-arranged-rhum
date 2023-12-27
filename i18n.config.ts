export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      welcome: 'Welcome',
      home_title: 'Best recipes',
      home_tab_1: 'Last recipes',
      home_tab_2: 'Popular recipes',
      home_tab_3: 'Atypical recipes',
    },
    fr: {
      welcome: 'Bienvenue',
      home_title: 'Les meilleures recettes de rhum arrangé',
      home_tab_1: 'Dernières recettes',
      home_tab_2: 'Recettes populaires',
      home_tab_3: 'Recettes atypiques',
    }
  }
}));
