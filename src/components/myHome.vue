<template>
  <v-container fluid class="card">
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100"
            width="300"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <div>
              <router-link class="btn" to="/post" tag="button"
                >Inspect</router-link
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      post: [],
      cards: [
        {
          src: "https://images.pexels.com/photos/837268/pexels-photo-837268.jpeg?auto=compress&cs=tinysrgb&w=1600",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=1600",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/236133/pexels-photo-236133.jpeg?auto=compress&cs=tinysrgb&w=1600",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg?auto=compress&cs=tinysrgb&w=1600",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/7764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/270694/pexels-photo-270694.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/2008141/pexels-photo-2008141.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/1486106/pexels-photo-1486106.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/3623358/pexels-photo-3623358.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/5054357/pexels-photo-5054357.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/3032137/pexels-photo-3032137.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/3380158/pexels-photo-3380158.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
        {
          src: "https://images.pexels.com/photos/3967500/pexels-photo-3967500.jpeg?auto=compress&cs=tinysrgb&w=300",
          flex: 4,
        },
      ],
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

<style lang="scss" scoped>
.card {
  position: absolute;
  right: -2px;
  width: 1200%;
  height: 500%;
  padding: 10px;
  top: 100%;
}
.btn {
  background-color: black;
  border: 2px solid rgb(71, 64, 64);
  text-align: center;
  border-style: outset;
  padding: 5px 15px;
}
.button2:hover {
  background-color: red;
  color: white;
}
</style>
