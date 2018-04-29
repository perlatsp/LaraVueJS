<template>
  <v-app >

    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar color="amber">
        <v-list>
          <v-list-tile avatar @click.stop="miniVariant = !miniVariant">
            <v-list-tile-avatar>
              <img src="https://github.com/perlatsp.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Perlat Kociaj</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile :to="m.link" v-for="m in menu">
          <v-list-tile-action>
            <v-icon>{{m.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{m.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="amber">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title to="/" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; Perlat Kociaj</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        menu: [{
          icon: 'home',
          title: 'Dashboard',
          link: '/'
        }],
        miniVariant: true,
        title: 'Product Paginated'
      }
    },
    name: 'App'
  }
</script>
