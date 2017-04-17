<template lang="html">
  <div class="">
    <el-row >
      <el-col :span="16" :offset="2" >
          <h1>Halo {{this.$store.state.username}}</h1>
          <router-link to="/login"><el-button type="primary" v-if="this.$store.state.statusLogin == false">Ask Question</el-button></router-link>
          <router-link to="/questions/ask"><el-button type="primary" v-if="this.$store.state.statusLogin == true">Ask Question</el-button></router-link>
          <br>
          <br>
          <h3>Your Questions :</h3>
          <el-card class="box-card" v-for="question in questions" :key="question._id">

              <el-row>
                <router-link :to="'/questions/'+question._id">
                <el-col :span="18">
                  <p>{{ question.title }}</p>
                </el-col>
                </router-link>
                <el-col :span="6">
                  <el-button type="danger" @click="deleteQuestion(question._id)">Delete</el-button>
                </el-col>
              </el-row>

          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      questions: [],
      id: this.$route.params.id,
      visible2 : false
    }
  },
  methods: {
    getQuestionById() {
      let self = this
      axios.get(`http://localhost:3000/users/${this.id}/panel`)
           .then(function(res){
             self.questions = res.data.data;
           })
    },
    deleteQuestion(id) {
      this.$alert('Are you sure?', 'Warning', {
        confirmButtonText: 'OK',
        callback: action => {
          if (action == 'confirm') {
            let self = this
            axios.delete(
                  `http://localhost:3000/questions/${id}`,
                  {headers: {'token': window.localStorage.getItem('token')}})
                 .then(function(res) {
                   if(res.data.success){
                     self.getQuestionById()
                   }
                 })
          }
        }
      });
    }
  },
  mounted() {
    this.getQuestionById()
  }
}
</script>

<style lang="css">
</style>
