<template lang="html">
  <div class="">
    <el-row >
      <el-col :span="20" :offset="2" >
        <el-alert
          type="info"
          show-icon>
          <el-row>
            <el-col :span="21">
              <p class="inform">Hacktiv Overflow is a community of 7.0 million programmers, just like you, helping each other. Join them; it only takes a minute:</p>
            </el-col>
            <el-col :span="3">
              <p><a href="#" class="button">sign up</a></p>
            </el-col>

          </el-row>
        </el-alert>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="16" :offset="2" >
          <h1>Top Question</h1>
          <el-button type="primary">Ask Question</el-button>
          <br>
          <br>
          <el-card class="box-card" v-for="question in questions" :key="question._id">
            <el-row>
              <el-col :span="18">
                <a href="#"><p>{{ question.title }}</p></a>
              </el-col>
              <el-col :span="3">
                <p>Votes : {{question.votes}}</p>
              </el-col>
              <el-col :span="3">
                <p>Answers : {{question.answers}}</p>
              </el-col>
            </el-row>
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      questions: []
    }
  },
  methods: {
    getQuestion() {
      let self = this
      axios.get('http://localhost:3000/questions/')
           .then(function(res) {
             res.data.forEach(function(x) {
               let obj = {}
               obj.title = x.title
               obj._id = x._id
               obj.votes = x.upVotes.length - x.downVotes.length
               obj.answers = x.answers.length
               self.questions.push(obj)
             })
             console.log(self.questions);
           })
           .catch(function(err) {
             console.log(err);
           })
    }
  },
  mounted() {
    this.getQuestion()
  }
}
</script>

<style lang="css" scoped>

  .inform {
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
  }
  .box-card {
    margin-bottom: 10px;
  }

</style>
