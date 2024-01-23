<!-- src/components/TodayIgnore.vue -->

<template>
    <div v-show="!todayIgnored">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, saepe?
    </div>
    <button @click="ignoreToday">오늘 하루 안 보기</button>
    <button @click="nextBtn">건강검진 예약하기</button>
</template>
<script>
import { ref ,onMounted } from 'vue';
import { useCookies } from 'vue3-cookies';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const todayIgnored = ref(false);
        const { cookies } = useCookies();
        const router = useRouter();

        const ignoreToday = () => {
            var date = new Date();
            date.setDate(date.getDate() + 1);
            cookies.set("todayIgnored","true", date);
            cookies.set('todayIgnored', 'true', 86400);
            todayIgnored.value = true;
            // 다른 페이지로 이동
            router.push('/img');
        };
        const nextBtn = () => router.push('/img')

        onMounted(() => {
            // 페이지 진입 시 쿠키 확인하여 todayIgnored 값 설정
            const isTodayIgnored = cookies.get('todayIgnored') === 'true';
            if(isTodayIgnored){
                router.push('/img')
            }
            todayIgnored.value = isTodayIgnored;
        });

        return {
            todayIgnored,
            ignoreToday,
            nextBtn
        };
    },
};
</script>