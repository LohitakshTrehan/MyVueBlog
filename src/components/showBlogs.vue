<template lang="html">
  <div id="show-blogs">
    <!-- SEND 'WIDE' AS STRING -->
    <h1>ALL BLOG ARTICLES</h1>
    <input type="text" v-model="search" placeholder="SEARCH TITLE OF BLOGS ">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2>{{blog.title | to-uppercase}}</h2>
      <router-link v-bind:to="'/blog/'+blog.id">
        <article>{{blog.content | snippet}}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogs:[],
      search:''
    }
  },
  methods:{

  },
  created(){
    this.$http.get('//ADD YOUR FIREBASE DATABASE LINK HERE')
    .then(function(data){
      console.log(data);
      console.log(data.json());//A promise object is being returned
      return data.json()
    }).then(function(data) {
      console.log(data);
      var blogsArray = [];
      for(let key in data)
      {
        console.log(key);
        console.log(data[key]);
        data[key].id=key
        blogsArray.push(data[key])
      }
      console.log(blogsArray);
      this.blogs=blogsArray;
    })
  },
  computed:{
    filteredBlogs:function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    toUppercase:function (value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="css">
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
