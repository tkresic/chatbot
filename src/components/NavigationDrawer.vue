<template>
    <v-navigation-drawer
        v-model="drawer"
        v-if="$vuetify.breakpoint.smAndDown"
        app
        :style="{ top: '75px' }"
    >
        <v-list class="pt-0">
            <v-list-item-group>
                <v-list-item
                    @click="$vuetify.goTo('#about')"
                    class="text-center"
                    active-class="active-ng-list-item"
                >
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="'About'"
                            class="text-uppercase dark--text"
                        ></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="$vuetify.goTo('#services')"
                    class="text-center"
                    active-class="active-ng-list-item"
                >
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="'Services'"
                            class="text-uppercase dark--text"
                        >
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

import Vue from 'vue'

export default Vue.extend({

  name: 'NavigationDrawer',

  props: ['drawer'],

})
</script>