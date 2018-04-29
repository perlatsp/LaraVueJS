<template>

  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex md9>
        <v-card flat>
          <v-layout row wrap justify-space-arround v-if="products">
            <v-flex d-flex md4 class="pa-1" v-for="product in products.data">
              <product-card :product="product"/>
            </v-flex>
          </v-layout>

          <v-flex v-if="!products">
            <v-alert type="warning" :value="true">
              <span class="mx-auto">
                No Products Found
              </span>
            </v-alert>
          </v-flex>
        </v-card>
        <v-flex>
          <v-alert :value="error">
            {{error}}
          </v-alert>
        </v-flex>
      </v-flex>
      <v-flex md3>
        <v-card class="sidebar">
          <v-container fluid>
            <v-flex>
              <v-text-field
                placeholder="Search Products"
                v-model="filter.keywords"
                :disabled="error"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-select
                :items="perPageOptions"
                v-model="filter.per_page"
                label="Show Per page"
                @change="getProducts"
                :disabled="error"
              ></v-select>
            </v-flex>
          </v-container>
          <v-flex sm12>
            <div class="text-xs-center">
              <v-pagination :length="pagination.last_page" :total-visible="5" v-model="filter.page" circle></v-pagination>
            </div>
          </v-flex>
        </v-card>

        <v-alert color="primary" :value="filter.keywords.length>0 && pagination.total>0">
          Maching products found : {{pagination.total}}
        </v-alert>


        <v-alert color="amber" :value="filter.keywords.length>0 && pagination.total<=0">
          No records found for : <strong> {{ filter.keywords }}</strong>
        </v-alert>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        perPageOptions:[5,10,15,25,50],
        products: {},
        filter: {
          keywords: '',
          per_page: 5,
          page: 1
        },
        pagination: {},
        error: null
      }
    },
    methods: {
      /**
       * Get the products from api
       */
      getProducts() {
        this.$http.get('/products', {params: this.filter})
          .then(response => {
            this.products = response.data
            this.pagination = response.data
            delete this.pagination.data.data
          })
          .catch(response => {
            this.error = `Something went wrong trying to fetch data from server!
            Please try again later!`
          })
      }
    },
    mounted() {
      this.getProducts()
    },
    watch: {
      'filter.keywords': function () {
        this.getProducts()
      },
      'filter.per_page': function () {
        this.getProducts()
      },
      'filter.page': function () {
        this.getProducts()
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
  }
</style>
