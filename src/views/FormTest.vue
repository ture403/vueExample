<template>
    <div>
      <input type="date" v-model="date">
      <span v-show="showDateError">날짜를 체크해주세요</span>
      <br>
      <input type="time" v-model="time">
      <span v-show="showTimeError">시간을 체크해주세요</span>
  
    </div>
    <div id="example-3">
      수신동의 :
      <input type="checkbox" value="all" v-model="allSelected" />
      <label for="all">전체</label>
      <div v-for="(item, index) in checkList">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectList"
          :key="index"
        />
        <label :for="item" :name="item" :id="item">{{ item }}</label>
      </div>
      <br />
      <span>checkList: {{ selectList }}</span>
    </div>
    <button @click="submitButton">버튼</button>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  
  export default {
    setup() {
      const checkList = ref(["e-mail", "SMS", "test1"]);
      const selectList = ref([]);
      const date = ref("");
      const time = ref("");
      const showDateError = ref(false);
      const showTimeError = ref(false);
  
  
      const allSelected = computed({
        get: () => {
          return checkList.value.length === selectList.value.length;
        },
        //setter
        set: (e) => {
          selectList.value = e ? checkList.value : [];
        },
      })
      
      const submitButton = () => {
        if(date.value && time.value && (selectList.value.length == checkList.value.length)){
          console.log("성공!")
        } else {
          if(!date.value) {
            showDateError.value = true;
          }
          else if (!time.value) {
            showTimeError.value = true;
          }
          else if(selectList.value.length !== checkList.value.length) {
            alert("체크박스를 클릭해주세요")
          }
        }
      }
  
      return {
        date,
        time,
        checkList,
        selectList,
        allSelected,
        submitButton,
        showTimeError,
        showDateError
      }
    }
  };
  </script>
  