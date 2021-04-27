<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <input type="text" class="form-control" name="new-message" v-model="newMessage" placeholder="New Message (Enter To Add) :">
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name:"NewMessage",
    props: ['name'],
    data(){
        return{
            newMessage:null,
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.newMessage = null
            }
        }
    },
}
</script>

<style>

</style>