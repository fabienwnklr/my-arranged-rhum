export default defineComponent({
  async setup() {
    // const data = await $fetch('http://localhost:1337/api/recipes?populate[illustration]=media&populate[ingredients][populate]=*');
    // console.log(data);
    return () => <h1>Recettes</h1>;
  }
});
