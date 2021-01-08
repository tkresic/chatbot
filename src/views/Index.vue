<template>
    <v-row>
        <v-col class="py-0">
            <v-row
                class="height-100vh index-background"
                justify="center"
                align="center"
            >
                <v-col
                    cols="12"
                    class="text-center white--text"

                >
                    <h1>Welcome to Zagreb Virtual Tourist Assistant!</h1>
                    <h2>My name is Jax 🐿 and I'll be your host.</h2>
                    <p class="white--text">
                        Click the button below to start me up or the icon in the bottom right corner!
                        <img
                            :src="require('@/assets/index/Happy.png')"
                            width="40px"
                            style="position: relative; top: 5px; left: 5px;"
                            alt="test"
                        />
                    </p>
                    <v-btn
                        @click="openWatson"
                        color="purple darken-4"
                        dark
                    >
                        Chat with me!
                    </v-btn>
                    <br><br>
                    <i>
                        <small>
                            Hint: You can ask Jax about hotels, restaurants, museums, pubs, tours, parks... and much more!
                        </small>
                    </i>
                </v-col>
            </v-row>
            <v-btn
                @click="startUp(false)"
                id="btn-position"
                color="purple darken-4"
                fab
                bottom
                fixed
                right
                dark
            >
                <v-icon>
                    autorenew
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>

export default {

    mounted() {
        this.startUp(true);

        document.addEventListener('click',function(e){
            if(e.target && e.target.parentNode.id === 'WACLauncher__Button'){
                document.getElementById("btn-position").style.display = "block";
            } else if(e.target && e.target.nodeName === 'svg'){
                document.getElementById("btn-position").style.display = "none";
            }
        });

    },

    methods: {
        openWatson() {
            document.getElementById("WACLauncher__Button").click();
            document.getElementById("btn-position").style.display = "block";
        },
        startUp(startup) {
            if (startup) {
                this.realStartUp(startup)
            } else {
                var elements = document.getElementsByClassName("WatsonAssistantChatHost");
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
                this.realStartUp(startup)
            }
        },
        realStartUp(startup) {
            setTimeout(function(){
                const t=document.createElement('script');
                t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
                document.head.appendChild(t);
            });

            window.watsonAssistantChatOptions = {
                integrationID: "892c9893-f6e5-48e7-8af3-c7ce4437f2a7", // The ID of this integration.
                region: "eu-de", // The region where the integration is hosted.
                serviceInstanceID: "c2a0b736-3445-475c-8b05-299f6b79c10d", // The ID of the service instance.
                onLoad: function(instance) {
                    instance.render();
                }
            };

            if (!startup) {
                var app = this;
                setTimeout(this.doIt, 300, app);
            }
        },
        doIt(app) {
            app.openWatson();
        }
    }

};

</script>

<style lang="scss">

#btn-position {
    display: none;
    right: 410px !important;
    bottom: 30px !important;
}

.index-background {
    background: url('../assets/index/Zagreb.png') no-repeat center;
    background-size: cover;
}


.height-100vh {
    height: 100vh;
}

</style>
