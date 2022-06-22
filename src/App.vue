<template>
  <v-card class="mx-auto" max-width="2000">
    <v-system-bar color="indigo darken-2" dark>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Display ID's </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search..."
        single-line
        hide-details
      ></v-text-field>
      <div><home></home></div>
    </v-toolbar>
  </v-card>
</template>

<script>
import home from "./components/myHome.vue";

export default {
  name: "App",
  components: { home },

  data() {
    return {
      post: [],
    };
  },

  async mounted() {
    let result = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: 15,
        },
      }
    );
    console.log(result.data);
    this.post = result.objects;
  },
};
</script>

<style>
.toolbar {
  margin: 1;
}
.card {
  margin: 1;
}
.button {
  margin: 1;
}
</style>
