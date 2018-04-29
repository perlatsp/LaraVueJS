<template>
  <v-card ripple hover transition="slide-x-transition" :to="'/product/'+product.id" v-if="product">
    <v-card-media :src="product.image" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{product.title}}</h3>
        <div v-html="product.description.substr(0,100)+'...'"></div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn class="mx-auto" flat color="amber">£ {{product.price}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'post-card',
    props: {
      product: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
