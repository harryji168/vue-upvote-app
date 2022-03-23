<template>   
  <button @click="upvoteButton({ sel: sel_text, group: group })" :style="button_bg" ><fa class="arrow-up" icon="arrow-up"  :style="arrow_bg" /></button>  
</template>

<script>

import { mapState,mapActions } from "vuex";
export default {
  props: {
    sel: Boolean,
    group: String,
  },
  computed: {
     ...mapState(["upvotes"]),   
     sel_text() {
      let index = this.upvotes.findIndex((upvote) => upvote.group===this.group);
      return this.upvotes[index].sel;     
    },
    button_bg() {
      //console.log("dfd"+upvote1);
      let index = this.upvotes.findIndex((upvote) => upvote.group===this.group);
      return [this.upvotes[index].sel ? { backgroundColor:"#E5E8FD" } : { backgroundColor: "#F4F6F8" }];    
    },
    arrow_bg() {
      let index = this.upvotes.findIndex((upvote) => upvote.group===this.group);
      return [this.upvotes[index].sel ? { color:"#253CF2" } : { color: "#343A40" }];
    },   
  },
  methods: {
    ...mapActions(["upvoteButton"]),
  },
};
 
</script>
<style scoped>
.arrow-up{
  width: 30px; 
}
button {
    padding: 1.75rem;
    border-radius: 8px;
    border: none; 
    font-size: 3em;
}
.arrow-up-selected{
  width: 30px; 
} 
</style>