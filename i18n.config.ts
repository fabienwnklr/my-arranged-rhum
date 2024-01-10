export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      welcome: 'Welcome',
      navbar: {
        home: 'Home',
        recipes: 'Recipes',
        favorites: 'Favorites',
        news: 'News',
        account: 'Account'
      },
      home: {
        title: 'Best recipes',
        tab_new_recipes: 'Last recipes',
        tab_popular_recipes: 'Popular recipes',
        tab_atypical_recipes: 'Atypical recipes'
      }
    },
    fr: {
      navbar: {
        home: 'Accueil',
        recipes: 'Recettes',
        favorites: 'Favoris',
        news: 'Actualités',
        account: 'Mon compte'
      },
      home: {
        title: 'Les meilleures recettes de rhum arrangé',
        tab_new_recipes: 'Dernières recettes',
        tab_popular_recipes: 'Recettes populaires',
        tab_atypical_recipes: 'Recettes atypiques'
      },
      welcome: 'Bienvenue'
    }
  }
}));
