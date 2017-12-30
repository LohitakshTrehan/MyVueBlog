<template lang="html">
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>
      {{blog.content}}
    </article>
    <p>Author: {{blog.author}}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    //Because we have to go and grab some data
    //and this is the best lifecycle hook for it
    this.$http.get('//ADD YOUR FIREBASE DATABASE LINK HERE'+this.id+'.json').then(function(data){
      console.log(data);
      return data.json()
    }).then(function(data){
      this.blog=data;
    })
  }
}
</script>

<style lang="css">
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>
