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
                region: "eu-de", // The region your integration is hosted in.
                serviceInstanceID: "c2a0b736-3445-475c-8b05-299f6b79c10d", // The ID of your service instance.
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

.display-none {
    display: none;
}

.index-background-1366x768 {
    background: url('../assets/index/Zagreb.png') no-repeat center;
    background-size: cover;
}

.text-styling {
    text-decoration: none;
}

.header-img {
    position: absolute !important;
    top: 0;
    left: 0;
}

.font-size-16px {
    font-size: 16px !important;
}

.font-size-34px {
    font-size: 34px !important;
}

.height-100vh {
    height: 100vh;
}

.min-height-100vh {
    min-height: 100vh;
}

.font-size-60px {
    font-size: 60px;
}

.font-size-96px {
    font-size: 96px;
}

.border-radius-15px {
    border-radius: 15px;
}

.z-index-1 {
    z-index: 1;
}

.row-margin {
    margin: 125px 0;
}

.animation-class {
    margin-top: 25px;
    opacity: 0;
}

.animate {
    transition-delay: 0.15s;
    transition-duration: 0.75s;
    transition-timing-function: ease-in;
}

.slide-up {
    transform: translateY(0);
}

.slide-up.animate-active {
    transform: translateY(-25px);
    opacity: 1;
}

.grey-text {
    color: #848282;
}

.bottom-2px {
    bottom: 2px;
}

.divider {
    width: 50px;
    height: 2px;
    background: rgba(0, 0, 0, 0.12);
    margin: 0 auto;
}

.titles {
    font-size: 45px;
}

.header-img-position {
    position: relative;
    top: 70px;
}

.navy-blue-section {
    background: #4285F4;
    color: #fff !important;
}

.header-margins {
    margin-top: 150px;
    margin-left: 100px;
}

.header-title {
    font-size: 60px;
    color: #4285F4;
}

.header-font-size {
    font-size: 100px !important;
}

.header-sm-font-size {
    font-size: 50px !important;
}

.header-smaller-screens-margin {
    margin-bottom: 200px;
}

</style>
