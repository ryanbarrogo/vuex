<template>
  <div id="product-list-one">
    <v-container grid-list-md>
      <h2>Products List One</h2>
      <v-btn v-on:click="reducePrice(2)" color="red darken-1">Reduce Price</v-btn>
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout>
            <v-flex
              v-for="product in saleProducts"
              :key="product.id"
              xs12
              sm6
            >
              <v-card>
                  <v-card-media height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{product.name}}</h3>
                      <div>Php {{product.price}}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn color="light-blue darken-3">Share</v-btn>
                    <v-btn color="teal darken-3">Buy</v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>-->

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import axios from 'axios'

  export default {
    name: "ProductListOne",
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created() {
      /*axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })*/

      /*async / await version (created() becomes async created())

      try {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        this.posts = response.data
      } catch (e) {
        this.errors.push(e)
      }*/
    },
    computed:{
      products(){
        return this.$store.state.products
      },
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods:{
      ...mapActions([
        'reducePrice'
      ])
    }
  }
</script>

<style scoped>

</style>
