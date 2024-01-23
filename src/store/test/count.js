const count = {
  namespaced: true,
  state: {
    num: 10
  },
  getters: {
    time2(state) {
      return state.num * 2;
    }
  },
  mutations: {
    setCounter(state, value) {
      state.num = value;
    }
  },
  actions: { // 'action'이 아니라 'actions'로 수정
    asyncIncrement({ commit, state }) { // 첫 번째 매개변수를 구조분해하여 'commit'을 사용
      // 비동기 작업 수행 (예: API 호출, 비동기 연산)
      setTimeout(() => {
        // 뮤테이션 호출
        commit('setCounter', state.num +1);
      }, 1000);
    }
  }
};

export default count;
