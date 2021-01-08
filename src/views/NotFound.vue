<template>
    <v-row>
        <v-col class="py-0">
            <v-row
                class="height-100vh index-background-1366x768"
                justify="center"
                align="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                    class="text-center"
                >

                    <p id="subtitle" class="white--text">
                        Page not found! :-(

                    </p>
                    <img
                        :src="require('@/assets/NotFound.png')"
                        width="40px"
                    />
                    <br><br>
                    <v-btn
                        @click="$router.go(-1)"
                        color="grey"
                        class="mx-6"
                        depressed
                        large
                    >
                        <span class="white--text">Go Back</span>
                    </v-btn>
                    <v-btn
                        @click="$router.push('/')"
                        color="purple darken-4"
                        class="mx-6"
                        depressed
                        large
                    >
                        <span class="white--text">Home Page</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style>

#subtitle {
    font-size: 32px;
}

</style>
