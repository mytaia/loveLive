<template>
    <div>
        <nav-component></nav-component>
        <slider></slider>
        <div class='content-wrapper'>
            <div class='content-nav'>
                <ul>
                    <router-link tag='li' to='/newDongTai'><div class='writeIcon'><svg viewBox="0 0 1024 1024"><path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960z" p-id="4816" fill="#fff"></path><path d="M612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448z" p-id="4817" fill="#fff"></path><path d="M480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448z" p-id="4818" fill="#fff"></path><path d="M672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z" p-id="4819" fill="#fff"></path></svg></div></router-link>
                    <router-link tag='li' to='/'><span @click='switchPage("")' :class='{active: activePage === "" }'>广场</span></router-link>
                    <router-link tag='li' to='/actives'><span @click='switchPage("actives")' :class='{active: activePage === "actives" }'>活动</span></router-link>
                    <router-link tag='li' to='/random'><span @click='switchPage("random")' :class='{active: activePage === "random" }'>缘旦</span></router-link>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navComponent from '../../components/header.vue'
    import slider from '../../components/slider/slider.vue'
    export default { 
        components: { navComponent, slider },
        data(){
            return{
                activePage: ''
            }
        },
        created(){
            this.activePage = this.$route.path.replace('/','')
        },
        methods:{
            switchPage(pageName){
                this.activePage = pageName
            }
        }
    }
</script>

<style scoped>
    /*包裹以及导航样式 */
    .content-wrapper{
        margin-top: 55px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
    }
    .content-nav{
        width: 100%;
        position: relative;
        left: 0;
        top: 0;
        background-color: #fff;
    }
    .content-nav ul{
        width: 100%;
        display: flex;
        padding: 0 20px;
    }
    .content-nav li{
        flex: 1 1 300px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        margin: 5px 18px;
        border-radius: 18px;
        background-color: #2196f3;
        color: #fff;
    }

    .writeIcon{
        vertical-align: middle;
        display: inline-block;
        width: 80%;
        height: 80%;
    }
    .writeIcon svg{
        width: 100%;
        height: 100%;
    }

    .active{
        color: #f40;
    }
    
</style>