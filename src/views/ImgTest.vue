<template>
    <div>
      <button @click="openModal">이미지 업로드</button>
  
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <!-- 다중 선택 모드로 input 요소를 설정 -->
          <input type="file" @change="handleFileChange($event)" multiple />
          
          <div v-for="(image, index) in imageList" :key="index" class="image-container">
            <img :src="image.url" alt="Preview" class="preview-image" accept="
            
            .jpg, .jpeg, .png" />
            <button @click="removeImage(index)" class="remove-button">X</button>
          </div>
        </div>
      </div>
  
      <div v-for="list in radiolists">
        <input type="radio" :id="list.val" :name="list.val" v-model="pick" :value="list.val">
        <label :for="list.val">{{ list.val }}</label>
      </div>
      <span>{{ pick }}</span>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      // data
      const showModal = ref(false);
      const imageList = ref([]);
      const imgCount = ref(0);
      const copy = ref("복사된 항목");
      const pick =ref("");
      const radiolists = ref([
      {
        val : "라디오1",
      },
      {
        val : "라디오2"
      }
    ])
  
      // methods
      const openModal = () => {
        showModal.value = true;
      };
  
      const handleFileChange = (event) => {
        const allowedExtensions = ["jpg", "png", "gif", "jpeg"];
        const countResult = event.target.files.length + imgCount.value;
  
        if(countResult === 6) showModal.value = false;
  
        if (countResult > 6) {
          alert("6개 이상 업로드 불가합니다1.");
          event.target.value = "";
          return;
        }
        // 모든 선택된 파일을 반복하여 처리
        for (const file of event.target.files) {
          imgCount.value++;
          if (file) {
            const extension = file.name.split(".").pop().toLowerCase();
            if (allowedExtensions.includes(extension)) {
              const previewImage = URL.createObjectURL(file);
              imageList.value.push({
                file,
                url: previewImage,
              });
            } else {
              alert("유효하지 않은 파일입니다. jpg, png, gif 파일만 허용됩니다.");
              event.target.value = "";
              return;
            }
          }
        }
        event.target.value = "";
        console.log(imageList.value)
      };
  
      const removeImage = (index) => {
        // 배열에서 선택한 이미지와 삭제 버튼을 제거
        imageList.value.splice(index, 1);
        imgCount.value--;
      };
  
      const copyClip = () => {
        const copyread = copy.value;
        window.navigator.clipboard.writeText(copy.value).then(() => {
          alert(`${copyread} 가 복사 되었습니다.`);
        });
      };
  
      return {
        showModal,
        imageList,
        openModal,
        handleFileChange,
        removeImage,
        copyClip,
        copy,
        pick,
        radiolists
      };
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }
  
  .preview-image {
    max-width: 150px;
    max-height: 150px;
  }
  
  .remove-button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  </style>
  