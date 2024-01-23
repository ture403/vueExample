import { createStore } from "vuex";

import count from "@/store/test/count.js";
import count2 from "@/store/test/count2.js";


const store = createStore( {
    namespaced: true,
    modules: {
      count,
      count2
    }
})

export default store;