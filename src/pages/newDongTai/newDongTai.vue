<template>
    <div>
        <div class="newDongTai-nav-wrapper">
            <back-btn></back-btn>
            <div class='sendBtn' @click='sendDongTai'>发表</div>
        </div>
        <el-input
            type="textarea"
            :autosize="{ minRows: 2 }"
            placeholder="想发表什么..."
            v-model="textarea"> 
        </el-input>    
        <alert v-show='mdState' @closeMd='closeMd' :message='message'></alert>
    </div>
</template>

<script>
    import { postNewDongTai } from '../../getData/getData.js'
    export default {
        data(){
            return{
                textarea: '',
                mdState: false,
                message: '发表失败'
            }
        },
        methods:{
            sendDongTai(){
                postNewDongTai({ dongTai: {
                                    content: this.textarea,
                                    whoPublish: this.$store.state.userInfo._id 
                                } 
                }).then( (val) =>{
                    this.message = val.data.message;
                    this.mdState = true;
                } )
            },
            closeMd(){
                this.$router.push({path: '/'})
            }
        }
    }

</script>

<style lang="scss">

.newDongTai-nav-wrapper{
    box-sizing: content-box;
    padding: 5px;
    height: 40px;
    border-bottom: 0.5px solid #eee;
}

.sendBtn{
    float: right;
    margin-right: 1rem;
    height: 100%;
    line-height: 40px;
}
    
</style>
