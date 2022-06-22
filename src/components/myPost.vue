<template>
  <div>
    <h1>post data here</h1>
    <div class="postTable">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="post">ID #:</th>
              <th class="post">User ID</th>
              <th class="post">Title</th>
              <th class="post">Body</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in post" v-bind:key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div><post></post></div>
    </div>
  </div>
</template>

<script>
import post from "@/components/myPost.vue";

export default {
  name: "thePost",
  component: { post },
  data() {
    return {
      search: "",
      post: [],
    };
  },
  async mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 15,
        },
      })

      .then((response) => {
        this.post = response.data;
      });
  },

  catch(error) {
    console.log(error);
  },
};
</script>

<style lang="scss" scoped>
.postTable {
  background-color: blue;
}
</style>
>
