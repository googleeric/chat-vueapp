<template>
  <div class="container text-center welcome">
    <div class="row justify-content-center">
      <div class="col-md-6 justify-content-center">
        <div class="card">
      <div class="card-body">
        <h1>Welcome</h1>
        <form @submit.prevent="enterChat">
          <input type="text" class="form-control" name="name" placeholder="Enter Your Name" v-model="name">
          <p v-if="feedback" class="text-danger mb-n2 mt-2">{{ feedback }}</p>
          <button class="btn btn-primary mt-3">Enter Chat Room</button>
        </form>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({ name:"Chat", params: {name: this.name} })
      }
      else{
        this.feedback = "You Must Enter Name"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
