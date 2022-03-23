<script> 
import Upvote from './Upvote.vue';
import { ref } from "vue";
export default {  
   components: { Upvote }, 
   props: ['group'],
   setup() {
    const UpvoteList=ref([
      { id: 1   }
    ]);
   function addToList() {
      UpvoteList.value.push({
        id: UpvoteList.value.length 
      }); 
    }
    return {
      UpvoteList,
      addToList,
    };
   }
}
</script>
<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-1 mx-auto">
    <div class="lg:w-3/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <div class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 border-2 border-grey rounded-lg">              
           <Upvote v-for="(Upvotes, key) in UpvoteList" :key="key" :sel="false" :group="this.group"  />         
      </div>
      <button @click="addToList()" ><fa class="fa-plus" icon="plus" /></button>
    </div>
  </div>
  </section> 
</template>

 
<style scoped>
button{
  margin: 10px;
  padding: 1.50rem;
  border-radius: 8px;
  border: none; 
  font-size: 3em;
  background-color:#F4F6F8;
}
</style>