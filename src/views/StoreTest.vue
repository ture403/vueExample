<template>
    <div>
      <h1>This is an about page</h1>
      {{ counter }}
      {{ count1 }}
      <button @click="inc">inc</button>
    </div>
    <div>
      <h2>나 혼자 테스트</h2>
      {{ numCount }}
      <button @click="click">inc</button>
    </div>
    <div>
      <button @click="incrementAsync">Increment Async</button>
    </div>
  </template>
  <script>
  import { computed, ref } from "vue";
  import { useStore } from "vuex";
  export default {
    setup() {
      const store = useStore();
      const count1 = ref();
  
      // count.js
      const counter = computed(() => store.state.count.num);
      const test = computed(() => store.getters['count/time2']);
      count1.value = test
      const inc = () => store.commit("count/setCounter", counter.value + 1);
      const incrementAsync = () => store.dispatch('count/asyncIncrement');
      
      //count2.js
      const numCount = computed(() => store.state.count2.counter);
      const click = () => store.commit("count2/incrementCounter", counter.value + 1);
  
      
  
  
      return { counter, count1 ,inc, numCount ,click ,incrementAsync};
    },
  };
  </script>