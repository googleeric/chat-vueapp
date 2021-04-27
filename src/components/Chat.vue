<template>
    <div class="container chat">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="text-danger">Codewist Chat Room</h2>
                <div class="card">
                    <div class="card-body">
                        <ul class="messages">
                            <li v-for="message in messages" :key="message.id">
                                <span class="text-info">{{message.name}}</span>
                                <span class="text-success">{{message.content}}</span>
                                <span class="text-secondary time">{{ message.timestamp}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-action mt-n4">
                        <NewMessage :name="name"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name: "Chat",
    props: ['name'],
    components:{
        NewMessage,
    },
    data(){
        return{
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('llll')
                    })
                }
            })
        })
    }
}
</script>

<style>
.chat li{
    list-style-type: none;
    text-align: left !important;
}
.chat .time{
    display: block;
    font-size: 14px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width: 3px;
}
.messages::-webkit-scrollbar-track{
    background: lemonchiffon;
}
.messages::-webkit-scrollbar-thumb{
    background: lemonchiffon;
}
</style>