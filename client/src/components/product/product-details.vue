<template>
  <v-container fluid>
    <section>
      <v-container fluid grid-list-sm>
        <v-parallax :src="product.image" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center" v-html="product.title"></h1>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
            >
             £ {{product.price}} Buy
              <v-icon>
                shopping_cart
              </v-icon>
            </v-btn>
          </v-layout>
        </v-parallax>
      </v-container>
    </section>

    <section>
      <v-container fluid grid-list-sm>
        <v-layout justify-space-aroun wrap>
          <v-flex>
            <v-card raised>
              <v-card-text>
                <p id="post-body" v-html="product.description">
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-container>
</template>

<script>
  export default {
    name: 'product-details',
    data () {
      return {
        product: {}
      }
    },
    methods: {
      getPostDetails () {
        this.$http.get(`products/${this.$route.params.id}`)
          .then(response => {
            this.product = response.data
            console.log(response)
          })
      }
    },
    mounted () {
      this.getPostDetails()
    }
  }
</script>

<style scoped>

</style>
