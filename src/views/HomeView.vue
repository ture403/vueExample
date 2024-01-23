<template>
    <div>
        <button @click="CookiePopBtn">쿠키팝업</button>
        <button @click="formBtn">폼바인딩</button>
        <button @click="stroeBtn">스토어쓰는법</button>
        <button @click="imgBtn">이미지</button>
    </div>
</template>

<script>
import router from '@/router'


    export default {
        setup() {
            
            const CookiePopBtn = () => router.push("/cookie")
            const formBtn = () => router.push("/form")
            const stroeBtn = () => router.push("/store")
            const imgBtn = () => router.push("/img")

            return {
                CookiePopBtn,
                formBtn,
                stroeBtn,
                imgBtn
            }
        }
    }
</script>

<style scoped>

</style>