<template>
  <div id="product-list-two">
    <v-container grid-list-md>
      <h2>Products List Two</h2>
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
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="green">Buy</v-btn>
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
  export default {
    name: "ProductListTwo",
    data() {
      return {}
    },
    computed:{
      products(){
        return this.$store.state.products
      },
      saleProducts(){
        return this.$store.getters.saleProducts
      }
    }
  }
</script>

<style scoped>

</style>
