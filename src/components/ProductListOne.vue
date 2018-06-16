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
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    name: "ProductListOne",
    data() {
      return {}
    },
    computed:{
      products(){
        return this.$store.state.products
      },
      saleProducts(){
        return this.$store.getters.saleProducts
      },
      /*...mapGetters({

      })*/
    },
    methods:{
      reducePrice: function (amount) {
        this.$store.dispatch('reducePrice', amount)
      },
      /*...mapActions({
        'saleProducts'
      })*/
    }
  }
</script>

<style scoped>

</style>
