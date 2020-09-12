<template>
    <v-row
        align="center"
        justify="center"
        class="not-found"
    >
        <v-col
            cols="12"
            sm="8"
            md="4"
            class="text-center"
        >

            <p id="subtitle">
                Stranica nije pronađena

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
                <span class="white--text">Idi nazad</span>
            </v-btn>
            <v-btn
                @click="$router.push('/')"
                color="primary"
                class="mx-6"
                depressed
                large
            >
                <span class="white--text">Početna stranica</span>
            </v-btn>
        </v-col>
    </v-row>
</template>

<style>

.not-found {
    background: #fdfdfd;
    border-bottom: 1px solid #d0d0d0;
}

#subtitle {
    font-size: 32px;
}

</style>
